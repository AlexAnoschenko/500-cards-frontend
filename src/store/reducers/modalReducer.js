import { createReducer } from '@reduxjs/toolkit';
import { openModalAction, closeModalAction } from 'store/actions/modalActions';

const initialState = {
  modal: { isOpen: false, type: null },
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(openModalAction, (state, action) => {
      void (state.modal.isOpen = action.payload.isOpen);
      void (state.modal.type = action.payload.type);
    })
    .addCase(closeModalAction, (state, action) => {
      void (state.modal.isOpen = action.payload.isOpen);
      void (state.modal.type = action.payload.type);
    });
});
