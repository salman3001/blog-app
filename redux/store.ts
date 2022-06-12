import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import floatbarReducer from './floatbarState'

export const store = configureStore({
  reducer: {
    floatbarState : floatbarReducer,
  },
})

const makeStore=()=>store


export const wrapper = createWrapper(makeStore)