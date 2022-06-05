import HeroCard from "./HeroCard"
import tech1 from "../public/assets/tech_01.jpg"
import tech2 from "../public/assets/tech_02.jpg"
import tech3 from "../public/assets/tech_03.jpg"

export default function HeroSection() {
  return (
    <div className="relative grid w-full gap-3 px-5 mx-auto my-2 max-w-7xl md:grid-cols-4">
      <HeroCard
        className="h-[400px]  md:col-span-2"
        pic={tech1}
        category="Technology"
        title="Say hello to real handmade office furniture! Clean & beautiful design"
        date={"22-jan-2022"}
        auther={"Amanda"}
      ></HeroCard>
      <HeroCard
        className="h-[400px]  md:col-span-1"
        pic={tech2}
        category="Gadgets"
        title="Say hello to real handmade office furniture! Clean & beautiful design"
        date={"22-jan-2022"}
        auther={"Amanda"}
      ></HeroCard>
      <HeroCard
        className="h-[400px]  md:col-span-1"
        pic={tech3}
        category="Technology"
        title="The most reliable Galaxy Note 8 images leaked"
        date={"22-jan-2022"}
        auther={"Amanda"}
      ></HeroCard>
    </div>
  )
}
