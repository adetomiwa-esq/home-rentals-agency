import React from 'react'
import Footer from '../components/Footer'
import HomeTop from '../components/HomeTop'
import Landlord from '../components/Landlord'
import ListofProperties from '../components/ListofProperties'
import PropertyDetails from '../components/PropertyDetails'
import Pros from '../components/Pros'

function Home() {
  return (
    <div>
      <HomeTop />
      <Pros />
      <ListofProperties />
      <PropertyDetails />
      <Landlord />
      <Footer />
    </div>
  )
}

export default Home