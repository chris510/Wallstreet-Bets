import * as OrderAPIUtil from '../util/orders_api_util';

export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';

const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

const removeOrder = () => ({
  type: REMOVE_ORDER,
});

export const createOrder = order => dispatch (
  OrderAPIUtil.createOrder(order)
    .then( order => dispatch(receiveOrder(order)))
);

export const deleteOrder = () => dispatch => (
  OrderAPIUtil.removeOrder()
    .then( () => dispatch(removeOrder()))
);