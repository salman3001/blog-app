import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import floatbarReducer from './floatbarState'
import newPostStateReducer  from './addNewPostState'

export const store = configureStore({
  reducer: {
    floatbarState : floatbarReducer,
    newPostState:newPostStateReducer,
  },
})

const makeStore=()=>store


export const wrapper = createWrapper(makeStore)