import React from "react";
import "./Art.scss";
import "./ArtResponsive.scss";
import art1 from "../res/arts/1.png";
import art2 from "../res/arts/2.png";
import art3 from "../res/arts/3.png";
import icon from "../res/icon/polygon.svg";

export default function Art() {
  return (
    <section className="art">
      <div className="wrapper">
        <div className="mainCont">
          <div className="art first">
            <div
              className="artImg"
              style={{ backgroundImage: `url('${art1}')` }}
            ></div>
          </div>
          <div className="art second">
            <div
              className="artImg"
              style={{ backgroundImage: `url('${art2}')` }}
            ></div>
          </div>
          <div className="art third">
            <div
              className="artImg"
              style={{ backgroundImage: `url('${art3}')` }}
            ></div>
          </div>

          <div className="art info">
            <img src={icon} alt="triangle" />
            <div className="info">
              I started painting as a hobby when I was little. I didn't know I
              had this talent then I started dreaming of painting and then I
              paint my dream.<br></br>
              <br></br>I am also obsessed with traveling since I was 6 and I am
              very much fond of visiting an amusement park.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
