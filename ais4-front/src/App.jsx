 import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import MainPrincipal from './components/Main/MainPrincipal'

const App = () => {
  return (
    <div className='ovewflow-x-hidden'>
      <Navbar />

      <MainPrincipal />
      <Footer />
    </div>
  )
}

export default App