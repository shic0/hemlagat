import { useState } from "react";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
import BasketItem from "./BasketItem";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props;

    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("/api/checkout-session", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}



    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '800px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Varkorg" />
                </ListItem>
                <Divider />

                {!order.length ? (
                    <ListItem>Varkorg är tomt!</ListItem>
                ) : (
                    <>
                    {order.map((item) => (
                        <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
                    ))}
                    <Divider />
                    <ListItem>
                        <Typography sx={{fontWeight: 700}}>
                            Totalt summan:{' '}
                            {order.reduce((acc, item) => {
                            return acc + 39 + item.price * item.quantity;
                            }, 0)}{' '}
                            SEK
                        </Typography>
                        <Typography sx={{color: 'rgb(62, 91, 134)'}}>
                        (med hemlevens avgift av 39 SEK)
                        </Typography>
                    </ListItem>
                        {/* <Button variant="contained" sx={{ml: '1rem'}} 
                        //component={Link} to="/checkout"
                        onClick={() => {
                            console.log('localStorage order in basket', orders);
                            alert('Dän sidan ska vidare till Stripe eller Klarna');
                            try {
                                if (order.length == 0) {
                                  throw new Error("No products added");
                                }
                                console.log(order)
                            
                                //reserverade plats för STRIPE
                            
                              } catch (err) {
                                console.log(err);
                              }
                        }}>Till betalningen</Button> */}
                    {!success ? 
                    <form onSubmit={handleSubmit}>
                        <fieldset className="FormGroup">
                            <div className="FormRow">
                                <CardElement />
                            </div>
                        </fieldset>
                        <button>Betala</button>
                    </form>
                    :
                <div>
                    <h2>Grattis ! du har bästelt mat till hem!</h2>
                </div> 
                    }

                    </>
                )}

            </List>
        </Drawer>
    )
}

export default Basket
