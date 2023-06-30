import React from "react";
import Slider from "../View/slider";
import Page1 from "../View/menu";
import About from "../View/about";
import Navigation from "../View/navigation";
import Page3 from "../View/page3";

new PanelSnap();
new PanelSnap({
  // parent container
  container: document.body,

  // panel selector
  panelSelector: "> Slider, Page1, About, Page3",

  // threshold
  directionThreshold: 50,

  // scroll delay
  delay: 0,

  // duration in milliseconds
  duration: 300,

  // easing function
  easing: function (t) {
    return t;
  },
});
