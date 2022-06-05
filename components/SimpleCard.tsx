import Image from "next/image"

export default function SimpleCard({title, img}) {
  return (
    <div className="group ">
      {/* image container */}
      <div className="relative w-full overflow-hidden aspect-video ">
        <Image
          layout="fill"
          className="object-cover object-center transition-transform duration-300 center group-hover:scale-110"
          src={img}
        />
        {/* dark overlay */}
        <div className="absolute w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>
      {/* typography */}
      <div>
      <div className="p-2 bg-light">
          <a className="text-xl font-semibold cursor-pointer hover:underline">
            {title}
          </a>
      </div>
      </div>
    </div>
  )
}
