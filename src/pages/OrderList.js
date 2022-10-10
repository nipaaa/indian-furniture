import React from 'react';

const OrderList = (props) => {
    const {cart} = props;
    return (
        <div className="card border-warning w-50 mx-auto mb-3 mx-4">
  <div className="card-header bg-transparent border-success text-warning fw-bolder">Order List</div>
  <div className="card-body text-success">
            {
                cart.map(product =><div className='d-flex align-items-center my-3'>
                    <img style={{width:"50px",height:"50px"}} className='border border-3 border-warning rounded-circle me-3' src={product.picture} alt="" />
                    <h4>{product.productName} <span className='mx-3'>-----</span>{product.price}</h4></div> )
            }
  </div>
</div>
    );
};

export default OrderList;