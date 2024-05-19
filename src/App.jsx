import NavbarComponent, { SearchBar} from './components/NavbarComponent';
import ListofCharacters from './components/ListofCharacters';
import ShowCharacter from './components/ShowCharacter';
import ListofEpisode from './components/ListofEpisode';
import FavoriteList from './components/FavoriteList';
import './App.css';
import {  useState } from 'react';
import { Toaster } from 'react-hot-toast';
import useCharacters from './hooks/useCharacters';
import uselocaleStorage from './hooks/localeStorage';





function App() {
  
  const [query,setQuery] = useState("")
  const {characters,isLoading}=useCharacters('https://rickandmortyapi.com/api/character?name',query)
  const [selectId,setSelectId]=useState("")
  const [episode,setEpisode] = useState([])
  const [favorite,setFavorite] = uselocaleStorage("Favorite",[])
  const [favebox,setFaveBox] = useState(false)


//delete-favebox
const handleDelete = (delitem)=>{setFavorite(prevNote => prevNote.filter(n=> n.id!== delitem))}

 //insertItem-favorite
const handleFavorite = (item)=>{setFavorite(prevFav =>[...prevFav,item]);}

//deActive-faveButton-after-clicking
const addedFave = favorite.map(item=>item.id).includes(selectId)

//updating-showcharacter
const onselect = (id)=>{setSelectId(prevId => prevId === id ? null : id)}

  
  


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
      query={query}
      addedFave={addedFave} 
      characters= {characters} 
      selectId={selectId}  
      setEpisode={setEpisode} 
      handleFavorite={handleFavorite}/>
     <ListofEpisode 
     query={query}
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

 
