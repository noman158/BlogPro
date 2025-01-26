import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Comment } from '../../types';

interface CommentsState {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.unshift(action.payload);
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setComments, addComment, deleteComment, setLoading, setError } =
  commentsSlice.actions;
export default commentsSlice.reducer;