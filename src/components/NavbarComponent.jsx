import { HeartIcon } from "@heroicons/react/16/solid"


function NavbarComponent({children}) {
  return (
    <nav className=" mx-24 my-4 rounded-lg flex justify-between p-4 bg-blueblack relative">
      <div className="logo--image">
        <h3 className= 'text-[20px]'>Logo😍</h3>
        </div>
        {children}
        <div className="icon--heart">
            <HeartIcon className='w-[30px] h-[30px] text-rose-600'/>
            <span className= 'w-4 h-4 bg-red-500 rounded-full text-sm flex justify-center items-center absolute right-3 top-3'>0</span>
           
        </div>
        
    </nav>
  )
}

export default NavbarComponent
 



export function SearchBar({numcharacter}){
 
  return(
    <div className="input--navbar flex gap-x-16 justify-center items-center">     
         <input type="search" className=' h-[30px] placeholder:text-black placeholder:text-[12px] bg-gray-200 w-[190px] rounded-lg p-4 ' placeholder="search here..." />
         <h1 className='text-md'>Found {numcharacter} characters</h1>
    </div>
  )

}
