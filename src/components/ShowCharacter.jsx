import {character} from "../../data/data"

function ShowCharacter() {
  return (
    <div className="flex gap-x-2 bg-blueblack rounded-lg w-full  lg:w-[55%] h-[220px]">
        <div className="show--image">
            <img src={character.image} alt={character.name} className=" rounded-lg w-[200px] h-[100%] object-cover"/>
        </div>
        <div className="name--character flex flex-col justify-between py-2">
            <div className="py-2 pl-2"> 
            <h1 className="text-[18px] whitespace-nowrap pl-1 text-white font-semibold">
                <span>{character.gender ==="Male" ?"👱🏻‍♂️" : "👱‍♀️"}</span>
                <span>{character.name}</span>
            </h1>
            <h5 className="explanation--character pr-12 text-sm text-white whitespace-nowrap">
                <span>{character.status==="Dead" ? "💔":"🧡"}-</span>
                <span>{character.status}:</span>
                <span>{character.species}</span>
            </h5>
            </div>
            <div className="pl-3">
                <p className= 'text-sm text-lessblack'>last know loction:</p>
                <h3 className="text-md text-white ">{character.location.name}</h3>

            </div>
            <div>
                <p href="#" className=" ml-3 mb-2 w-[80px] md:w-[110px] bg-lessblack text-white rounded-md text-[10px] h-[28px] flex justify-center items-center hover:bg-concrete transition-all duration-300 hover:text-black">Add To Favorite</p>
            </div>
        </div>
    </div>
  )
}

export default ShowCharacter