import { configureStore } from '@reduxjs/toolkit'
import  PostsSlice  from './Slices/PostSlice'



export const store = configureStore({
    reducer: {
        posts: PostsSlice,
    },
  })