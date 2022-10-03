import React from "react";
import "./Preview.scss";

export default function Preview({ image, setShow }) {
  return (
    <section className="preview">
      <div className="wrapper">
        <div
          style={{ backgroundImage: `url('${image}')` }}
          className="img-cont"
        ></div>
        <button onClick={() => setShow(false)}>close</button>
      </div>
    </section>
  );
}
