import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './container/Banner/Banner'
import About from './container/About/About'
import Footer from './components/Footer/Footer'



function App() {
  return (

    <div className="app">
      {/* <Navbar /> */}
      <Banner />
      <About />
      <Footer />
    </div>
    
  )
}

export default App
