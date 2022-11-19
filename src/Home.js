import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Banner from './components/HomePage/Banner'

function Home() {
  return (
      <div>
          <Header />
              <Banner/>
          <Footer/>
    </div>
  )
}

export default Home