import { XMarkIcon } from "@heroicons/react/16/solid"
import { TrashIcon } from "@heroicons/react/16/solid"

function FavoriteList({favorite,favebox,onOpen,onDelete}) {
if(!favebox) return null
  return (
<div className="absolute w-[100%] top-8 sm:w-[30%] mx-auto h-[400px] bg-lessblack rounded-lg p-[10px] overflow-y-scroll scrollbar border-2">
    <div className="flex item-center justify-between border-b-2"> 
        <h1 className="text-white">List Of Favorite</h1>
        <XMarkIcon onClick={()=>onOpen(false)} className="h-[30px] w-[30px] text-red-400"/>
    </div>
    <div className="flex gap-y-3 flex-col">
        {favorite.map((item)=>{
            return(
             <ListFavorites key={item.id} item={item} onDelete={onDelete}/>
            )
        })}
    </div>
</div>
        
            
 
    
  )
}

export default FavoriteList
 



function ListFavorites({item,onDelete}){
    return(
    <div  className="flex mx-auto pb-2  gap-x-4  justify-between relative w-[90%] pt-[12px] border-b-2 item-center"> 
        <img src={item.image} alt={item.name} className='w-[110px] h-[80px] object-cover rounded-lg'/>  
    <div className="mr-[170px]">
            <span className="text-md font-semibold text-white">{item.name}</span>
            <h5 className="explanation--character pr-12 text-sm text-white whitespace-nowrap mt-4">
             <span>{item.status==="Dead"  ? "💔":"🧡"}-</span>
             <span>{item.status}:</span>
             <span>{item.species}</span>
            </h5>
            
    </div> 
         <TrashIcon onClick={()=>onDelete(item.id)} className="w-[20px] h-[20px] text-red-400 absolute right-[12px] mt-4"/>  
    <div>
         
  </div>
                                
</div>
    )
}