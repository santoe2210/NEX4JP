import React from 'react'
import NavBar from '../components/NavBar'
import TestNav from '../components/TestNav'
import Home from '../components/Home'
import Service from '../components/Service'
import About from '../components/About'
import Product from '../components/Team'
import Blog from '../components/Blog'
import Pp from '../components/PrivacyPolicy'
import MyFooter from '../components/MyFooter'

const HomePage = () => {
  return (
    <div>
      <TestNav/>
      <Home />
      <MyFooter/>
    </div>
  )
}

export default HomePage
