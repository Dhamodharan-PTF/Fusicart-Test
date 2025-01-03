import React, { Fragment } from 'react';
import './Footer.css';
import logoWhite from '../../../Assets/Logo-white.png';
import { PolicyInfo, YourAccount, BusinessServices, AboutFuscart, HelpSupport, Payments } from './FooterLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-left">
            <div className="footer-logo-container">
              <img src={logoWhite} alt="fuscart-logo" className='fuscart-logo'/>
            </div>
            <div className="footer-copyrights">
              <div className="follow">
                <div className="follow-title">Follow us</div>
                <div className="follow-social">
                  <FontAwesomeIcon icon={faFacebook} size="1x" style={{ color: "#ffffff", margin: "10px" }} />
                  <FontAwesomeIcon icon={faSquareInstagram} size="1x" style={{ color: "#ffffff", margin: "10px" }} />
                  <FontAwesomeIcon icon={faYoutube} size="1x" style={{ color: "#ffffff", margin: "10px" }} />
                </div>
              </div>
              <div className="footer-copyrights-container">
              @2024 fuscart.com | all rights reserved
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-top">
              <div className="footer-right-container">
                <div className="footer-conainer-title">Policy Info</div>
                <ul className='footer-nav'>
                  {PolicyInfo.map((item, index) => (
                    <li key={index} className='footer-nav-item'>
                      <a href={item.to} className='footer-nav-link'>
                        <div className='footer-nav-text'>{item.label}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-right-container">
                <div className="footer-conainer-title">Your Account</div>
                <ul className='footer-nav'>
                  {YourAccount.map((item, index) => (
                    <li key={index} className='footer-nav-item'>
                      <a href={item.to} className='footer-nav-link'>
                        <div className='footer-nav-text'>{item.label}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-right-container">
                <div className="footer-conainer-title">Business Services</div>
                <ul className='footer-nav'>
                  {BusinessServices.map((item, index) => (
                    <li key={index} className='footer-nav-item'>
                      <a href={item.to} className='footer-nav-link'>
                        <div className='footer-nav-text'>{item.label}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer-right-bottom">
              <div className="footer-right-container">
                <div className="footer-conainer-title">About Fuscart</div>
                <ul className='footer-nav'>
                  {AboutFuscart.map((item, index) => (
                    <li key={index} className='footer-nav-item'>
                      <a href={item.to} className='footer-nav-link'>
                        <div className='footer-nav-text'>{item.label}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-right-container">
                <div className="footer-conainer-title">Help & Support</div>
                <ul className='footer-nav'>
                  {HelpSupport.map((item, index) => (
                    <li key={index} className='footer-nav-item'>
                      <a href={item.to} className='footer-nav-link'>
                        <div className='footer-nav-text'>{item.label}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-right-container">
                <div className="footer-conainer-title">Payments</div>
                <ul className='footer-nav'>
                  {Payments.map((item, index) => (
                    <li key={index} className='footer-nav-item'>
                      <a href={item.to} className='footer-nav-link'>
                        <div className='footer-nav-text'>{item.label}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pegasus-copyright">
          © 2024 Pegasus Tech Fusion.  || Email: infoteamptf@gmail.com
        </div>
      </div>
    </Fragment>
  );
};
