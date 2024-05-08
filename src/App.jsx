import NavbarComponent, { SearchBar} from './components/NavbarComponent';
import ListofCharacters from './components/ListofCharacters';
import ShowCharacter from './components/ShowCharacter';
import ListofEpisode from './components/ListofEpisode';

import './App.css';
import { useEffect, useState } from 'react';
import { allCharacters } from '../data/data';
import { data } from 'autoprefixer';



function App() {
  const [characters,setcharacters] =useState([]);
  useEffect(()=>{
   async function fetchData(){
     const response  = await fetch("https://rickandmortyapi.com/api/character")
      const data = await response.json()
      setcharacters(data.results.slice(0,5)) 
   }
fetchData()
    
  }
 
  ,[])


  return (
<section className="character--movie-nav">
  <NavbarComponent>
    <SearchBar numcharacter={characters.length}/>
  </NavbarComponent>
  <div className="main--component flex justify-center mx-24 gap-x-4">
   <ListofCharacters characters={characters}/>
   <main className="character--detail w-[70%] flex flex-col lg:flex-row xl:flex-row xl:w-[100%] gap-x-4 gap-y-4 ">
      <ShowCharacter characters= { characters} />
    <ListofEpisode className='flex xl:flex-row'/> 
   </main>
  
    
  </div>
</section>
  )
}

export default App

 
