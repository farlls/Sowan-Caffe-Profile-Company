import React, { useState } from "react";
import Reservation from "../View/reservation";
import "animate.css";
import "../css/Reservation.css";
import "../css/Navigation.css";

function ReservationBtn() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <>
     {isPopupOpen ? <Reservation /> : null}
      <button className="reservation-btn" onClick={togglePopup}>
        RESERVATION
      </button>
    </>
  );
}

export default ReservationBtn;
