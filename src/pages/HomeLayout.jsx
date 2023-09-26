import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet,useNavigation} from 'react-router-dom'
import Footer from '../components/Footer'
import Sidebar from '../components/SideBar'

const HomeLayout = () => {

  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

 
  return (
  <section>
     <Navbar />
     <Sidebar />
     {isPageLoading? <div className="loading"></div>: <Outlet />}

    <Footer />
    </section>

   
  )
}

export default HomeLayout