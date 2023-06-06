import React from "react";
import close from "../assets/icons/close.svg";
import "../css/Reservation.css";
const BtnCloseReservation = () => {

  const BtnClosePopup = () => {
    const container = document.querySelector(".container-bx-reservation");
    container.classList.add("animate__animated", "animate__fadeOut");
    const bxreservation = document.querySelector(".bx-reservation");
    bxreservation.classList.add("animate__animated", "animate__fadeOutUp");
    bxreservation.style.setProperty("--animate-duration", "2s");
    container.classList.toggle("close");
  };
  return (
        <div onClick={BtnClosePopup} className="btn-icon-close">
          <img className="icon-close" src={close} alt="icon-close" />
        </div>
  );
};

export default BtnCloseReservation;
