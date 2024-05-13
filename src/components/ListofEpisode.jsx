import { ArrowUpCircleIcon } from "@heroicons/react/16/solid"
import { useState } from "react"






function ListofEpisode({episode,selectId}) {
  const [sortby,setSortBy] = useState(true)
 
  
  let sortedList;
  if(sortby){
   
    sortedList = [...episode].sort((a,b)=>new Date(a.created)  - new Date(b.created)
      
      
    )
  }else{
    sortedList = [...episode].sort((a,b)=>new Date(b.created)  - new Date(a.created)
      
    )
  }

if(!selectId){
  return(
    <div></div>
  )
}
  return (
    <div className=" h-fit relative bg-blueblack p-4 w-full   rounded-lg  flex flex-col gap-y-4 ">
       <h1 className='text-gray-400 text-[20px] whitespace-nowrap'>list ofepisodes:</h1>
      <button onClick={()=>setSortBy((is)=>!is)}>
        <ArrowUpCircleIcon className="w-[24px] h-[24px] text-gray-400 absolute right-[20px] top-8 transition-all ease-in " style={{rotate:sortby ? "0deg" : "180deg"}}  />
      </button>
      <ul className="w-full flex flex-col gap-y-4 ">
        {sortedList.map((item,index)=>{
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
