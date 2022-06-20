import { randomUUID } from 'crypto'
import { iteratorSymbol } from 'immer/dist/internal'

import { HtmlProps } from 'next/dist/shared/lib/html-context'
import React, { Attributes, Children, createElement, HtmlHTMLAttributes, ReactNode, SyntheticEvent, useRef, useState } from 'react'

const test = () => {
  const [state,setState]=useState<{type:string,props:Attributes|null|undefined,children:ReactNode[]}[]>([{type:"div",props:{
    key:Date.now().toString(),
    id:"2",
    onClick:(e:SyntheticEvent)=>changeState(e.currentTarget.id)
  },children:["hi i am here"]}])

   const editor = state.map(item=>item? createElement(item.type,item.props,item.children):null)

   const changeState=(id:string)=>{
     console.log(id);
     setState(state=>{

       const newstate= state.map(item=>{
        let newchil=item.children

        if (item.props.id===id) {
          newchil=item.children
          newchil.push("i am pushed")
          return (
            {...item,children:newchil}
          )
        }else null;
     })

     console.log(newstate);
     

     return(
       [...newstate]
     )
   })}
  
  const logs=()=>{
    // console.log(state);
    
  }
  
  return (
    <>
     <div  className='border-2 border-black h-20 w-full'>
     {editor}

     </div>
     

      <button className='btn' onClick={logs} >bold</button>
    </>
  )
}

export default test