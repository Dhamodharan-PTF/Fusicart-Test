import React, { Fragment } from 'react'
import Carousel from './Carousal/Carousal'
import SpecialNav from '../Components/Special-Nav/SpecialNav'
import ProductCard from '../Components/ProductCard/ProductCard'
import TopChoices from './TopChoices/TopChoices'
import Categories from './Categories/Categories'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Landing:React.FC = () => {
  return (
    <Fragment>
      <Carousel />
      <SpecialNav />
      <ProductCard />
      <TopChoices />
      <Categories />
      <NewsLetter />
    </Fragment> 
  )
}

export default Landing;