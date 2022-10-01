import React, { useRef } from "react";
import "./About.scss";
import "./AboutResponsive.scss";
import koyena from "../res/about.png";
import useOnScreen from "./../hooks/intersecting";

export default function About() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <section ref={ref} className={`about ${isVisible ? "reveal" : ""}`}>
      <div className="cont">
        <img id="aboutme" src={koyena} alt="koyena" />
        <div className="infoCont">
          <div className="box"></div>
          <div className="info">
            Hi, I am <b>Koyena</b> from West Bengal. I am currently working
            under cognizant as a programmer trainee.
            <br></br> <br></br>Life to me means family & friends who you can
            trust and who trust you. I am pretty much on the happy side of life.
            That also means I have some sad or depressed days too sometimes.
            <br></br> <br></br> I have few friends here from my childhood who
            sort of look out for me even when I am having a bad day. I am a very
            optimistic person. I always do something that I want and I try to do
            something different that the others don't mind yet. I hope
            everything that I want will be achieved.
            <br></br> <br></br>My mother is my inspiration and my family is my
            spirit.
          </div>
        </div>
      </div>
    </section>
  );
}
