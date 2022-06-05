import { AiOutlineRight } from "react-icons/ai"
import Avatarpic from "../public/assets/girlpic.jpg"
import Image from "next/image"
import Hamburger from "./Hamburger"
import { useState } from "react"
export default function SideNavBar() {
    const [state, setState] = useState(false)
    const togelState =()=>{setState((state)=>!state)}
  return (
      <>
      <Hamburger state={state} togelState={togelState} />
    <OnClickListner state={state} togelState={togelState}>
      <div className="bg-primary h-full w-[70%] fixed right-0 flex flex-col items-center justify-start pt-20 shadow-2xl shadow-black">
        <MenuItems title="home" />
        <MenuItems
          title="news"
          iconEnd={<AiOutlineRight className="inline pb-1" />}
        />
        <MenuItems title="gadgets" />
        <MenuItems title="videos" />
        <MenuItems title="reviews" />
        <MenuItems title="contact us" />
        <div className="mt-5">
          <Avatar pic={Avatarpic} />
        </div>
      </div>
    </OnClickListner>
      </>
  )
}

const OnClickListner = ({ children, state, togelState }) => (
  <div onClick={togelState} className={`w-[100vw] h-[100vh] bg-gray-600/50 fixed ${state?"block":"hidden"} md:hidden z-[3]`}>{children}</div>
)

const MenuItems = ({ title, iconEnd, iconStart }) => (
  <a className="p-4 text-2xl font-medium text-white uppercase transition-all cursor-pointer hover:text-gray-300 ">
    {iconStart}
    {title}
    {iconEnd}
  </a>
)

const Avatar = ({ pic }) => (
  <Image
    height={80}
    width={80}
    className="object-cover transition-transform rounded-full over hover:scale-125 "
    src={pic}
    alt="User Avatar"
  />
)
