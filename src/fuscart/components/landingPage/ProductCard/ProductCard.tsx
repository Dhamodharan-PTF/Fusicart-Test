// import React, { useState } from 'react';
// import product_card from '../../../assets/Rough/3.jpg';
// import './ProductCard.css';

// const ProductCard = () => {
//   // State to keep track of the first index of the visible set of products
//   const [currentStartIndex, setCurrentStartIndex] = useState(0);

//   // Array of products (add more products if necessary)
//   const products = [
//     { id: 1, name: "Luxury Hair Care Gift", rating: 4.7, price: "₹1999.00", originalPrice: "₹2500", image: product_card },
//     { id: 2, name: "Luxury Hair Care Gift", rating: 4.5, price: "₹2499.00", originalPrice: "₹3200", image: product_card },
//     { id: 3, name: "Luxury Hair Care Gift", rating: 4.8, price: "₹1499.00", originalPrice: "₹2000", image: product_card },
//     { id: 4, name: "Luxury Hair Care Gift", rating: 4.9, price: "₹2999.00", originalPrice: "₹3500", image: product_card },
//     { id: 5, name: "Luxury Hair Care Gift", rating: 4.6, price: "₹4999.00", originalPrice: "₹6000", image: product_card },
//     { id: 6, name: "i Love You", rating: 4.2, price: "₹3499.00", originalPrice: "₹4200", image: product_card },
//     { id: 7, name: "Luxury Hair Care Gift", rating: 4.3, price: "₹999.00", originalPrice: "₹1200", image: product_card },
//     { id: 8, name: "Luxury Hair Care Gift", rating: 4.5, price: "₹1299.00", originalPrice: "₹1500", image: product_card },
//     { id: 9, name: "Luxury Hair Care Giftr", rating: 4.8, price: "₹1999.00", originalPrice: "₹2500", image: product_card },
//     { id: 10, name: "Luxury Hair Care Gift", rating: 4.6, price: "₹1499.00", originalPrice: "₹1800", image: product_card },
//   ];

//   // Handle the next and previous button clicks
//   const goToNext = () => {
//     if (currentStartIndex + 5 < products.length) {
//       setCurrentStartIndex(prevIndex => prevIndex + 5);
//     }
//   };

//   const goToPrevious = () => {
//     if (currentStartIndex - 5 >= 0) {
//       setCurrentStartIndex(prevIndex => prevIndex - 5);
//     }
//   };

//   // Get the products to display (5 products at a time)
//   const currentProducts = products.slice(currentStartIndex, currentStartIndex + 5);

//   return (
//     <div className="product-card-container">
//       <div className="product-card-top">
//         <p className="productCard_title">NEW ARRIVALS</p>
//         <button className="productCard_viewall">View All</button>
//       </div>
//       <div className="product-card-main">
//         {/* Left Arrow */}
//         <div className="circle-arrow" onClick={goToPrevious} style={{
//           visibility: currentStartIndex + 5 < products.length ? 'visible' : 'visible',
//           marginLeft: '-2rem', // Add the desired margin-right value here
//         }}>
//           <div className="arrow-left">&#8592;</div>
//         </div>

//         {/* Product Cards */}

//         {currentProducts.map((product) => (
//           <div key={product.id} className="product-card">
//             <div className="like-button">&#9825;</div>
//             <div className="product-card-image">
//               <img src={product.image} alt={product.name} className="product-card-img" />
//             </div>
//             <div className="product-card-details">
//               <h3 className="product-title">{product.name}</h3>
//               <p className="product-rating">⭐ {product.rating}</p> <span className='avgrating'>(355)</span>
//               <p className="product-price">
//                 <span className="current-price">{product.price}</span>
//                 <span className="original-price">{product.originalPrice}</span>
//               </p>
//             </div>
//           </div>
//         ))}


//         {/* Right Arrow */}
//         <div
//           className="circle-arrow1"
//           onClick={goToNext}
//           style={{
//             visibility: currentStartIndex + 5 < products.length ? 'visible' : 'visible',
//             marginRight: '-2rem', // Add the desired margin-right value here
//           }}
//         >
//           <div className="arrow-right">&#8594;</div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import React, { useState } from 'react';
import product_card from '../../../assets/Rough/3.jpg';
import Rating_star from '../../../assets/Star.png';
import './ProductCard.css';

const ProductCard: React.FC = () => {
  // Sample data to simulate 15 products
  const products = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: 1999 + i * 100,
    originalPrice: 9000 - i * 100,
    rating: 4.8,
    reviews: 300 + i,
    offer: 'Double',
    image: product_card,
  }));

  // State for the current index of the first visible product
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximum products visible at a time
  const maxVisible = 5;

  // Handlers for navigation
  const handleNext = () => {
    if (currentIndex + maxVisible < products.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get the products to display
  const visibleProducts = products.slice(currentIndex, currentIndex + maxVisible);

  return (
    <div className="product-card">
      <div className="product-card-top">
        <div className="product-card-title">New Arrivals</div>
        <div className="product-card-viewall">View All</div>
      </div>
      <div className="product-card-main">
        <div className="left-arrow" onClick={handlePrev} style={{ cursor: currentIndex > 0 ? 'pointer' : 'not-allowed' }}>
          &#8592;
        </div>
        <div className="product-card-mapping">
          {visibleProducts.map((product) => (
            <div className="product-card-container" key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={`Product ${product.id}`} className="product-image" />
              </div>
              <div className="product-detail">
                <div className="product-title">{product.title}</div>
                <div className="product-rating-offer">
                  <div className="product-rating">
                    <div className="rating-card">
                      <img src={Rating_star} alt="Rating Star" />
                      <div className="Rating-number">{product.rating}</div>
                    </div>
                    <div className="rating-numbers">({product.reviews})</div>
                  </div>
                  <div className="product-offer">{product.offer}</div>
                </div>
                <div className="product-price">
                  <div className="product-site-price">
                    <div className="price-tag">₹</div>
                    {product.price}
                  </div>
                  <div className="product-ori-price">
                    <div className="price-ori-tag">₹</div>
                    {product.originalPrice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="right-arrow" onClick={handleNext} style={{ cursor: currentIndex + maxVisible < products.length ? 'pointer' : 'not-allowed' }}>
          &#8594;
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
