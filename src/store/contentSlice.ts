import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TContent, TContentState } from '../@types';

const initialState: TContentState = {
  posts: [],
  reviews: [],
};

export const contentSlice = createSlice({
  initialState,
  name: 'content',
  reducers: {
    cachePost: (state, action: PayloadAction<TContent>) => {
      state.posts.push(action.payload);
    },
    cacheReview: (state, action: PayloadAction<TContent>) => {
      state.reviews.push(action.payload);
    },
    cacheContents: (state, action: PayloadAction<TContentState>) => {
      action.payload.posts.forEach((post) => {
        state.posts.push(post);
      });
      action.payload.reviews.forEach((review) => {
        state.reviews.push(review);
      });
    },
    resetCache: (state) => {
      state.posts = [];
      state.reviews = [];
    },
  },
});

export const { cachePost, cacheReview, resetCache, cacheContents } =
  contentSlice.actions;
export default contentSlice.reducer;
