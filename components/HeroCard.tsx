import Image, { StaticImageData } from "next/image"
import { twa, twd, twi, twp } from "./Types"

interface CardProp {
  classes?:string,
  pic:StaticImageData,
  category:string,
  title:string,
  date:string,
  auther:string,
  children?:string|JSX.Element
}

export default function HeroCard(prop:CardProp) {
  return (
    <Container classes={prop.classes}>
      <CardImage src={prop.pic}/>
      <ImageOverlay/>
      <Typograpgy>
        {prop.children}
        <CategoryBadge>{prop.category}</CategoryBadge>
        <Title>{prop.title}</Title>
        <AuthorDate>
          {prop.date} / {prop.auther}
        </AuthorDate>
      </Typograpgy>
    </Container>
  )
}


const Container:twd<{classes:string|undefined}>=(prop)=><div
{...prop}
className={`relative overflow-hidden rounded-md  group ${prop.classes}`}/>

const CardImage:twi=(prop)=><Image
{...prop}
layout="fill"
className={`object-cover object-center transition-transform duration-300 center group-hover:scale-110 brightness-75 `}/>

const ImageOverlay:twd=(prop)=><div
{...prop}
className={`absolute w-full h-full transition-all duration-300 opacity-0 sm:block group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent`}/>

const Typograpgy:twd=(prop)=><div
{...prop}
className={`absolute px-4 text-white bottom-5`}/>

const CategoryBadge:twd=(prop)=><div
{...prop}
className={`badge badge-secondary`}/>

const Title:twa=(prop)=><a
{...prop}
className={`block py-2 text-2xl font-bold cursor-pointer hover:underline`}/>

const AuthorDate:twp=(prop)=><p
{...prop}
className={`text-xs cu`}/>
