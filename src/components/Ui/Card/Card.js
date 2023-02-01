import React from 'react'
import "./Card.css"
import { useDispatch } from 'react-redux';
import { addProductToCart,removeFromCart } from '../../../store/actions';



const Card = ({product,btnName,click}) => {

  const dispatch=useDispatch();

  const handleAddToCart = (product) => {
    console.log("hello");
    console.log(product);
      dispatch(addProductToCart(product));
    };

    function handleRemoveFromCart(id){
      console.log();

      dispatch(removeFromCart(id));
    }

  return (
    <div className='card-box' key={product.key}>
        <div className='card-body'>
            <div className='product-img'>
                <img src={product.thumbnail} alt="" />
            </div>
            <div className='product-details'>
                <p>Title : {product.title}</p>
                <p>Price : {product.price}</p>
            </div>
            <button onClick={handleAddToCart} className='btn'>{btnName}</button>
        </div>
    </div>
  )
}

export default Card
