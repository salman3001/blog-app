import Image from "next/image"
import { GrFormView } from "react-icons/gr"
interface Prop{
  title:string,
  discription:string,
  category:string,
  date:string,
  auther:string,
  views:string,
  img:string,
}

export default function FeedCard({
  title,
  discription,
  category,
  date,
  auther,
  views,
  img,
}:Prop) {
  return (
    <div className="flex flex-col w-full h-auto my-5 rounded-md sm:flex-row group">
      {/* image container  */}
      <div className="relative w-full overflow-hidden h-52 sm:w-52">
        <Image
          layout="fill"
          className="object-cover object-center transition-transform duration-300 center group-hover:scale-110"
          src={img}
        />
        {/* dark overlay */}
        <div className="absolute w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* typography */}
      <div className="relative flex-1 p-4 ">
        {/* title */}
        <div className="p-2 sm:relative sm:right-20 bg-light sm:w-[calc(100%+80px)] bg-base-100 ">
          <a className="text-2xl font-bold cursor-pointer hover:underline">
            {title}
          </a>
        </div>
        {/* discription */}
        <p className="py-2">{discription}</p>
        {/* post detail */}
        <div className="mt-1">
          <div className="badge badge-secondary">{category}</div> <div className="inline-block">{date}</div>
          <div className="inline-block ">/ By {auther} / </div>
          <div className="inline-block">
            <GrFormView className="inline-block" />
            {views}
          </div>
        </div>
      </div>
    </div>
  )
}
