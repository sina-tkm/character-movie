import NavbarComponent, { SearchBar} from './components/NavbarComponent';
import ListofCharacters from './components/ListofCharacters';
import ShowCharacter from './components/ShowCharacter';
import ListofEpisode from './components/ListofEpisode';

import './App.css';
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';




function App() {
  const [characters,setcharacters] =useState([]);
  const [isLoading,setIsLoading]=useState(false)
  const [query,setQuery] = useState("")

  useEffect(()=>{
    
   async function fetchData(){
    try {
      setIsLoading(true)
      const {data} = await axios.
      get(
        `https://rickandmortyapi.com/api/character?name=${query}`
      );
      setcharacters(data.results.slice(0,5)) 
      } catch (err) {
      setcharacters([])
      toast.error(err.response.data.error)
      }finally{
      setIsLoading(false)
     }
   }
   if(query.length < 3){
    setcharacters([])
    return;
   }
fetchData()
    
  }
 
  ,[query])


  return (
<section className="character--movie-nav">
  <Toaster/>
  <NavbarComponent>
    <SearchBar numcharacter={characters.length} query={query} setQuery={setQuery}/>
  </NavbarComponent>
  <div className="main--component flex justify-center mx-24 gap-x-4">
    <ListofCharacters characters={characters} isLoading={isLoading}/>
   <main className="character--detail w-[70%] flex flex-col lg:flex-row xl:flex-row xl:w-[100%] gap-x-4 gap-y-4 ">
      <ShowCharacter characters= { characters} />
    <ListofEpisode className='flex xl:flex-row'/> 
   </main>
  
    
  </div>
</section>
  )
}

export default App

 
