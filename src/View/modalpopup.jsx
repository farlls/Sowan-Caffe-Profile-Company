import React from "react";
import "../css/ModalPopUp.css";
import { Player } from "@lottiefiles/react-lottie-player";
import iconSuceess from "../assets/icons/Success.json";
function ModalPopup() {
  return (
    <div class="container-modalPopUp">
      <div class="ModalContent">
        <Player
          autoplay
          loop
          src={iconSuceess}
          style={{ height: "80px", width: "80px" }}
        ></Player>
        <h1 className="deskripsi-modal">SUCCESS</h1>
      </div>
    </div>
  );
}
export default ModalPopup;
