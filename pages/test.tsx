import React, { Children, HtmlHTMLAttributes } from 'react'





// const Hi=(attrs:HtmlHTMLAttributes<HTMLHeadingElement>)=><h1 {...attrs}></h1>
function styled(attrs:any){return (()=>React.createElement("h1",{...attrs},null))}
const Hello=styled({})

const Hi=(x:any)=><h1 {...x} className=' bg-blue-700'/>


const test = () => {
  return (
    <div>
     <Hi >hello</Hi>
     <Hello>hgjgh</Hello>
    </div>
  )
}

export default test