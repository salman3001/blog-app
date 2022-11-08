import { HTMLAttributes } from "react";

const styled={
  div:(string:TemplateStringsArray,...tags:string[])=>{
    let classNamesArray:string[]=[]
    string.forEach((vlaue,i)=> {
      classNamesArray.push(vlaue+(tags[i] || ""))
    });
    
    let className = classNamesArray.join()

    return (prop:HTMLAttributes<HTMLDivElement>)=><div {...prop} className={className}></div>
  }
}

const X = styled.div` bg-red-500 h-16 border-8 ${} border-black rounded-lg `

const Test=()=>{

return (
<div><X>kshdjsk</X></div>
)}

export default Test