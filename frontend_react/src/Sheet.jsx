import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SheetShow = () => {


  const [sheets, allSheetGet] = useState([]);

  const navigate= useNavigate(); 

  const navigateNextPage= () => {

    navigate('/check_out');

  }  

  useEffect(() => {

    fetch(`${import.meta.env.VITE_Bankend}/fetchAllSheet`)
      .then((res) => res.json())
      .then((data) => allSheetGet(data));

  }, []);

  // console.log(sheets);


  return (

    <>
      <div>

        <Header />
        <div className="header">
          <div className="movie-info">
            <h2>Tron: Ares</h2>
            <p>Cinepolis: Nexus Seawoods, Nerul, Navi Mumbai | Fri, 10 October, 2025 | 09:00 PM</p>
            <div className="showtime">09:00 PM | 4DX SCREEN</div>
          </div>
        </div>
        <div className="screen-info">₹450 NORMAL</div>
        <div className="seats-container">
          <div className="rows" id="seatArea">

            <div className="legend">
              <div><span /></div>
              <div className="selected"><span /> </div>
              <div className="sold"><span /> </div>
            </div>

          </div>
        </div>
        <a href="">
          <div className="legend">
            <div style={{ display: "flex", flexWrap: "wrap", width: "260px" }}>
              {sheets.map((sitplace, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    width: "20px",
                    textAlign: "center",
                    justifyContent: 'center',
                    margin: "3px",
                  }}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
        </a>

        <a onClick={()=> navigateNextPage()}>
          <div className="pay-section">
            <button className="pay-btn" id="payBtn">Pay ₹0</button>
          </div>
        </a>
      </div>
      <Footer />

    </>

  )

}