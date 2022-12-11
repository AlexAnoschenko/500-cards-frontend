import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from 'store/reducers/cardsReducer';
import modalReducer from 'store/reducers/modalReducer';
import usersReducer from 'store/reducers/usersReducer';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    users: usersReducer,
    modal: modalReducer,
  },
});

export default store;
