import NavbarComponent from './components/NavbarComponent'
import ListCharacter from './components/ListCharacter'
import ShowCharacter from './components/ShowCharacter'
import ListofEpisode from './components/ListofEpisode'
import './App.css'

function App() {


  return (
<div className="character--movie-nav">
  <NavbarComponent/>
  <div className="main--component flex gap-x-4 justify-center mx-24">
    <ListCharacter />
    <div className="character--detail w-[70%] flex flex-col lg:flex-row xl:flex-row xl:w-[100%] gap-x-4 gap-y-4">
      <ShowCharacter />
      <ListofEpisode className='flex xl:flex-row '/>
      
    </div>
    

  </div>
</div>
  )
}

export default App
