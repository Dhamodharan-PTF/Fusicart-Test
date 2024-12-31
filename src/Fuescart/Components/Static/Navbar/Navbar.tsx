import React, { Fragment } from 'react'
import '../Navbar/Navbar.css'
import Nav from './Nav/Nav'

const Navbar = () => {
  return (
    <Fragment>
      <div className="top">
        <Nav />
      </div>
    </Fragment>
  )
}

export default Navbar