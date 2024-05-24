import { ArrowUpCircleIcon } from "@heroicons/react/16/solid"
import { useState } from "react"






function ListofEpisode({episode,selectId,query}) {
  const [sortby,setSortBy] = useState(true)
 
  
  let sortedList;
  if(sortby){
    sortedList = [...episode].sort((a,b)=>new Date(a.created)  - new Date(b.created)
    )
  }else{
    sortedList = [...episode].sort((a,b)=>new Date(b.created)  - new Date(a.created)  
    )
  }
if(query.length<1){
  return null
}
if(!selectId) return null
  
  


  return (
    <div className=" h-fit relative bg-blueblack p-[24px] w-full   rounded-lg  flex flex-col gap-y-4 transition-all duration-200 ">
       <h1 className='text-gray-400 text-[20px] whitespace-nowrap'>list ofepisodes:</h1>
      <button onClick={()=>setSortBy((is)=>!is)}>
        <ArrowUpCircleIcon className="w-[24px] h-[24px] text-gray-400 absolute right-[20px] top-8 transition-all ease-in " style={{rotate:sortby ? "0deg" : "180deg"}}  />
      </button>
      <ul className="w-full flex flex-col gap-y-4 ">
        {sortedList.map((item,index)=>{
          return(
              <li key={item.id} className="w-full items-center  flex flex-row justify-between ">
          <div className="text-sm text-white w-[160px]">{String(index+1).padStart(2,"0")}-{item.episode}: <strong className="w-[90px]">{item.name}</strong></div>
          <span className="date--episode">{item.air_date}</span>
        </li>
          )
        })}
       
      </ul>
      

    </div>
  )
}

export default ListofEpisode
