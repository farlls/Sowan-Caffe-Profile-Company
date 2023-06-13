import React from "react";
import "../css/Reservation.css";
import BtnCloseReservation from "../Controller/ClosePopupBtn";

function Reservation() {
  return (
    <div className="container-bx-reservation animate__fadeIn animate__duration-0.5s">
      <div className="bx-reservation animate__animated animate__fadeInDown">
        <h3 className="Booking-text animate__animated animate__fadeIn animate__delay-0.5s">BOOKING RESERVATION</h3>
        <BtnCloseReservation />
        <div className="heading-date animate__animated animate__fadeIn animate__delay-1s">
          <div className="opening-hours">
            <h4 className="heading">OPENING HOURS</h4>
            <p className="day-text">MON - SUN</p>
            <p className="time-text">9:00 am – 11:00 pm</p>
          </div>
          <div className="caffe-hours">
            <h4 className="heading">CAFFE HOURS</h4>
            <p className="day-text">MON - SUN</p>
            <p className="time-text">8:00 am – 11:00 pm</p>
          </div>
        </div>
        <form className="Input-Reservation animate__animated animate__fadeIn animate__delay-1s">
          <div className="column-input">
            <div className="row-input">
              <div className="Input-Bx-Name">
                <input type="text" required />
                <span>Name</span>
              </div>
              <div className="Input-Bx-Email">
                <input type="email" required />
                <span>Email</span>
              </div>
              <div className="Input-Bx-Phone">
                <input type="text" required />
                <span>Phone Number</span>
              </div>
            </div>
            <div className="row-input">
              <div className="Input-Bx-Date">
                <input type="date" required />
                <span>Date</span>
              </div>
              <div className="Input-Bx-Time">
                <input type="time" required />
                <span>Time</span>
              </div>
              <div className="Input-Bx-Sheet">
                <input type="number" required />
                <span>Sheets</span>
              </div>
            </div>
            <div className="row-input">
              <div className="Input-Bx-Description">
                <textarea required></textarea>
                <span>Description</span>
              </div>
            </div>
            <div className="row-input">
              <button className="Submit-bx">SUBMIT NOW</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
