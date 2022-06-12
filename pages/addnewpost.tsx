import React, { ReactNode, useState } from 'react'
import { twd, twh, twp } from '../components/Types'
import SelectOptions from '../components/SelectOptions'
import UploadImage from '../components/UploadImage'

function addnewpost() {
  const [content, setContent] = useState<ReactNode[]>([])
  const [selected, addSelected] = useState("")
  const [title, setTitle] = useState("Add Title")
  const [tagline, setTagline] = useState("Add Tagline")

  console.log(selected);
  

  return (
    <Container>
         <Title contentEditable  onChange={(e)=>setTitle(e.currentTarget.innerText)}children={title}/>
         <TagLine contentEditable  onChange={(e)=>setTagline(e.currentTarget.innerText)} children={tagline}/>
         <UploadImage/>

         {content}
        
        <AddNewElement>
          <SelectOptions 
           label='Select an elment'
           value={selected} 
           onChange={e=>addSelected(e.target.value)}
           options={["Heading", "Paragraph", "Link"]}/>

          <button className='btn btn-xs btn-primary'>Add</button>
        </AddNewElement>

      
    </Container>
  )
}

export default addnewpost


const Container: twd = (prop) => <div
  {...prop}
  className={`flex flex-col gap-y-3 p-8`} />

  const Title:twh=(prop)=><h1
  {...prop}
  onKeyDown={(e)=>{e.key==="Enter"?e.preventDefault():null}} 
  className={`text-3xl font-bold`}/>

  const TagLine:twh=(prop)=><h1
  {...prop}
  onKeyDown={(e)=>{e.key==="Enter"?e.preventDefault():null}} 
  className={`css`}/>



const AddNewElement: twd = (prop) => <div
  {...prop}
  className={`flex items-center gap-2 py-6`} />
