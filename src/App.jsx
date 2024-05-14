import NavbarComponent, { SearchBar} from './components/NavbarComponent';
import ListofCharacters from './components/ListofCharacters';
import ShowCharacter from './components/ShowCharacter';
import ListofEpisode from './components/ListofEpisode';
import FavoriteList from './components/FavoriteList';
import './App.css';
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';




function App() {
  const [characters,setcharacters] =useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const [query,setQuery] = useState("")
  const [selectId,setSelectId]=useState("")
  const [episode,setEpisode] = useState([])
  const [favorite,setFavorite] = useState(()=>JSON.parse(localStorage.getItem("FAVORITE")) || [])
  const [favebox,setFaveBox] = useState(false)


//delete-favebox
const handleDelete = (delitem)=>{setFavorite(prevNote => prevNote.filter(n=> n.id!== delitem))}

//save-localStorage
useEffect(()=>{ localStorage.setItem("FAVORITE",JSON.stringify(favorite))},[favorite])

 //insertItem-favorite
const handleFavorite = (item)=>{setFavorite(prevFav =>[...prevFav,item]);}

//deActive-faveButton-after-clicking
const addedFave = favorite.map(item=>item.id).includes(selectId)

//updating-showcharacter
const onselect = (id)=>{setSelectId(prevId => prevId === id ? null : id)}

    useEffect(()=>{ 
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData(){
    try {
    setIsLoading(true)
      const {data} = await axios.get(
      `https://rickandmortyapi.com/api/character?name=${query}`
      ,{signal}
      );
    setcharacters(data.results.slice(0,5)) 
    } catch (err) {
    if(axios.isCancel()){
    setcharacters([])
    toast.error(err.response.data.error)
         
        }
    }finally{
    setIsLoading(false)
    }
   }
    if(query.length < 3){ 
      setcharacters([])
      return;
      }
    fetchData()
    return ()=>{
    controller.abort()
    }

  
  },[query])
  


  return (
<section className="character--movie-nav">
     <Toaster/>
     <NavbarComponent 
     numOfFave= {favorite.length}
     onOpen={setFaveBox}
     >
    <SearchBar
     numcharacter={characters.length} 
     query={query} 
     setQuery={setQuery}
     />
     </NavbarComponent>
     <div className="main--component flex justify-center mx-24 gap-x-4">
     <ListofCharacters
     characters={characters}
     isLoading={isLoading} 
     onSelect ={onselect}
     selectId={selectId}
     />
     <main className="character--detail w-[70%] flex flex-col lg:flex-col  xl:w-[100%] gap-x-4 gap-y-4 ">
     <ShowCharacter
      addedFave={addedFave} 
      characters= {characters} 
      selectId={selectId}  
      setEpisode={setEpisode} 
      handleFavorite={handleFavorite}/>
     <ListofEpisode 
      className='flex xl:flex-row' 
      episode={episode} 
      selectId={selectId}/> 
     </main>
     <FavoriteList
     onDelete={handleDelete}
     onOpen= {setFaveBox} 
     favorite={favorite} 
     favebox={favebox}
    />
    </div>
</section>
  )
}

export default App

 
