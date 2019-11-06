export const RECEIVE_DEMO = 'RECEIVE_DEMO';
export const REMOVE_DEMO = 'REMOVE_DEMO';

const receiveDemo = (demoUser) => ({
  type: RECEIVE_DEMO,
  demoUser
});

const removeDemo = (demoUser) => ({
  type: REMOVE_DEMO,
  demoUser
})

export const onDemo = (demoUser) => (
  dispatch(receiveDemo(demoUser))
);

export const offDemo = (demoUser) => (
  dispatch(removeDemo(demoUser))
);
