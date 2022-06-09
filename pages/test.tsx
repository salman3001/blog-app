import React, { Children, HTMLAttributes, HtmlHTMLAttributes, ReactNode } from 'react'

type style=<T>({}:HtmlHTMLAttributes<HTMLDivElement>|any)=>JSX.Element

const Helli:style = (prop)=><div {...prop}
 className={`${prop.blue? "bg-blue-700":"bg-pink-500"} w-14 h-16 `} />
  

const style ={
  div:(x:{className:string}, attrs:HTMLAttributes<HTMLDivElement>)=>(prop)=><div {...prop} {...attrs} {...x} />

}

const Hi = style.div({className:`bg-black ${attrs.blue &&""}`},{})


const test = () => {
  return (
    <div>
     <Helli>
       helo
       <div>hihhfdsh </div>
     </Helli>

     <Hi>hi</Hi>
    </div>
  )
}

export default test