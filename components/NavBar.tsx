import Avatarpic from "../public/assets/girlpic.jpg"
import { AiOutlineRight } from "react-icons/ai"
import Image, { StaticImageData } from "next/image"
import { togelState } from "../redux/floatbarState"
import { useDispatch } from "react-redux"
import React from 'react'
import { twa, twd, twi, twp } from "./Types"


export default function NavBar() {
  const dispatch = useDispatch()
  return (
    <NavContainer >
      <Flex>
        <LogoContainer>
        <Logo />
        </LogoContainer>
        <MenuContainer>
          <MenuItems>title</MenuItems>
          <MenuItems togelState={() => dispatch(togelState())}>news{<AiOutlineRight className="inline pb-1" />}</MenuItems>
          <MenuItems>gadgets</MenuItems>
          <MenuItems>videos</MenuItems>
          <MenuItems>reviews</MenuItems>
          <MenuItems>contact us</MenuItems>
        </MenuContainer>
        <AvatarContainer>
          <Avatar src={Avatarpic} />
        </AvatarContainer>
      </Flex>
    </NavContainer>
  )
}



//Styles


const NavContainer: twd = (prop) => <div
  {...prop}
  className="sticky top-0 left-0 w-full bg-primary shadow-md shadow-black/50 z-[3]" />

const Flex: twd = (prop) => <div
  {...prop}
  className={`flex items-center justify-between h-16 mx-auto max-w-7xl`} />

 const LogoContainer:twd=(prop)=><div
 {...prop}
 className={``}/>
  
const Logo:twp=(prop)=><p
{...prop}
className={`px-3 text-2xl font-semibold text-white transition-all hover:brightness-75`}/>

const MenuContainer: twd = (prop) => <div
  {...prop}
  className={`flex-grow hidden px-5 md:block`} />

interface ImenuItems {
  togelState?: () => void,
}

const MenuItems: twa<ImenuItems> = (prop) => <a
  {...prop}
  onMouseEnter={prop.togelState}
  className={`px-2 text-sm font-medium text-white uppercase transition-all cursor-pointer hover:text-gray-300`} />

const AvatarContainer: twd = (prop) => <div
  {...prop}
  className={`hidden p-4 overflow-visible md:block`} />



const Avatar: twi = (prop) => <Image
  {...prop}
  height={40}
  width={40}
  alt="User Avatar"
  className={`object-cover transition-transform rounded-full over hover:scale-125 `} />




