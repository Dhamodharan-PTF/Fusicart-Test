import React, { Fragment } from 'react'
import Carousel from './Carousal/Carousal'
import SpecialNav from '../Components/Special-Nav/SpecialNav'
import ProductCard from '../Components/ProductCard/ProductCard'
import TopChoices from './TopChoices/TopChoices'
import Categories from './Categories/Categories'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import TopChoices2 from './TopChoices/TopChoices2'
import Description from '../Components/Static/Description'

const Landing:React.FC = () => {
  return (
    <Fragment>
      <Carousel />
      <SpecialNav />
      <ProductCard />
      <TopChoices />
      <TopChoices2 />
      <Description />
      <Categories />
      <NewsLetter />
    </Fragment> 
  )
}

export default Landing;