import React, { useState, useEffect } from 'react';

const Table = () => {
  const [currencies, setCurrencies] = useState([]);
  
  useEffect(() => {
    fetch("https://currencyconverter.p.rapidapi.com/availablecurrencies", {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': 'ed9a488cdemshfd8ca9fd27c62b7p1ff1a5jsnc6f882443078',
        'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com'
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(data.currencies);
      })
      .catch((err) => console.error(err));
  }, []);

  return (

    <div>
      <h1>Available Currencies</h1>
      <ul>
        {currencies.map((currency) => (
          <li key={currency}>{currency}</li>
        ))}
      </ul>


    </div>
  )
}

export default Table

