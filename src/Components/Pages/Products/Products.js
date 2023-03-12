import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjThree } from './Data'
import Pricing from '../../Pricing'

function Products() {
  return (
    <div>
        <HeroSection {...homeObjThree}/> 
        <Pricing/>
    </div>
  )
}

export default Products
