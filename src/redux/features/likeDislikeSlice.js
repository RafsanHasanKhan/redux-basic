import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: 0,
  disLikes: 0,
};

const likeDislikeSlice = createSlice({
  name: 'likeDislike',
  initialState,
  reducers: {
    
  }
});
