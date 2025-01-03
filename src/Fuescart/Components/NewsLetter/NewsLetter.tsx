import React, { Fragment, useState } from 'react';
import './NewsLetter.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      toast.error('Oops! We need your email to send you amazing gift ideas!');
    } else if (!validateEmail(email)) {
      toast.error('That doesn’t look like a valid email. Let’s try again to unwrap some surprises!');
    } else {
      toast('You’re on the list! Get ready for exclusive gift ideas and surprises!');
      setEmail(''); // Clear the input field after successful subscription
    }
  };

  return (
    <Fragment>
      <div className="Newsletter">
        <div className="Newsletter-Left">
          <div className="NewsLetter-Title">Join our newsletter</div>
          <div className="NewsLetter-Subtitle">
            Be the first to discover our latest arrivals, fresh finds, just for you!
          </div>
        </div>
        <div className="Newsletter-Right">
          <form
            action="#"
            className="Newsletter-Form"
            onSubmit={(e) => e.preventDefault()} // Prevent default form submission
          >
            <input
              type="email"
              className="NewsLetter-Input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="button"
              className="NewsLetter-Btn"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
            <ToastContainer 
              position="top-center" // Toast position for better visibility
              autoClose={4000} // Close after 3 seconds
              hideProgressBar={false} 
              newestOnTop
              closeOnClick
              draggable
              pauseOnHover
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsLetter;
