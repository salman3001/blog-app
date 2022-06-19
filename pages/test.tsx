import { spawn } from 'child_process'
import ReactDOM from "react-dom"
import React, { Children, createElement, DetailedReactHTMLElement, InputHTMLAttributes, ReactNode, SyntheticEvent, useRef, useState } from 'react'
import { userInfo } from 'os'


const test = () => {
  const x=useRef<HTMLDivElement>(null)
  const [state,setState]=useState(<div ref={x} contentEditable className='border-2 border-black' ></div>)

  
  state.
  const useBold = () => {
  // //  const el= window.getSelection()?.anchorNode?.parentElement
  // //  if (el?.nodeName=="B") {
  // //    return "bold"
     
  // //  }else(console.log("false")
  // // )
  // const el=x.current
  //  const selstart=window.getSelection()?.getRangeAt(0).startOffset
  //  const selend=window.getSelection()?.getRangeAt(0).endOffset
  //  const selection=el?.innerHTML.substring(selstart,selend)
  //  const textstart=el?.innerHTML.substring(0,selstart)
  //  const textend=el?.innerHTML.substring(selend)
  //  el.innerHTML=`<span>${textstart}</span><b>${selection}</b><span>${textend}</span>  `

   console.log(state);
   
  }


  const underline=()=>{
    // const el= window.getSelection()?.anchorNode?.parentElement
    // const selstart=window.getSelection()?.getRangeAt(0).startOffset
    // const selend=window.getSelection()?.getRangeAt(0).endOffset
    // const selection=el?.innerHTML.substring(selstart,selend)
    // const textstart=el?.innerHTML.substring(0,selstart)
    // const textend=el?.innerHTML.substring(selend)
    // el.innerHTML=`<span>${textstart}</span><u>${selection}</u><span>${textend}</span>  `
   }
  


  return (
    <>
      {state}
      <button className='btn' onClick={useBold}>Bold</button>
      <button className='btn' onClick={underline}>underline</button>

    </>
  )
}

export default test