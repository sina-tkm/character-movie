function ShowCharacter({selectId,handleFavorite,addedFave,query,namecha,loading}){

    if(loading){
    return<div className="flex gap-x-3">
            <div className="text-white">loading</div>
            <div className="spinner"></div> 
        </div>
        }


    if(query.length <1){
        return null
    }

   

    if(!namecha || !selectId ){ 
        return <div className='text-white transition-all duration-100 sm:ml-[40px]'>select a character</div>
     }
    
    
        return(
    <div className=" transition-all duration-200 flex gap-x-2 bg-blueblack rounded-lg w-full  lg:w-[100%] h-[220px]">
    <div className="show--image">
        <img src={namecha.image} alt={namecha.name} className=" rounded-lg w-[200px] h-full object-cover"/>
    </div>
    <div className="name--character flex flex-col justify-between py-2 w-[60%]">
        <div className="py-2 pl-2"> 
        <h1 className="text-[18px]  sm:text-[24px] whitespace-nowrap pl-1 text-white font-semibold w-[80%] sm:w-[70%] overflow-hidden justify-center items-center">
            <marquee direction = "right">{namecha.gender ==="Male" ?"👱🏻‍♂️" : "👱‍♀️"}{namecha.name}</marquee>
        </h1>
        <h5 className="explanation--character pr-12 text-md text-white whitespace-nowrap">
            <span>{namecha.status==="Dead" ? "💔":"🧡"}-</span>
            <span>{namecha.status}:</span>
            <span>{namecha.species}</span>
        </h5>
        </div>
        <div className="pl-3">
            <p className= 'text-sm text-lessblack'>last know loction:</p>
            <h3 className="text-md text-white ">{namecha.location.name}</h3>
        </div>
        <div>
            {addedFave ? <p> this character added✅</p> : <button href="#" onClick={()=>handleFavorite(namecha)} className=" ml-3 mb-2 w-[80px] md:w-[110px] bg-lessblack text-white rounded-md text-[10px] h-[28px] flex justify-center items-center hover:bg-concrete transition-all duration-300 hover:text-black">Add To Favorite</button>} 
        </div>
        
    </div>
</div>
   )
}

export default ShowCharacter




