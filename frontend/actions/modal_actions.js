export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = (modal) => {
  return {
    type: CLOSE_MODAL,
    modal
  };
};