import { EyeIcon } from "@heroicons/react/16/solid"


function ListofCharacters({characters}) {
  return ( 
     <div className="w-[40%] flex flex-col gap-y-4"> 
      {characters.map((item)=>{
        return(
          <Character key={item.id} item={item}/>
        )
      })}
    </div>
)
}

export default ListofCharacters;

function Character({item}){
  return(
    <div>
      <div className="group hover:bg-concrete w-full rounded-lg bg-blueblack flex-col gap-y-4 lg:flex-row lg:h-[100px]  py-[12px] px-[18px] flex gap-x-4 justify-between relative transition-all duration-200 ease-out ">
     <img className='w-full h-auto object-cover rounded-lg ' src={item.image} alt={item.name} />
      <div className="h-full flex flex-col justify-between  py-2 lg:mr-4 xl:mr-56 gap-y-3 group"  >
      <h3 className="flex whitespace-nowrap">
        <span className='group-hover:text-black'>{item.gender ==="Male" ? "👱🏻‍♂️" : "👱‍♀️"}</span>
        <span className="text-lg text-white group-hover:text-black">{item.name}</span>
      </h3>
      <h6 className="text-[14px]  whitespace-nowrap text-white group-hover:text-black flex text-center ">
        <span>{item.status === "Dead" ? "💔" : "🧡"}-</span>
        <span>{item.status}:</span>
        <span>{item.species}</span>
      </h6>
   </div>
    <div className="icon--div h-full flex items-center"> 
      <EyeIcon className="w-[24px] h-[24px] text-rose-700 absolute right-3 bottom-12 md:bottom-10 "/>
    </div>
   </div>
  </div>
  )
}

 

  

