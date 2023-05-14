import { BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specs from './components/Specs' 
import Case from './components/Case'
import Choose from './components/Choose'
import Footer from './components/Footer'
function App() {
 

  return (
    <BrowserRouter>

    <div className='container overflow-hidden'>
     <Navbar />
     <Hero />
     <Specs />
     <Case/>
     <Choose />
     <Footer />
    </div>
  
    </BrowserRouter>
  )
    
}

export default App
