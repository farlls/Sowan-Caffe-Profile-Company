import React, { useState } from "react";
import Reservation from "../View/reservation";
import "animate.css";
import "../css/Reservation.css";
import "../css/Navigation.css";

function ReservationBtn() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    // const container = document.querySelector(".container-bx-reservation");
    // const bxreservation = document.querySelector(".bx-reservation");

    // if (container && bxreservation) {
    //   container.classList.add("animate__animated", "animate__fadeIn");
    //   bxreservation.classList.add("animate__animated", "animate__fadeIn");
    //   bxreservation.style.setProperty("--animate-duration", "2s");
    // }

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
