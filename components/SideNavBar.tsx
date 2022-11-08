import { AiOutlineRight } from "react-icons/ai"
import Avatarpic from "../public/assets/girlpic.jpg"
import Image from "next/image"
import Hamburger from "./Hamburger"
import { useState } from "react"
import { twa, twd, twi } from "./Types"

export default function SideNavBar() {
  const [state, setState] = useState(false)
  const togelState = () => { setState((state) => !state) }
  return (
    <>
      <Hamburger state={state} togelState={togelState} />
      <OnClickListner state={state} onClick={togelState}>
        <Container>
          <MenuItems>title</MenuItems>
          <MenuItems>news<AiOutlineRight className="inline pb-1" /></MenuItems>
          <MenuItems>gagets</MenuItems>
          <MenuItems>videos</MenuItems>
          <MenuItems>reviews</MenuItems>
          <MenuItems>contact us</MenuItems>
          <div className="mt-5">
            <Avatar src={Avatarpic} 
              height={80}
              width={80}
              alt="User Avatar" />
          </div>
        </Container>
      </OnClickListner>
    </>
  )
}


//styles 


const OnClickListner: twd<{ state: boolean }> = (prop) => <div
  {...prop}
  className={`w-[100vw] h-[100vh] bg-gray-600/50 fixed ${prop.state ? "block" : "hidden"} md:hidden z-[3]`} />


const Container: twd = (prop) => <div
  {...prop}
  className={`bg-primary h-full w-[70%] fixed right-0 flex flex-col items-center justify-start pt-20 shadow-2xl shadow-black`} />


const MenuItems: twa = (prop) => <a
  {...prop}
  className={`p-4 text-2xl font-medium text-white uppercase transition-all cursor-pointer hover:text-gray-300`} />

const Avatar: twi = (prop) => <Image
  {...prop}
  className={`object-cover porp transition-transform rounded-full over hover:scale-125`} />

