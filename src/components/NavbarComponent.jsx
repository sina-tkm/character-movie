import { HeartIcon } from "@heroicons/react/16/solid"



function NavbarComponent({children,numOfFave,onOpen}) {

  return (
    <nav className="mx-6 sm:mx-16 my-4 rounded-lg items-center flex justify-around sm:justify-between p-[10px] sm:p-4 bg-blueblack relative">
      <div className="logo--image order-2 sm:order-none">
        <h3 className= ' hidden sm:flex text-[16px] text-rose-400 sm:text-[20px]'>Logo😍</h3>
        </div>
        {children}
        <div className='order-2 sm:order-none relative w-[36px]'>
        <HeartIcon className='w-[30px] h-[30px] text-rose-600 icon--heart' onClick={()=>onOpen((is)=>!is)}/>
        <span className= 'w-4 h-4 bg-red-500 rounded-full text-sm flex justify-center items-center absolute right-[0] top-0 '>{numOfFave}</span> 
      </div>
    </nav>
  )
}

export default NavbarComponent
 



export function SearchBar({numcharacter,query,setQuery}){
 
  return(
    <div className=" input--navbar flex flex-col gap-y-3 sm:flex-row  sm:gap-x-16 justify-center items-center">     
         <input type="search"
          value={query} 
          onChange={(e)=>setQuery(e.target.value)} 
          className=' h-[35px] flex items-center   order-1 sm:order-none rounded-md sm:h-[35px]  pl-[6px] md:h-[30px] placeholder:text-black w-[130px] sm:w-[140px] md:w-[190px]  transition-all duration-200  placeholder:text-[12px] bg-gray-200 sm:pl-3  ' placeholder="search characters here..." />
         <h1 className='text-[8px] text-white sm:text-[14px] md:text-lg transition-all duration-200'>Found {numcharacter} characters</h1>
    </div>
  )

}
