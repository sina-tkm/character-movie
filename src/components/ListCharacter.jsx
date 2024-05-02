import { EyeIcon } from "@heroicons/react/16/solid"

function ListCharacter() {
  return (  
  <div className="w-[40%]">
    <div className=" w-full rounded-lg bg-blueblack h-[100px] py-[12px] px-[18px] flex gap-x-4 justify-between relative hover:bg-concrete transition-all duration-200 ease-out ">
    <img className='w-[250px] h-auto object-cover rounded-lg ' src="../../public/peakpx.jpg" alt="" />
    <div className="h-full flex flex-col justify-between  py-2 lg:mr-4 xl:mr-56"  >
    <h3 className="text-lg">wha the fuck</h3>
     <h6 className="md:text-[14px] whitespace-nowrap ">🛑 this is a sentence in here</h6>
   </div>
   <div className="icon--div h-full flex items-center"> 
   <EyeIcon className="w-[24px] h-[24px] text-rose-700 absolute right-3 "/>
   </div>
  </div>  
  </div>
  )
}

export default ListCharacter