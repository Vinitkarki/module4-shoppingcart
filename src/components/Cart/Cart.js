import React from 'react'
import "./Cart.css"
import Card from '../Ui/Card/Card';
import { useSelector} from 'react-redux';



const Cart = () => {

  const cart = useSelector(state => state.cart);

  return (
    <div>
    <h1>My Cart</h1>
    <div className='cart-list'>
      {cart.map((product)=>{
        return <Card product={product} btnName="Remove From Cart" click="handleRemoveFromCart" />
      })}
    </div>
    </div>
  )
}

export default Cart
