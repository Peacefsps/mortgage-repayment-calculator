import React, { useState } from 'react';
import '../styles/Homepage.css';
import Illustration from '../images/Illustration.svg'

export default function Homepage() {
    const [selectedOption, setSelectedOption] = useState(null)
    const [displayResult, setDisplayResult] = useState(false)
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
    const [result, setResult] = useState({monthlyPayment: null, totalPayment: null})
    const handleChange = (e) => {
      const { name, value } = e.target;
      // Remove commas from the input value for storing in the state
      const rawValue = value.replace(/,/g, "");

      if (!isNaN(rawValue) || rawValue === "") {
        const formattedValue = new Intl.NumberFormat().format(rawValue)
        setFormData({
          ...formData,
          [name]: formattedValue,
        });
      }
      
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
            calculateMortgage()
        }
        setDisplayResult(true)
    }
    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
    const calculateMortgage = () => {
        const principal = parseFloat(formData.amount.replace(/,/g, ''));
        const years = parseFloat(formData.term.replace(/,/g, ""));
        const annualRate = parseFloat(formData.rate) / 100;

        const monthlyRate = annualRate / 12;
        const numberOfPayments = years * 12;

        const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1+ monthlyRate, numberOfPayments) - 1);

        const totalPayment = monthlyPayment * numberOfPayments

        setResult({
          monthlyPayment: monthlyPayment.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          totalPayment: totalPayment.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
        });
    }
    const resetForm = () => {
        setFormData({
          amount: "",
          term: "",
          rate: "",
          mortgage: "",
        });
          setErrors({
            amount: "",
            term: "",
            rate: "",
            mortgage: "",
          });
           setResult({
             monthlyPayment: null,
             totalPayment: null,
           });
           setDisplayResult(false);
           setSelectedOption(null);
    }
    return (
      <div className="Homepage">
        <div className="calculator-container">
          <div className="heading">
            <h1>Mortgage Calculator</h1>
            <button href="#" onClick={resetForm}>
              Clear All
            </button>
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
                  //   onChange={inputAmount}
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
                    type="number"
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
                    type="number"
                    name="rate"
                    value={formData.rate}
                    className={errors.rate ? "input-error" : ""}
                    onChange={handleChange}
                    step="0.01"
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
        {!displayResult && (
          <div className="calculator-summary">
            <img src={Illustration} alt="illustration-repayment" />
            <h2>Results shown here</h2>
            <p>
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        )}
        {displayResult && (
          <div className="calculator-result">
            <h2>Your results</h2>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              "calculate repayments" again.
            </p>
            <div className="mortgage-values">
              <h3>Your monthly repayments</h3>
              <h4>${result.monthlyPayment}</h4>
              <p>Total you'll repay over the term</p>
              <h5>${result.totalPayment}</h5>
            </div>
          </div>
        )}
      </div>
    );
}