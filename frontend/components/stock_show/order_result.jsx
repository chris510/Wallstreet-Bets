import React from 'react';

const OrderResult = ({closeModal}) => {
  return (
    <div className="order-result-wrapper">
      <div className="order-result-container">
        <div className="order-result-row-1">
          <div className="order-result-text-1">
            Order Successful!
          </div>
        </div>
        <div className="order-result-row-2">
          <input type="submit" className="order-result-done-btn" value="Done" onClick={() => closeModal(null)}/> 
        </div>
      </div>
    </div>
  )
};

export default OrderResult;