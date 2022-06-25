import "./addBook.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  let navigate = useNavigate();
  const REACT_APP_HOST = process.env.REACT_APP_HOST;
  const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION;
  const [name, setName] = useState("");
  const [currencyId, setcurrencyId] = useState("");
  const currency = [
    { id: 1, currency: "TWD" },
    { id: 2, currency: "USD" },
  ];

  const submitBook = () => {
    const body = {
      userId: 1,
      currencyId: currencyId + 1,
      name: name,
    };
    fetch(`${REACT_APP_HOST}/api/${REACT_APP_API_VERSION}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate("/", { replace: true });
      });
  };
  const checkBtns = [
    {
      text: "Cancel",
      class: "add-book-check-cancel",
      onClick: () => {},
    },
    {
      text: "Save",
      class: "add-book-check-save",
      onClick: submitBook,
    },
  ];
  return (
    <div className="add-book-container">
      <div className="add-book-page">
        <div className="add-book-header">
          <div style={{display:"flex", flexDirection:"row"}}>
          <div className="add-book-header-icon"></div>
          <div className="add-book-header-text">Add New Account</div>
          </div>
          <label for="picture" className="add-book-upload-icon"></label>
          <input type="file" id="picture" style={{display:"none", visibility:"none"}}></input>
        </div>
        <hr></hr>
        <div className="add-account-type"></div>
        <div className="add-book-body">
          <div className="add-book-left">
            <div className="add-book-input">
              <label className="add-book-label">Name</label>
              <input
              placeholder="Enter a book name"
                className="add-name-input"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="add-book-input">
              <label className="add-book-currency-label">Currency</label>
              <select className="add-currency-input">
                <option>請選擇幣別</option>
                {currency.map((item, idx) => (
                  <option key={idx}  onChange={(e) => {
                    setcurrencyId(e.target.value);
                  }}>{item.currency}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="add-book-right">
            <div className="add-book-margin"></div>
            <div className="add-book-check">
              {checkBtns.map((item, index) => (
                <div key={index} className={item.class} onClick={item.onClick}>
                  {item.text === "Cancel" ? (
                    <Link to="/">{item.text}</Link>
                  ) : (
                    item.text
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
