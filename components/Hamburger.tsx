import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"

export default function Hamburger({ state, togelState }:{state:boolean,togelState:()=>void}) {
  return <div className="fixed text-white top-0 right-0 md:hidden text-2xl p-4 mr-2 z-[5]" onClick={togelState}>{state ? <ImCross /> : <GiHamburgerMenu />}</div>
}
