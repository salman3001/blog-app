import { MdRssFeed } from "react-icons/md"
import FeedCard from "./FeedCard"
import blogData from "../data/blog-data"

export default function RecentNews() {
  let card = blogData.map((x) => (
    <FeedCard
      title={x.data.title}
      img={x.data.mainImage}
      discription={x.data.discription}
      date={x.data.date}
      auther={x.data.autherName}
      views={x.data.views}
      category={x.data.category}
    />
  ))

  console.log(<FeedCard />)
  return (
    <div className="col-span-4 divide-y-2 divide-y-reverse md:col-span-3">
      RecentNews <MdRssFeed className="inline text-2xl text-themecolor1" />
      {/* feedcards */}
      <div className="w-full my-5 ">{card}</div>
    </div>
  )
}
