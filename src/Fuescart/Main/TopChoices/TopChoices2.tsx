import React from 'react'
import './TopChoices.css'
import Topchoices_ad from '../../Assets/Rough/2.jpg'
import Product_img from '../../Assets/Rough/3.jpg'
import Occasions_Icon from '../../Assets/Navicons/festive.png';
import Plants_Icon from '../../Assets/Navicons/plant.png';
import Themes_Icon from '../../Assets/Navicons/confetti.png';


const TopChoices2 = () => {
    return (
        <div className="topChoices">
            <div className="topChoices-title">
                <div className="topChoices-title-head">Top Choices</div>
                <div className="topChoices-title-sub">"Handpicked favorites for every occasion and special moment."</div>
            </div>
            <div className="topChoices-main">
                <div className="topChoices-container">
                    <div className="topChoices-container-top">
                        <div className="topChoice-section">
                            <div className="topChoices-section-top">
                                <div className="topChoices-icon-section">
                                    <img src={Occasions_Icon} alt="Birthday Icon" className='topChoices-icon-image' />
                                </div>
                                <div className="topChoices-section-sub">
                                    <div className="sub-top-title">Occasions</div>
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
                                    <img src={Plants_Icon} alt="Birthday Icon" className='topChoices-icon-image' />
                                </div>
                                <div className="topChoices-section-sub">
                                    <div className="sub-top-title">Plants</div>
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
                                    <img src={Themes_Icon} alt="Birthday Icon" className='topChoices-icon-image' />
                                </div>
                                <div className="topChoices-section-sub">
                                    <div className="sub-top-title">Themes</div>
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
                        <div className="topChoice-section-text">
                            <div className="topChoice-nav-text">Unwrap<br />happiness <br />today.</div>
                            <div className="showMore-btn">
                                <div>Show More</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="Categories-right-arrow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topChoices-ad">
                    <img src={Topchoices_ad} alt="" className="topChoices-ad-image" />
                </div>
            </div>
        </div>
    )
}

export default TopChoices2