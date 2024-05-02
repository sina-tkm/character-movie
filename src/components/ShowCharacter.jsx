

function ShowCharacter() {
  return (
    <div className="flex gap-x-2 bg-blueblack rounded-lg w-full  lg:w-[55%] ">
        <div className="show--image">
            <img src="../../public/peakpx.jpg" alt="" className=" rounded-lg w-[200px] h-[100%] object-cover"/>
        </div>
        <div className="name--character flex flex-col justify-between py-2">
            <div className="py-2 pl-2"> 
            <h1 className="text-[18px] whitespace-nowrap pl-1 text-white font-semibold">👱🏻‍♂️Rick & morty</h1>
            <h5 className="explanation--character pr-12 text-sm text-white">🛑dead-human</h5>
            </div>
            <div className="pl-3">
                <p className= 'text-sm text-lessblack'>last know loction</p>
                <h3 className="text-md text-white ">citedal of ricks</h3>

            </div>
            <div>
                <p href="#" className="mb-2 w--[110px] bg-lessblack text-white rounded-md text-[10px] h-[28px] flex justify-center items-center">Add To Favorite</p>
            </div>
        </div>
    </div>
  )
}

export default ShowCharacter