import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import UseEffect from './UseEffect'
import Hook from './hooks/hook'
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/home" element={<Home />}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/useeffect' element={<UseEffect/>} />
   <Route path='/hook' element={<Hook/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
