import React from 'react'
import './TopChoices.css'
import Topchoices_ad from '../../Assets/Rough/2.jpg'
import Product_img from '../../Assets/Rough/3.jpg'
import Birthday_Icon from '../../Assets/Navicons/party-hat.png';
import Flowers_Icon from '../../Assets/Navicons/flower-bouquet.png';
import Relations_Icon from '../../Assets/Navicons/relationship.png';
import Cakes_Icon from '../../Assets/Navicons/cake.png';

const TopChoices = () => {
  return (
    <div className="topChoices">
      <div className="topChoices-title">
        <div className="topChoices-title-head">Top Choices</div>
        <div className="topChoices-title-sub">"Curated selections for the perfect gift every time."</div>
      </div>
      <div className="topChoices-main">
        <div className="topChoices-ad">
          <img src={Topchoices_ad} alt="" className="topChoices-ad-image" />
        </div>
        <div className="topChoices-container">
          <div className="topChoices-container-top">
            <div className="topChoice-section">
              <div className="topChoices-section-top">
                <div className="topChoices-icon-section">
                  <img src={Birthday_Icon} alt="Birthday Icon" className='topChoices-icon-image' />
                </div>
                <div className="topChoices-section-sub">
                  <div className="sub-top-title">Birthday</div>
                  <div className="sub-top-offer">45% Offer</div>
                </div>
              </div>
              <div className="topChoices-product-container">
                <div className="topChoices-product">
                  <img src={Product_img} alt="" className="topChoices-product-image" />
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
                <div className="topChoices-product">
                  <img src={Product_img} alt="" className="topChoices-product-image" />
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
                <div className="topChoices-product">
                  <div className="topChoices-product-container">
                    <img src={Product_img} alt="" className="topChoices-product-image" />
                  </div>
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="topChoice-section">
              <div className="topChoices-section-top">
                <div className="topChoices-icon-section">
                  <img src={Flowers_Icon} alt="Birthday Icon" className='topChoices-icon-image' />
                </div>
                <div className="topChoices-section-sub">
                  <div className="sub-top-title">Flowers</div>
                  <div className="sub-top-offer">45% Offer</div>
                </div>
              </div>
              <div className="topChoices-product-container">
                <div className="topChoices-product">
                  <img src={Product_img} alt="" className="topChoices-product-image" />
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
                <div className="topChoices-product">
                  <img src={Product_img} alt="" className="topChoices-product-image" />
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
                <div className="topChoices-product">
                  <div className="topChoices-product-container">
                    <img src={Product_img} alt="" className="topChoices-product-image" />
                  </div>
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topChoices-container-bottom">
            <div className="topChoice-section">
              <div className="topChoices-section-top">
                <div className="topChoices-icon-section">
                  <img src={Relations_Icon} alt="Birthday Icon" className='topChoices-icon-image' />
                </div>
                <div className="topChoices-section-sub">
                  <div className="sub-top-title">Relations</div>
                  <div className="sub-top-offer">45% Offer</div>
                </div>
              </div>
              <div className="topChoices-product-container">
                <div className="topChoices-product">
                  <img src={Product_img} alt="" className="topChoices-product-image" />
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
                <div className="topChoices-product">
                  <img src={Product_img} alt="" className="topChoices-product-image" />
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
                <div className="topChoices-product">
                  <div className="topChoices-product-container">
                    <img src={Product_img} alt="" className="topChoices-product-image" />
                  </div>
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="topChoice-section">
              <div className="topChoices-section-top">
                <div className="topChoices-icon-section">
                  <img src={Cakes_Icon} alt="Birthday Icon" className='topChoices-icon-image' />
                </div>
                <div className="topChoices-section-sub">
                  <div className="sub-top-title">Cakes</div>
                  <div className="sub-top-offer">45% Offer</div>
                </div>
              </div>
              <div className="topChoices-product-container">
                <div className="topChoices-product">
                  <img src={Product_img} alt="" className="topChoices-product-image" />
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
                <div className="topChoices-product">
                  <img src={Product_img} alt="" className="topChoices-product-image" />
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
                <div className="topChoices-product">
                  <div className="topChoices-product-container">
                    <img src={Product_img} alt="" className="topChoices-product-image" />
                  </div>
                  <div className="topChoices-product-price">
                    <div className="price-symbol">₹</div>
                    <div className="price-number">500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopChoices