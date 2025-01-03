import React, { Fragment } from 'react'
import Navbar from '../Components/Static/Navbar/Navbar'
import Carousel from './Carousal/Carousal'
import SpecialNav from '../Components/Special-Nav/SpecialNav'
import ProductCard from '../Components/ProductCard/ProductCard'
import TopChoices from './TopChoices/TopChoices'
import Categories from './Categories/Categories'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import { Footer } from '../Components/Static/Footer/Footer'

export const Landing:React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <SpecialNav />
      <ProductCard />
      <TopChoices />
      <Categories />
      <NewsLetter />
      <Footer />
    </Fragment> 
  )
}
