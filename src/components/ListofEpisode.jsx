import { ArrowUpCircleIcon } from "@heroicons/react/16/solid"
import { episodes } from "../../data/data"

function ListofEpisode() {
  return (
    <div className=" h-[220px] relative bg-blueblack p-4 w-full lg:w-[45%]  rounded-lg  flex flex-col gap-y-4 ">
       <h1 className='text-gray-400 text-[20px] whitespace-nowrap'>list ofepisodes:</h1>
      <div><ArrowUpCircleIcon className="w-[24px] h-[24px] text-gray-400 absolute right-[20px] top-8 "/></div>
      <ul className="w-full flex flex-col gap-y-4 ">
        {episodes.map((item,index)=>{
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
  // <div className="flex flex-col justify-around">
  //          
  //           <h2 className='text-white'>00-se01001</h2>
  //         
  //       </div>
  //       <div className="flex flex-col justify-around mt-8 ">
  //       <div></div>
  //       
  //       <span className="date--episode">october 03 2020</span>
  //       </div> 
