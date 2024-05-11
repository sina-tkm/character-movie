import { ArrowUpCircleIcon } from "@heroicons/react/16/solid"
import { episodes } from "../../data/data"

function ListofEpisode({episode,selectId}) {
if(!selectId){
  return(
    <div></div>
  )
}
  return (
    <div className=" h-fit relative bg-blueblack p-4 w-full   rounded-lg  flex flex-col gap-y-4 ">
       <h1 className='text-gray-400 text-[20px] whitespace-nowrap'>list ofepisodes:</h1>
      <div><ArrowUpCircleIcon className="w-[24px] h-[24px] text-gray-400 absolute right-[20px] top-8 "/></div>
      <ul className="w-full flex flex-col gap-y-4 ">
        {episode.map((item,index)=>{
          return(
              <li key={item.id} className="w-full flex flex-row justify-between ">
          <div className="text-sm text-white">{String(index+1).padStart(2,"0")}-{item.episode}: <strong>{item.name}</strong></div>
          <span className="date--episode">{item.air_date}</span>
        </li>
          )
        })}
       
      </ul>
      

    </div>
  )
}

export default ListofEpisode
