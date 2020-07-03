import React from "react";
import "../App.css";
import pik from "../img/pik.png";
import icon from "../img/icon.jpg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Main() {
  return (
    <div>
      <div className="container">
        <p id="header" className="my-2 txt-lg">
          GitHub{" "}
          <span id="header_light" className="clr-secondary">
            Guides
          </span>
        </p>

        <div className="grid mt-6">

          <div className="w-24 w-24@sm w-12@md column px-4 py-2">
              <Link to='/single'>
                <img src={pik} className="img txt-center" alt="" id="img_crd" />
              </Link>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                doloribus et libero ut eius quos, aliquam atque necessitatibus
                dolorum veritatis.
              </p>
              <small id="my_small_text">
                <i className="ri-time-line"></i>{" "}
                <span id="sm_text_span">5 minutes ago</span>
              </small>
          </div>

          <div className="w-24 w-24@sm w-12@md column px-4 py-2">
              <Link to='/single'>
                <img src={pik} className="img txt-center" alt="" id="img_crd" />
              </Link>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                doloribus et libero ut eius quos, aliquam atque necessitatibus
                dolorum veritatis.
              </p>
              <small id="my_small_text">
                <i className="ri-time-line"></i>{" "}
                <span id="sm_text_span">5 minutes ago</span>
              </small>
          </div>

          <div className="w-24 w-24@sm w-12@md column px-4 py-2">
              <Link to='/single'>
                <img src={pik} className="img txt-center" alt="" id="img_crd" />
              </Link>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                doloribus et libero ut eius quos, aliquam atque necessitatibus
                dolorum veritatis.
              </p>
              <small id="my_small_text">
                <i className="ri-time-line"></i>{" "}
                <span id="sm_text_span">5 minutes ago</span>
              </small>
          </div>


        </div>

        <div id="footer" className="txt-center clr-secondary">
          <img src={icon} id="footer_icon" />
          <p>GitHub is the best way to build and ship software.</p>
          <p>
            Powerful collaboration, code review, and code management for open
            source and private projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
