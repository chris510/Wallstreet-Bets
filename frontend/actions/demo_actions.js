export const RECEIVE_DEMO = 'RECEIVE_DEMO';
export const REMOVE_DEMO = 'REMOVE_DEMO';

const receiveDemo = (boolean) => ({
  type: RECEIVE_DEMO,
  boolean
});

const removeDemo = (boolean) => ({
  type: REMOVE_DEMO,
  boolean
})

export const loginDemo = (boolean) => (
  dispatch(receiveDemo(boolean))
);
