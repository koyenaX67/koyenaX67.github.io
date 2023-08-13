import React, { useEffect, useRef, useState } from "react";
import "./Hero.scss";
import "./HeroReveal.scss";
import "./HeroMotion.scss";
import "./HeroResponsive.scss";
import heroImage from "../res/heroIMG.png";
import heroTitle from "../res/hero_title.png";
import discordIco from "../res/icon/discord.svg";
import facebookIco from "../res/icon/facebook.svg";
import githubIco from "../res/icon/github.svg";
import instagramIco from "../res/icon/instagram.svg";
import downIco from "../res/icon/down.png";
import useOnScreen from "../hooks/intersecting";

export default function Hero() {
  const year = new Date().getUTCFullYear();
  const [myName, setMyname] = useState("Koyena");

  useEffect(() => {
    const interval = setInterval(() => {
      let index = Math.floor(Math.random() * 6);
      let index2 = Math.floor(Math.random() * 6);
      let newName = "Koyena";
      newName = newName.replace(newName[index], "#@$%&("[index2]);

      setMyname(newName);
    }, 170);

    return () => clearInterval(interval);
  }, []);

  const heroRef = useRef();
  const is_hero_visible = useOnScreen(heroRef);

  const gotoAbout = () => {
    const about = document.createElement("a");
    about.setAttribute("href", "#aboutme");
    about.click();
  };

  return (
    <section
      ref={heroRef}
      className={`hero ${is_hero_visible ? "reveal" : ""}`}
    >
      <div className="side-label">
        <div className="up line"></div>
        <div className="year">{year}</div>
        <div className="down line"></div>
      </div>

      <div className="hero-content">
        <div className="hero_image">
          <div
            className="myImage"
            style={{ backgroundImage: `url('${heroImage}')` }}
          ></div>
        </div>
        <img className="hero_title" src={heroTitle} alt="hi" />
        <div className="page">
          <div className="pill"></div>
          <div className="pill"></div>
          <div className="pill"></div>
        </div>
        <div className="hero_panel">
          <div className="lcont">
            <div className="myname">{myName}</div>
            <div className="mysinfo">
              programer at <span>Cognizant</span>
            </div>
            <div className="contacts">
              <a href="https://discordapp.com/users/epicX#0825">
                <img src={discordIco} alt="Discord" />
              </a>
              <a href="https://www.facebook.com/koyena.datta.77">
                <img src={facebookIco} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagramIco} alt="Instagram" />
              </a>
              <a href="https://github.com/koyenaX67">
                <img src={githubIco} alt="Github" />
              </a>
            </div>
          </div>
          <div onClick={() => gotoAbout()} className="rcont">
            <img src={downIco} alt="down" />
          </div>
        </div>
      </div>
    </section>
  );
}
