import React from "react";
import "./Footer.scss";
import logo from "../res/logo.svg";
import slash from "../res/icon/slash.svg";
import discordIco from "../res/icon/discord.svg";
import facebookIco from "../res/icon/facebook.svg";
import githubIco from "../res/icon/github.svg";
import instagramIco from "../res/icon/instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="topbar">
          <img className="logo" src={logo} alt="logo" />
          <img className="slash" src={slash} alt="slash" />
          <div>Portfolio</div>
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
        <div className="siteinfo">Made with ❤ by somone</div>
      </div>
    </footer>
  );
}
