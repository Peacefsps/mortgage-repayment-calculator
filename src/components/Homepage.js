import React, { useState } from 'react';
import '../styles/Homepage.css';
import Illustration from '../images/Illustration.svg'

export default function Homepage() {
    const [selectedOption, setSelectedOption] = useState(null)
    const [formData, setFormData] = useState({
          amount: "",
          term: "",
          rate: "",
          mortgage: "",
        });
    const [errors, setErrors] = useState({
      amount: "",
      term: "",
      rate: "",
      mortgage: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value
            })
    }
    const validateForm = () => {
        let formIsValid = true;
        const newErrors = {};

        if (!formData.amount) {
            formIsValid = true;
            newErrors.amount = 'This field is required';
        }
        if (!formData.term) {
           formIsValid = true;
           newErrors.term = "This field is required";
        }
        if (!formData.rate) {
            formIsValid = true;
            newErrors.rate = "This field is required";
        }
        if (!formData.mortgage) {
             formIsValid = true;
             newErrors.mortgage = "This field is required";
        }
        setErrors(newErrors);
        return formIsValid;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form is submitted', formData)
        }
    }
    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
    return (
      <div className="Homepage">
        <div className="calculator-container">
          <div className="heading">
            <h1>Mortgage Calculator</h1>
            <a href="name.com">Clear All</a>
          </div>
          <form className="form">
            <div className="mortgage-box">
              <label htmlFor="amount">Mortgage Amount</label>
              <div className={`amt-box ${errors.amount ? "input-error" : ""}`}>
                <input
                  type="text"
                  style={{ paddingLeft: "36px" }}
                  name="amount"
                  id="amount"
                  className={errors.amount ? "input-error" : ""}
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
              {errors.amount && <span className="errors">{errors.amount}</span>}
            </div>
            <div className="second-div">
              <div className="mortgage-box">
                <label>Mortgage Term</label>
                <div
                  className={`term-box content-box ${
                    errors.term ? "input-error" : ""
                  } `}
                >
                  <input
                    type="text"
                    name="term"
                    value={formData.term}
                    onChange={handleChange}
                    className={errors.term ? "input-error" : ""}
                  />
                </div>
                {errors.term && <span className="errors">{errors.term}</span>}
              </div>
              <div className="mortgage-box">
                <label>Interest Rate</label>
                <div
                  className={`rate-box content-box ${
                    errors.rate ? "input-error" : ""
                  } `}
                >
                  <input
                    type="text"
                    name="rate"
                    value={formData.rate}
                    className={errors.rate ? "input-error" : ""}
                    onChange={handleChange}
                  />
                </div>
                {errors.rate && <span className="errors">{errors.rate}</span>}
              </div>
            </div>
            <div>
              <label>Mortgage Type</label>
              <div
                className={`mortgage-type ${
                  selectedOption === "option1" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="option1"
                  value="option1"
                  name="mortgage"
                  onChange={() => handleOptionChange("option1")}
                  checked={selectedOption === "option1"}
                />
                <label htmlFor="option1">Repayment</label>
              </div>
              <div
                className={`mortgage-type ${
                  selectedOption === "option2" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  id="option2"
                  name="mortgage"
                  value="option2"
                  onChange={() => handleOptionChange("option2")}
                  checked={selectedOption === "option2"}
                />
                <label htmlFor="option2">Interest Only</label>
              </div>
              {errors.term && <span className="errors">{errors.term}</span>}
            </div>
            <button onClick={handleSubmit}>
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