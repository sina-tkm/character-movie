import { EyeIcon } from "@heroicons/react/16/solid"
import LoadingFetch from "./loadingfetch";
import { EyeSlashIcon } from "@heroicons/react/16/solid";


function ListofCharacters({characters,isLoading,onSelect,selectId}) {


  return ( 
     <div className="w-[100%] whitespace-nowrap sm:w-[40%] gap-[8px] grid grid-cols-3 sm:flex  sm:flex-col sm:gap-y-4 webkit--class"> 
      {isLoading ? (
        <LoadingFetch/>
      ) :
      characters.map((item)=>{ 
        return(
         <Character key={item.id} item={item} onSelect={onSelect} selectId={selectId}/>
        )
      })}
    </div>
)
}

export default ListofCharacters;

function Character({item,onSelect,selectId}){
  return(
    <div>
      <div className=" sm:w-fit  h-fit   rounded-lg bg-blueblack  gap-y-4 flex-col sm:flex-row sm:h-[100px] py-[6px] px-[6px]  sm:py-[12px] sm:px-[18px] flex  sm:gap-x-4 justify-between relative transition-all duration-200 ease-out list--character ">
     <img className='w-full h-auto object-cover rounded-lg ' src={item.image} alt={item.name} />
      <div className="h-full w-[95%] mb-[12px] flex flex-col justify-between  py-2 lg:mr-4 xl:mr-56 gap-y-3 group"  >
      <div className="flex whitespace-nowrap   items-center ">
        <span className='group-hover:text-black w-[20px]'>{item.gender ==="Male" ? "👱🏻‍♂️" : "👱‍♀️"}</span>
        <h1 className="text-[15px] sm:text-[18px] text-white group-hover:text-black w-[180px] overflow-hidden">{item.name}</h1>
      </div>
      <div className="text-[10px] middsm:text-[14px] sm:text-[15px] z-auto  text-white group-hover:text-black flex items-center text-center overflow-hidden ">
        <span>{item.status === "Dead" ? "💔" : "🧡"}-</span>
        <span>{item.status}:</span>
        <span>{item.species}</span>
      </div>
   </div>
    <div className="icon--div h-full flex items-center"> 
    <button className="eye-Icon" onClick={()=>onSelect(item.id)}>
    {selectId === item.id ? <EyeSlashIcon /> : <EyeIcon/>}
    </button>
    </div>
    
    </div>
    
  </div>
  )
}

 

  

