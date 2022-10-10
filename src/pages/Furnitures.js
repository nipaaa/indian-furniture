import React, { useEffect, useState } from 'react';
import useFurnitures from '../hooks/useFurnitures';
import Furniture from './Furniture';
import OrderList from './OrderList';

const Furnitures = () => {
    const [furnitures, setFurniture] = useFurnitures();
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setFurniture(data))
    },[])

    const handleToCart = product =>{

      if (cart.length <4) {
        if ( cart.includes(product)) {
            return alert('You have already added this')
        } else {
            setCart([...cart, product]); 
        }
      } else {
        alert('card is full')
      }
       
        
      
    }

    const chooseOne = cart =>{
        const item = cart[Math.floor(Math.random() * cart.length)];
        const cartArray = [];
        cartArray.push(...cartArray, item)
        setCart(cartArray);
    }

    const removeProduct = () =>{
        setCart([]);
    }

    return (
        <div className='container'>
            <div className='bg-success text-center rounded-3 py-5 my-5'>
            <OrderList 
            cart={cart}
            key={cart.id}
            ></OrderList>
            <div className='ms-4'>
            <button onClick={() => chooseOne(cart)}  type="button" className="btn btn-warning my-2">Choose One</button> <br />
            <button onClick={removeProduct} type="button" className="btn btn-danger">Reset</button>
            </div> 
            </div>

            <div>
            <h1 className='mb-5 text-success text-center'>Choose Your Favourite Furnitures</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4 m-0 mb-5'>
          
          {
              furnitures.map(furniture => <Furniture
              key={furniture.id}
              furniture={furniture}
              handleToCart={handleToCart}
              ></Furniture>)
          }
          </div>
            </div>
          
           
        </div>
    );
};

export default Furnitures;