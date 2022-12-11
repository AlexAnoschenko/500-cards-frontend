import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from './reducers/cardsReducer';
import modalReducer from './reducers/modalReducer';
import usersReducer from './reducers/usersReducer';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    users: usersReducer,
    modal: modalReducer,
  },
});

export default store;
