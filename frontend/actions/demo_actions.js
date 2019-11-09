export const RECEIVE_DEMO_STATE = 'RECEIVE_DEMO';
export const REMOVE_DEMO_STATE = 'REMOVE_DEMO';

const receiveDemo = (demoUser) => ({
  type: RECEIVE_DEMO_STATE,
  demoUser
});

const removeDemo = (demoUser) => ({
  type: REMOVE_DEMO_STATE,
  demoUser
})

export const addDemoState = (demoUser) => (
  dispatch(receiveDemo(demoUser))
);

export const removeDemoState = (demoUser) => (
  dispatch(removeDemo(demoUser))
);
