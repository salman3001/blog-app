import Avatarpic from "../public/assets/girlpic.jpg"
import {AiOutlineRight} from "react-icons/ai"
import Image, { StaticImageData } from "next/image"
import { togelState } from "../redux/floatbarState"
import { useDispatch } from "react-redux"

export default function NavBar() {
  const dispatch=useDispatch()
  return (
    <div className="sticky top-0 left-0 w-full bg-primary shadow-md shadow-black/50 z-[3]">
      <div className="flex items-center justify-between h-16 mx-auto max-w-7xl ">
        <Logo />
        <div className="flex-grow hidden px-5 md:block">
          <MenuItems title="home" />
          <MenuItems togelState={()=>dispatch(togelState())} title="news" iconEnd={<AiOutlineRight className="inline pb-1"/>} />
          <MenuItems title="gadgets" />
          <MenuItems title="videos" />
          <MenuItems title="reviews" />
          <MenuItems title="contact us" />
        </div>
        <div className="hidden p-4 overflow-visible md:block">
          <Avatar pic={Avatarpic} />
        </div>  
      </div>
    </div>
  )
}

const Logo = () => (
  <div className="">
    <p className="px-3 text-2xl font-semibold text-white transition-all hover:brightness-75">
      tech<span className="font-bold">Blog</span>
    </p>
  </div>
)

const MenuItems = ({togelState, title, iconEnd, iconStart }:{togelState?:()=>void, title:string, iconEnd?:JSX.Element, iconStart?:JSX.Element }) => (
    <a onMouseEnter={togelState} className="px-2 text-sm font-medium text-white uppercase transition-all cursor-pointer hover:text-gray-300 ">
      {iconStart}
      {title}
      {iconEnd}
    </a>
  )

const Avatar = ({ pic }:{pic:StaticImageData}) => (
  <Image
    height={40}
    width={40}
    className="object-cover transition-transform rounded-full over hover:scale-125 "
    src={pic}
    alt="User Avatar"
  />
)
 