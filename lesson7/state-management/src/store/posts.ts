// postsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state using that type
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostsState {
    posts: Post[];
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    error: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<Post[]>) {
            state.posts = action.payload;
        },

        addPost(state, action: PayloadAction<Post>) {
            state.posts.unshift(action.payload);
        },
    },
});

// Export the actions
export const { setPosts, addPost  } = postsSlice.actions;

// Export the reducer
export default postsSlice.reducer;
