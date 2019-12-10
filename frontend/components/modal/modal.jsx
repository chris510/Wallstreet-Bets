import React from 'react';
import OrderResult from '../../components/stock_show/order_result';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal) {
    case 'order':
      component = <OrderResult />;
    break
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={() => closeModal(null)}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default Modal;