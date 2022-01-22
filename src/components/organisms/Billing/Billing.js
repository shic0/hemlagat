import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  useStripe,
  useElements,
  CardNumberElement
} from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validate } from '../../../helpers/validation';
import Axios from '../../../axios';
import CardSection from '../../molecules/CardSection/CardSection';
import style from './Billing.module.scss';
import { clearCart } from '../../../store/actions/cartActions';
import {
  checkoutRules,
  checkoutInitialValues
} from '../../../constants/validation';
import Input from '../../atoms/Input/Input';

const Billing = () => {
  // UseStripe-kroken returnerar en referens till Stripe-instansen som skickats till Elements provider.
  const stripe = useStripe();

  // För att säkert skicka betalningsinformationen som samlats in av ett Element till Stripe API, gå till komponent underliggande Element-instans så att du kan använda den med andra Stripe.js-metoder.
  const elements = useElements();

  // Hämta kundvagn från Redux, ända alternativt att clonera vår Store och dra framm här
  const cart = useSelector((state) => state.cart);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const getBillingDetails = (values) => {
    return {
      address: {
        // Här kan filtrera leverans ZIP kod regiion (>>> TODO zip kod filter <<<)
        city: 'Göteborg',
        country: 'SE',
        state: 'Västra Götaland',
        line1: values.address,
        line2: null,
        postal_code: values.zip
      },
      email: values.email,
      name: values.name,
      phone: values.phone
    };
  };

  const handleCardElementsChange = (event) => {
    // Ställ in felmeddelande som ska visas när användaren matar in felaktiga betalningsuppgifter
    if (event.error) {
      setError(event.error.message);
    } else {
      setError('');
    }
  };

  const afterPaymentSuccess = (paymentIntent) => {
    /* Det finns en risk att kunden stänger fönstret innan betalning påborjas
      TODO att konfigurera en webhook eller plugin för att lyssna efter evenemanget payment_intent.succeeded som hanterar alla affärskritiska åtgärder efter betalning.
      */
    dispatch(clearCart());

    const { amount, id } = paymentIntent;

    // Sista steg att skicka vidare till Success sida
    history.push(`/success?amount=${amount}&id=${id}`, {
      from: 'checkout'
    });
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setError('');
    const isStripeLoading = !stripe || !elements;

    if (isStripeLoading) {
      // Verifiera disable form i submission until Stripe är laddat
      setSubmitting(false);
      return;
    }

    try {
      // Skapa en betalning och få en klient secret från servern
      // Bestäm alltid hur mycket vi ska ta betalt på serversidan och aldrig klient sidan. Detta hindrar illvilliga kunder från att kunna välja sina egna priser. Lite tips fran Kanan
      const {
        data: { client_secret: clientSecret }
      } = await Axios.post('https://hemlagat.herokuapp.com/payment/secret', {
        products: cart.products.map((product) => ({
          id: product.id,
          quantity: product.quantity
        })),
        email: values.email
      });

    
      const cardPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: getBillingDetails(values)
        }
      });

      if (cardPayment.error) {
        setError(cardPayment.error.message);
      } else if (cardPayment.paymentIntent.status === 'succeeded') {
        afterPaymentSuccess(cardPayment.paymentIntent);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={checkoutInitialValues}
      validate={(values) => validate(checkoutRules, values)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        // isSubmitting Returnerar true om submission är pågår
        // stripe.confirmCardPayment kan ta några sekunder. under tider det ska vara disable "Submitting..." medellande
        // https://jaredpalmer.com/formik/docs/api/formik#issubmitting-boolean    här källor
        <Form>
          <div className={style.wrapBillingAndCardSection}>
            <div>
              <Input
                label="Namn och Efternamn"
                name="name"
                placeholder="Elon Musk"
                errors={errors}
                touched={touched}
              />
              <Input
                label="Din telefon nummer"
                name="phone"
                type="tel"
                pattern="[0-9]*"
                placeholder="0707070707"
                errors={errors}
                touched={touched}
              />
              <Input
                label="E post adress"
                name="email"
                type="email"
                placeholder="elon.musk@mail.com"
                errors={errors}
                touched={touched}
              />
              <Input
                label="Gatu namn"
                name="address"
                type="text"
                placeholder="Gata och nummer"
                errors={errors}
                touched={touched}
              />

              <Input
                label="Postkod"
                name="zip"
                type="text"
                placeholder="43130 OBSERVERA BARA MÖLNDAL POSTKOD REGION"
                errors={errors}
                touched={touched}
              />
            </div>
            <div>
              <CardSection
                stripe={stripe}
                isSubmitting={isSubmitting}
                error={error}
                handleChange={handleCardElementsChange}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Billing;
