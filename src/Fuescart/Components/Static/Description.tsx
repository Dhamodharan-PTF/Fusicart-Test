import React, { Fragment } from 'react';
import './Description.css'

const Description:React.FC = () => {
  return (
    <Fragment>
        <div className="Description">
            <div className="textBox">600+ Available Products</div>
            <div className="textBox">-</div>
            <div className="textBox">On-time Delivery</div>
            <div className="textBox">-</div>
            <div className="textBox">Trusted by Thousands</div>
            <div className="textBox">-</div>
            <div className="textBox">Personalized Gifting Options</div>
        </div>
    </Fragment>
  )
}

export default Description