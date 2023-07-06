import React, { useRef, useState } from "react";
import "../css/Reservation.css";
import BtnCloseReservation from "../Controller/ClosePopupBtn";
import ModalPopup from "./modalpopup";
import emailjs from "@emailjs/browser";

function Reservation() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6n1u5uw",
        "template_kqosjtj",
        form.current,
        "ZwxbboJHLTYyd-Oz6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true); // Mengubah state menjadi true setelah email berhasil dikirim
          setTimeout(() => {
            setIsEmailSent(false);
          }, 3000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-bx-reservation animate__fadeIn animate__duration-0.5s">
      {isEmailSent && <ModalPopup />}
      <div className="bx-reservation animate__animated animate__fadeInDown">
        <h3 className="Booking-text animate__animated animate__fadeIn animate__delay-0.5s">
          BOOKING RESERVATION
        </h3>
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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="Input-Reservation animate__animated animate__fadeIn animate__delay-1s"
        >
          <div className="column-input">
            <div className="row-input">
              <div className="Input-Bx-Name">
                <input type="text" required name="name" />
                <span>Name</span>
              </div>
              <div className="Input-Bx-Email">
                <input type="email" required name="email" />
                <span>Email</span>
              </div>
              <div className="Input-Bx-Phone">
                <input type="text" required name="number" />
                <span>Phone Number</span>
              </div>
            </div>
            <div className="row-input">
              <div className="Input-Bx-Date">
                <input type="date" required name="date" />
                <span>Date</span>
              </div>
              <div className="Input-Bx-Time">
                <input type="time" required name="time" />
                <span>Time</span>
              </div>
              <div className="Input-Bx-Sheet">
                <input type="text" required name="sheet" />
                <span>Sheets</span>
              </div>
            </div>
            <div className="row-input">
              <div className="Input-Bx-Description">
                <textarea required name="message"></textarea>
                <span>Description</span>
              </div>
            </div>
            <div className="row-input">
              <button type="submit" className="Submit-bx">
                SUBMIT NOW
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
