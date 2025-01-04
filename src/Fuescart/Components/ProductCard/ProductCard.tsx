import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import product_card from '../../Assets/Rough/3.jpg';
import Rating_star from '../../Assets/Star.png';
import Wishlist from '../../Assets/Wishlist.png';
import Wishlist_white from '../../Assets/Wishlist-white.png';
import './ProductCard.css';

const ProductCard: React.FC = () => {

  const navigate = useNavigate();

  const handleCardClick = (id: number, title: string) => {
    navigate(`/productDescription/${id}/${encodeURIComponent(title)}`);
  };


  const products = Array.from({ length: 10 }, (_, i) => ({
    fuscart_product_id: i + 1,
    product_title: `Product ${i + 1}`,
    product_price: 1999 + i * 100,
    product_originalPrice: 9000 - i * 100,
    product_rating: 4.8,
    product_reviews: 300 + i,
    product_offer: 'Double',
    product_image: product_card,
    product_isWishlisted: false,
  }));

  const [productData, setProductData] = useState(products);

  const toggleWishlist = (fuscart_product_id: number) => {
    setProductData((prevData) =>
      prevData.map((product) =>
        product.fuscart_product_id === fuscart_product_id
          ? {
              ...product,
              product_isWishlisted: !product.product_isWishlisted,
            }
          : product
      )
    );

    const product = productData.find(
      (item) => item.fuscart_product_id === fuscart_product_id
    );

    if (product) {
      const message = product.product_isWishlisted
        ? `${product.product_title} Surprise Unwrapped Early`
        : `${product.product_title} Surprise in Store`;
      toast(message);
    }
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
        <Link to="/NewArrivals" className="product-card-viewall">View All</Link>
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
            <Link
              to={`/${product.fuscart_product_id}/${encodeURIComponent(product.product_title)}`}
              key={product.fuscart_product_id}
              className="product-card-container"
              style={{ textDecoration: 'none' }}
            >
              <div className="product-image-container">
                <img src={product.product_image} alt={`Product ${product.fuscart_product_id}`} className="product-image" />
                <div
                  className={`product-card-wishlist ${product.product_isWishlisted ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent link navigation
                    e.stopPropagation(); // Stop event bubbling
                    toggleWishlist(product.fuscart_product_id);
                  }}
                  tabIndex={-1} 
                >
                  <img
                    src={product.product_isWishlisted ? Wishlist : Wishlist_white}
                    alt="Wishlist Icon"
                    className="Wishlist-icon-product"
                  />
                </div>
                <div className="product-offer">{product.product_offer}</div>
              </div>
              <div className="product-detail">
                <div className="product-title">{product.product_title}</div>
                <div className="product-rating-offer">
                  <div className="product-rating">
                    <div className="rating-card">
                      <img src={Rating_star} alt="Rating Star" className="rating-star" />
                      <div className="Rating-number">{product.product_rating}</div>
                    </div>
                    <div className="rating-numbers">({product.product_reviews})</div>
                  </div>
                </div>
                <div className="product-price">
                  <div className="product-site-price">
                    <div className="price-tag">₹</div>
                    {product.product_price}
                  </div>
                  <div className="product-ori-price">
                    <div className="price-ori-tag">₹</div>
                    {product.product_originalPrice}
                  </div>
                </div>
              </div>
            </Link>
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
