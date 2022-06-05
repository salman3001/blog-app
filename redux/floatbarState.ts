import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
}

export const floatbarState = createSlice({
  name: 'floatbarState',
  initialState,
  reducers: {
   togelState : (state)=> {state.open=!state.open}
  },
})

export const { togelState } = floatbarState.actions

export default floatbarState.reducer