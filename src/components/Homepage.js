import React from 'react';
import '../styles/Homepage.css';
import Illustration from '../images/Illustration.svg'

export default function Homepage() {
    return (
      <div className="Homepage">
        <div className="calculator-container">
          <div className="heading">
            <h1>Mortgage Calculator</h1>
            <a href="name.com">Clear All</a>
          </div>
          <form className="form">
            <div className="mortgage-box">
              <label>Mortgage Amount</label>
              <input type="text" />
            </div>
            <div className="second-div">
              <div className="mortgage-box">
                <label>Mortgage Term</label>
                <input type="text" />
              </div>
              <div className="mortgage-box">
                <label>Interest Rate</label>
                <input type="text" />
              </div>
            </div>
            <label>Mortgage Type</label>
            <div className="mortgage-type">
              <input type="radio" />
              <label>Repayment</label>
            </div>
            <div className="mortgage-type">
              <input type="radio" />
              <label>Repayment</label>
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#133041"
                  d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
                />
              </svg>
              Calculate Repayments
            </button>
          </form>
        </div>
        <div className="calculator-summary">
          <img src={Illustration} alt="illustration-repayment" />
          <h2>Results shown here</h2>
          <p>
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      </div>
    );
}