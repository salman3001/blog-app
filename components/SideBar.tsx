import SimpleCard from "./SimpleCard"
import tech1 from "../public/assets/tech_01.jpg"

export default function SideBar() {
  return (
    <div className="flex flex-col col-span-4 gap-4 md:col-span-1">
      <SimpleCard img={tech1} title="Hello checkout new sidebar Card"/>
      <SimpleCard img={tech1} title="Hello checkout new sidebar Card"/>
      <SimpleCard img={tech1} title="Hello checkout new sidebar Card"/>
      <SimpleCard img={tech1} title="Hello checkout new sidebar Card"/>
      <SimpleCard img={tech1} title="Hello checkout new sidebar Card"/>
    </div>
  )
}
