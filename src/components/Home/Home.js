import React from "react";
// import { useSelector } from 'react-redux';

import "./Home.css";
import Card from "../Ui/Card/Card";

const Home = ({ data }) => {
  //const store=useSelector((state)=>state);

  return (
    <div>
      <h1 className="home-heading">All Items</h1>
      <div className="product-list">
        {data.map((product) => {
        //   return <div className="card-box" key={product.id}>
        //     <div className='card-body'>
        //     <div className='product-img'>
        //         <img src={product.thumbnail} alt="" />
        //     </div>
        //     <div className='product-details'>
        //         <p>Title : {product.title}</p>
        //         <p>Price : {product.price}</p>
        //     </div>
        //     <button className='btn'>Add To Cart</button>
        // </div>
        //   </div>
        return <Card product={product} btnName="Add To Cart" click="handleAddToCart" />
        })}
      </div>
    </div>
  );
};

export default Home;
