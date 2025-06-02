import { Routes,Route} from "react-router-dom";
 import Home from './Home'
 import Pokeflex from './PokeFlex'
 import PokeGrind from './PokeGrind'

const App = () => {

  return (
    <Routes>
    < Route path= "/" element={<Home/>} />
    < Route path= "PokeFlex" element={<PokeFlex/>} />
    < Route path= "PokeGrind" element={<PokeGrind/>} />
    </Routes>
  )
}

export default App