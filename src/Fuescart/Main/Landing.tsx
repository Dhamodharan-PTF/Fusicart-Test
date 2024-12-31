import React, { Fragment } from 'react'
import Navbar from '../Components/Static/Navbar/Navbar'
import Carousel from './Carousal/Carousal'
import SpecialNav from '../Components/Special-Nav/SpecialNav'
import ProductCard from '../Components/ProductCard/ProductCard'
import TopChoices from './TopChoices/TopChoices'

export const Landing:React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <SpecialNav />
      <ProductCard />
      <TopChoices />
      <div className="" style={{height:"300px"}}></div>
    </Fragment> 
  )
}
