import Image from "next/image"
import { twa, twd, twi } from "./Types"

interface ISimpleCard{
  title:string
  img:string
}

export default function SimpleCard(prop:ISimpleCard) {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={prop.img}/>
        <ImageDarkOverlay/>
      </ImageContainer>
      <TitleContainer>
          <Title>{prop.title}</Title>
      </TitleContainer>
    </CardContainer>
  )
}

//styles

const CardContainer:twd=(prop)=><div
{...prop}
className={`group`}/>

const ImageContainer:twd=(prop)=><div
{...prop}
className={`relative w-full overflow-hidden aspect-video`}/>

const CardImage:twi=(prop)=><Image
{...prop}
layout="fill"
className={`relative w-full overflow-hidden aspect-video`}/>

const ImageDarkOverlay:twd=(prop)=><div
{...prop}
className={`absolute w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent`}/>

const TitleContainer:twd=(prop)=><div
{...prop}
className={`p-2 bg-light`}/>

const Title:twa=(prop)=><a
{...prop}
className={`text-xl font-semibold cursor-pointer hover:underline`}/>
