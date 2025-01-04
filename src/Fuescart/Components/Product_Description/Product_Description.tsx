import React, { Fragment, useEffect  } from 'react'
import { useParams } from 'react-router-dom'

const Product_Description: React.FC = () => {

  const { id, title } = useParams<{ id: string; title: string }>();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <Fragment>
      <div>
  
        <h1>Product Description</h1>
        <p>Product ID: {id}</p>
        <p>Product Title: {decodeURIComponent(title || '')}</p>
      </div>
    </Fragment>
  )
}

export default Product_Description