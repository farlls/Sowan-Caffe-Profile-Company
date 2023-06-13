import React, { useState, useEffect } from "react";
import Reservation from "../View/reservation";
import "animate.css";
import "../css/index.css";
import "../css/Reservation.css";
import "../css/Navigation.css";

function ReservationBtn() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isPopupOpen) {
      body.classList.add("noScrolling");
    }
  }, [isPopupOpen]);
  return (
    <>
      <button className="reservation-btn" onClick={() => togglePopup()}>
        RESERVATION
      </button>
      {isPopupOpen && <Reservation />}
    </>
  );
}

export default ReservationBtn;
