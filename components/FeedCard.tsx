import Image, { StaticImageData } from "next/image"
import { GrFormView } from "react-icons/gr"
import { twa, twd, twi, twp } from "./Types"
interface IFeedCard {
  title: string,
  discription: string,
  category: string,
  date: string,
  auther: string,
  views: string,
  img: StaticImageData,
}

export default function FeedCard(prop: IFeedCard) {
  return (
    <Container>
      <ImageContainer>
        <CardImage src={prop.img} />
        <ImageOverlay />
      </ImageContainer>

      <Typography>
        <TitleContainer>
          <Title>{prop.title}</Title>
        </TitleContainer>
         <Discrition>{prop.discription}</Discrition>
        <DetailsContainer>
          <CategoyBadge>{prop.category}</CategoyBadge>
          <Date>{prop.date}</Date>
          <Auther>/ By {prop.auther} / </Auther>
          <Views>
            <GrFormView className="inline-block" />
            {prop.views}
          </Views>
        </DetailsContainer>
      </Typography>
    </Container>
  )
}

//Styled Components

const Container: twd = (prop) => <div
  {...prop}
  className={`flex flex-col w-full h-auto my-5 rounded-md sm:flex-row group`} />

const ImageContainer: twd = (prop) => <div
  {...prop}
  className={`relative w-full overflow-hidden h-52 sm:w-52`} />

const CardImage: twi = (prop) => <Image
  {...prop}
  layout="fill"
  className={`object-cover object-center transition-transform duration-300 center group-hover:scale-110`} />

const ImageOverlay: twd = (prop) => <div
  {...prop}
  className={`absolute w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />

const Typography: twd = (prop) => <div
  {...prop}
  className={`relative flex-1 p-4`} />

const TitleContainer: twd = (prop) => <div
  {...prop}
  className={`p-2 sm:relative sm:right-20 bg-light sm:w-[calc(100%+80px)] bg-base-100`} />

const Title: twa = (prop) => <a
  {...prop}
  className={`text-2xl font-bold cursor-pointer hover:underline`} />

const Discrition: twp = (prop) => <p
  {...prop}
  className={`py-2`} />

const DetailsContainer: twd = (prop) => <div
  {...prop}
  className={`mt-1`} />

const CategoyBadge:twd=(prop)=><div
{...prop}
className={`badge badge-secondary`}/>

const Date:twd=(prop)=><div
{...prop}
className={`inline-block`}/>

const Auther:twd=(prop)=><div
{...prop}
className={`inline-block`}/>

const Views:twd=(prop)=><div
{...prop}
className={`inline-block`}/>