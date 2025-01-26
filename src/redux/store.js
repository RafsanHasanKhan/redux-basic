import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counterSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
