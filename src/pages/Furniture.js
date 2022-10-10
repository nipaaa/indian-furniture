import React from 'react';

const Furniture = ({furniture, handleToCart}) => {
    const { productName, picture, price } = furniture;
    return (
        <div>
             <div class="col">
    <div class="card h-100">
      <img height={400} src={picture} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{productName}</h5>
        <p class="card-text">Price: {price}</p>
        <button onClick={()=> handleToCart(furniture)} type="button" class="btn btn-success text-bold">Buy Now</button>
      </div>
      </div>
        </div>
        </div>
    );
};

export default Furniture;