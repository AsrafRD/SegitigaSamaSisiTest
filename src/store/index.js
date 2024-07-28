import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import permittionReducer from './reducers/permittionReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    permittion: permittionReducer,
  },
});

export default store;
