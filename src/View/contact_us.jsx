import { useEffect, useRef, useState } from "react";
import React from "react";
import "../css/ContactUs.css";
import "../css/ModalPopUp.css";

import IconPhone from "../assets/icons/Icon-Phone.svg";
import IconAddress from "../assets/icons/Icon-Address.svg";
import IconEmail from "../assets/icons/icon-email.svg";
import emailjs from "@emailjs/browser";

import AOS from "aos";
import "aos/dist/aos.css";
import ModalPopup from "./modalpopup";

function ContactUs() {
  const formcontactUS = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const sendContactus = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6n1u5uw",
        "template_dzj5q6r",
        formcontactUS.current,
        "ZwxbboJHLTYyd-Oz6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true); // Mengubah state menjadi true setelah email berhasil dikirim
          setTimeout(() => {
            setIsEmailSent(false);
          }, 3000);
          formcontactUS.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {isEmailSent && <ModalPopup />}
      <div className="container-contactus">
        <header className="header">
          <h1 className="heading-h1">Contact Us</h1>
          <h4 className="sub-heading">
            Home - <span className="span-contactUs">Contact Us</span>
          </h4>
        </header>
        <section className="row-section">
          <content data-aos="fade-right" className="column-ContactUS">
            <span className="sub-heading-row">DROP US A LINE</span>
            <span className="heading-contactUS">Send Your Message</span>
            <form
              ref={formcontactUS}
              onSubmit={sendContactus}
              className="input-form"
            >
              <div className="column-input-contaUS">
                <div className="row-input">
                  <div className="Input-Bx-Name-ContactUs">
                    <input type="text" required name="name" />
                    <span>Name</span>
                  </div>
                  <div className="Input-Bx-Email-ContactUs">
                    <input type="email" required name="email" />
                    <span>Email</span>
                  </div>
                </div>
                <div className="row-input">
                  <div className="Input-Bx-Phone-ContactUs">
                    <input type="text" required name="number" />
                    <span>Phone Number</span>
                  </div>
                  <div className="Input-Bx-Date-ContactUs">
                    <input type="date" required name="date" />
                    <span>Date</span>
                  </div>
                </div>
                <div className="row-input">
                  <div className="Input-Bx-Description-ContactUs">
                    <textarea required name="message"></textarea>
                    <span>Description</span>
                  </div>
                </div>
                <div className="row-input">
                  <button type="submit" className="Submit-bx-ContactUs">
                    SUBMIT NOW
                  </button>
                </div>
              </div>
            </form>
          </content>
          <content data-aos="fade-left" className="column-detail-contactus">
            <div className="detail-phone">
              <div className="row-insert-detail">
                <img
                  className="Icon-Phone"
                  alt="Icon phone"
                  src={IconPhone}
                ></img>
                <div className="column-insert-detail">
                  <h2 className="heading-detail-phone">Phone</h2>
                  <h4 className="Subheading-detail-phone">0820230606</h4>
                </div>
              </div>
            </div>
            <div className="detail-address">
              <div className="row-insert-detail">
                <img
                  className="Icon-Address"
                  alt="Icon address"
                  src={IconAddress}
                ></img>
                <div className="column-insert-detail">
                  <h2 className="heading-detail-address">Address</h2>
                  <h4 className="Subheading-detail-address">
                    42 Jl. Kaliurang Daerah Istimewa Yogyakarta
                  </h4>
                </div>
              </div>
            </div>
            <div className="detail-email">
              <div className="row-insert-detail">
                <img
                  className="Icon-Email"
                  alt="Icon Email"
                  src={IconEmail}
                ></img>
                <div className="column-insert-detail">
                  <h2 className="heading-detail-email">Email</h2>
                  <h4 className="Subheading-detail-email">
                    sowancaffe@gmail.com
                  </h4>
                </div>
              </div>
            </div>
          </content>
        </section>
      </div>
    </>
  );
}
export default ContactUs;
