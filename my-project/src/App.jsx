import './App.css'
import About from './Components/About'
import Banner from './Components/Banner'
import Clients from './Components/Clients'
import Companies from './Components/Companies'
import Introduction from './Components/Introduction'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import WhyChoose from './Components/WhyChoose'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Companies/>
      <Services/>
      <About/>
      <WhyChoose/>
      <Introduction/>
      <Clients/>
    </>
  )
}

export default App
