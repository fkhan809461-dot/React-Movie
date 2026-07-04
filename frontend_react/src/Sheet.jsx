import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const SheetShow = () => {

  const location = useLocation();
  
     const { title } = location.state || {};

      console.log("Title in SheetShow:", title);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
 const { id } = useParams();

  const [sheets, allSheetGet] = useState([]);

  const navigate = useNavigate();

  const navigateNextPage = () => {

    if(selectedSeats.length === 0 || totalAmount == 0){
          alert("Please select at least one seat before proceeding to payment.");
    return;
    }

   

    const eventId = id; 

    navigate('/check_out'

      , {
    state: {
      totalAmount,
      selectedSeats,
    eventId
    },}

    );

  }

  const handleSeatClick = (seat) => {
  if (seat.booking_status === "Y") return;

  const isAlreadySelected = selectedSeats.find(
    (s) => s.id === seat.id
  );

  if (isAlreadySelected) {
    // UNSELECT
    const updatedSeats = selectedSeats.filter(
      (s) => s.id !== seat.id
    );
    setSelectedSeats(updatedSeats);
    setTotalAmount(totalAmount - Number(seat.price));
  } else {

     if (selectedSeats.length >= 10) {
      alert("Maximum seat limit is 10! You cannot select more than 10 seats.");
      return;
    }

    setSelectedSeats([...selectedSeats, seat]);
    setTotalAmount(totalAmount + Number(seat.price));
  }
};


  useEffect(() => {

    fetch(`${import.meta.env.VITE_Bankend}/SheetAllreadyBook/${id}`)
      .then((res) => res.json())
      .then((data) => allSheetGet(data));

  }, []);




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
              <div >Blank<span /> </div>
              <div >Allready Booked<span className="bg-danger" /></div>
              {/* <div className="sold"><span /> </div> */}
            </div>

          </div>
        </div>
        {/* <a href=""> */}
<div className="legend">
  <div style={{ display: "flex", flexWrap: "wrap", width: "260px" }}>
    {sheets.map((sitplace, index) => {
      const isBooked = sitplace.booking_status === "Y";
      const isSelected = selectedSeats.some(
        (s) => s.id === sitplace.id
      );

      return (
        <span
          key={sitplace.id ?? index}
          className={`seat 
            ${isBooked ? "bg-danger" : isSelected ? "bg-success" : "active"}
          `}
          style={{
            display: "inline-block",
            width: "20px",
            textAlign: "center",
            margin: "3px",
            color: "white",
            cursor: isBooked ? "not-allowed" : "pointer",
          }}
          onClick={() => handleSeatClick(sitplace)}
        >
          {index + 1}
        </span>
      );
    })}
  </div>
</div>


        {/* </a> */}

        <a onClick={() => navigateNextPage()}>
       <div className="pay-section">
  <button className="pay-btn" id="payBtn">
    Pay ₹{totalAmount}
  </button>
</div>

        </a>
      </div>
      <Footer />

    </>

  )

}