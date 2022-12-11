import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  modal: { isOpen: false, type: null },
};

export default createReducer(initialState, () => {});
