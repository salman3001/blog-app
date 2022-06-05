import { createSlice } from "@reduxjs/toolkit"
import { StaticImageData } from "next/image"

interface InitialState {
  Auther: string
  date: string
  title: string
  tagline: string
  mainImage: undefined | StaticImageData
  url: string
  content: any
}

const initialState: InitialState = {
  Auther: "",
  date: "",
  title: "",
  tagline: "",
  mainImage: undefined,
  url: "",
  content:""
 
}

export const newPostState = createSlice({
  name: "newPostState",
  initialState,
  reducers: {},
})

export default newPostState.reducer
