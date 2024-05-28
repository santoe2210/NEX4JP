import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Service from '../components/Service'
import About from '../components/About'
import Product from '../components/Product'
import Blog from '../components/Blog'
import Pp from '../components/PrivacyPolicy'
import MyFooter from '../components/MyFooter'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Product/>
      <Service/>
      <Blog/>
      <Pp/>
      <MyFooter/>
    </div>
  )
}

export default HomePage
