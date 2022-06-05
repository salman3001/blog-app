import Image, { StaticImageData } from "next/image"

interface CardProp {
  className?:string,
  pic:StaticImageData,
  category:string,
  title:string,
  date:string,
  auther:string,
  children?:string|JSX.Element
}

export default function HeroCard({
  className,
  pic,
  category,
  title,
  date,
  auther,
  children,
}:CardProp) {
  return (
    <div
      className={` relative overflow-hidden rounded-md  group ${className} `}
    >
      <Image
        layout="fill"
        className="object-cover object-center transition-transform duration-300 center group-hover:scale-110 brightness-75 "
        src={pic}
      />
      {/*darkoverlay */}
      <div className="absolute w-full h-full transition-all duration-300 opacity-0 sm:block group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute px-4 text-white bottom-5">
        {children}
        <div className="badge badge-secondary">{category}</div>
        <a className="block py-2 text-2xl font-bold cursor-pointer hover:underline">
          {title}
        </a>
        <p className="text-xs cu">
          {date} / {auther}
        </p>
      </div>
    </div>
  )
}
