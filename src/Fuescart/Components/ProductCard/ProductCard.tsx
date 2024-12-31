import React, { useState } from 'react';
import product_card from '../../Assets/Rough/3.jpg';
import Rating_star from '../../Assets/Star.png';
import Wishlist from '../../Assets/Wishlist.png';
import Wishlist_white from '../../Assets/Wishlist-white.png';
import './ProductCard.css';

const ProductCard: React.FC = () => {
  const products = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: 1999 + i * 100,
    originalPrice: 9000 - i * 100,
    rating: 4.8,
    reviews: 300 + i,
    offer: 'Double',
    image: product_card,
    isWishlisted: false,
  }));

  const [productData, setProductData] = useState(products);

  const toggleWishlist = (id: number) => {
    setProductData((prevData) =>
      prevData.map((product) =>
        product.id === id
          ? { ...product, isWishlisted: !product.isWishlisted }
          : product
      )
    );
  };

  // Handle swipe gestures for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.changedTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart - touchEnd > 50) {
      // Optionally handle swipe left
    }
    if (touchStart - touchEnd < -50) {
      // Optionally handle swipe right
    }
  };

  // Function to handle scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.querySelector('.product-card-mapping') as HTMLElement;
    const scrollAmount = container.clientWidth / 2;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-card">
      <div className="product-card-top">
        <div className="product-card-title">New Arrivals</div>
        <div className="product-card-viewall">View All</div>
      </div>
      <div
        className="product-card-main"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="left-arrow"
          onClick={() => handleScroll('left')}
          style={{ cursor: 'pointer' }}
        >
          <div className="arrow">&#10094;</div>
        </div>

        <div className="product-card-mapping">
          {productData.map((product) => (
            <div className="product-card-container" key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={`Product ${product.id}`} className="product-image" />
                <div
                  className={`product-card-wishlist ${product.isWishlisted ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <img
                    src={product.isWishlisted ? Wishlist_white : Wishlist}
                    alt="Wishlist Icon"
                    className="Wishlist-icon-product"
                  />
                </div>
                <div className="product-offer">{product.offer}</div>
              </div>
              <div className="product-detail">
                <div className="product-title">{product.title}</div>
                <div className="product-rating-offer">
                  <div className="product-rating">
                    <div className="rating-card">
                      <img src={Rating_star} alt="Rating Star" className="rating-star" />
                      <div className="Rating-number">{product.rating}</div>
                    </div>
                    <div className="rating-numbers">({product.reviews})</div>
                  </div>
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

        <div
          className="right-arrow"
          onClick={() => handleScroll('right')}
          style={{ cursor: 'pointer' }}
        >
          <div className="arrow">&#10095;</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
