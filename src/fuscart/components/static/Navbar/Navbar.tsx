import React, { Fragment } from 'react'
import Header from './Nav/Header.tsx'

import '../../static/Navbar/Navbar.css'
import Nav from './Nav/Nav.tsx'

const Navbar = () => {
  return (
    <Fragment>
      <div className="top">
        <Header />
        <Nav />
      </div>
    </Fragment>
  )
}

export default Navbar