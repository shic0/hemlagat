import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './Product.module.scss';
import CartButton from '../../atoms/CartButton/CartButton';
import { addToCart } from '../../../store/actions/cartActions';

const Product = ({ product }) => {
  const { id, name, price, image, description } = product;
  const dispatch = useDispatch();

  return (
    <div className={style.product}>
      <h3>
        {id}. {name}
      </h3>
      <img src={image} alt={name} width="250" height="250" />
      <p className={style.description}>{description}</p>
      <div className={style.price}>Pris: {price} SEK</div>

      <CartButton
        title="Lägg till varukorg"
        onClick={() => dispatch(addToCart(product))}
      />
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
  }).isRequired
};

export default Product;
