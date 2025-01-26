import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counterSlice';
import likeDislikeReducer from '../redux/features/likeDislikeSlice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    likeDislike: likeDislikeReducer,
  },
});

export default store;
