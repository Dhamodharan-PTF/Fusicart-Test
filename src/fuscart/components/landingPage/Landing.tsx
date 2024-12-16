import React, { Fragment } from 'react'
import Navbar from '../static/Navbar/Navbar.tsx'

import Carousel1 from './Carousel/Carousel.tsx'
import SpecialNav from './SpecialNav/SpecialNav.tsx'
import ProductCard from './ProductCard/ProductCard.tsx'
import TopChoices from './TopChoices/TopChoices.tsx'

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Carousel1 />
      <SpecialNav />
      <ProductCard />
      <TopChoices/>
      <div className="" style={{height:'300px'}}></div>
    </Fragment>
  )
}

export default Landing