import { HeartIcon } from "@heroicons/react/16/solid"

function NavbarComponent() {
  return (
    <div className=" mx-24 my-4 rounded-lg flex justify-between p-4 bg-blueblack">
      <div className="logo--image">
        <h3 className= 'text-[20px]'>
        Logo😍
        </h3>
        </div>
      <div className="input--navbar flex gap-x-16 justify-center items-center">     
         <input type="search" className=' h-[30px] placeholder:text-black placeholder:text-[12px] bg-gray-200 w-[190px] rounded-lg p-4 ' placeholder="search here..." />
         <h1 className='text-md'>Found and result</h1>
        </div>
        <div className="icon--heart">
            <HeartIcon className='w-[28px] h-[28px] text-rose-600'/>
        </div>
        
    </div>
  )
}

export default NavbarComponent