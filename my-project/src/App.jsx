import './App.css'
import About from './Components/About'
import Achievements from './Components/Achievements'
import ApplicationProcess from './Components/ApplicationProcess'
import Banner from './Components/Banner'
import Blogs from './Components/Blogs'
import Clients from './Components/Clients'
import Companies from './Components/Companies'
import CompanyIcons from './Components/CompanyIcons'
import Email from './Components/Email'
import Faqs from './Components/Faqs'
import Footer from './Components/Footer'
import Introduction from './Components/Introduction'
import MobileApp from './Components/MobileApp'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
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
      <ApplicationProcess/>
      <Blogs/>
      <Testimonials/>
      <Faqs/>
      {/* <MobileApp/> */}
      <Achievements/>
      <Email/>
      <CompanyIcons/>
      <Footer/>
    </>
  )
}

export default App
