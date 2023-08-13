import React, { useRef } from "react";
import "./Timeline.scss";
import "./TimelineResponsive.scss";
import born from "../res/icon/born.svg";
import school from "../res/icon/school.svg";
import college from "../res/icon/college.svg";
import work from "../res/icon/job.svg";
import heart from "../res/icon/heart.svg";
import useOnScreen from "../hooks/intersecting";

export default function Timeline({ showSchool, showCollege, showWorkplace }) {
  const bornBox = useRef();
  const bornLine = useRef();
  const schoolBox = useRef();
  const schoolLine = useRef();
  const instituteBox = useRef();
  const instituteLine = useRef();
  const jobBox = useRef();
  const loveBox = useRef();
  const loveLine = useRef();

  const is_bornBoxVisible = useOnScreen(bornBox);
  const is_bornLineVisible = useOnScreen(bornLine);
  const is_schoolBoxVisible = useOnScreen(schoolBox);
  const is_schoolLineVisible = useOnScreen(schoolLine);
  const is_instituteBoxVisible = useOnScreen(instituteBox);
  const is_instituteLineVisible = useOnScreen(instituteLine);
  const is_jobBoxVisible = useOnScreen(jobBox);
  const is_loveBoxVisible = useOnScreen(loveBox);
  const is_loveLineVisible = useOnScreen(loveLine);

  return (
    <section className="timeline">
      <div className="wrapper">
        <div className="title">
          Time<span>l</span>ine
        </div>

        <div className="tbox">
          <div className="felem">1999</div>
          <div
            ref={bornBox}
            className={`dbox born ${is_bornBoxVisible ? "reveal" : ""}`}
          >
            <div></div>
            <div className="sbox ico">
              <img src={born} alt="born" />
            </div>
            <div className="sbox info right">Born</div>
          </div>

          <div
            ref={bornLine}
            className={`line ${is_bornLineVisible ? "reveal" : ""}`}
          ></div>

          <div
            onClick={() => showSchool(true)}
            ref={schoolBox}
            className={`dbox school ${is_schoolBoxVisible ? "reveal" : ""}`}
          >
            <div className="sbox info left">
              Studied from India International School
            </div>
            <div className={`sbox ico`}>
              <img src={school} alt="school" />
            </div>
            <div className="sbox pill right">2018</div>
          </div>

          <div
            ref={schoolLine}
            className={`line ${is_schoolLineVisible ? "reveal" : ""}`}
          ></div>

          <div
            onClick={() => showCollege(true)}
            ref={instituteBox}
            className={`dbox college ${is_instituteBoxVisible ? "reveal" : ""}`}
          >
            <div className="sbox pill nonbg left">2021</div>
            <div className="sbox ico">
              <img src={college} alt="born" />
            </div>
            <div className="sbox info right">
              Graduated from Asansol Engineering College
            </div>
          </div>

          <div
            ref={instituteLine}
            className={`line ${is_instituteLineVisible ? "reveal" : ""}`}
          ></div>

          <div
            onClick={() => showWorkplace(true)}
            ref={jobBox}
            className={`dbox work ${is_jobBoxVisible ? "reveal" : ""}`}
          >
            <div className="sbox info left">Working at Cognizant</div>

            <div className="sbox ico">
              <img src={work} alt="born" />
            </div>
            <div className="sbox pill nonbg right">2022</div>
          </div>

          <div
            ref={loveLine}
            className={`line ${is_loveLineVisible ? "reveal" : ""}`}
          ></div>

          <div
            onClick={() => {}}
            ref={loveBox}
            className={`dbox love ${is_loveBoxVisible ? "reveal" : ""}`}
          >
            <div className="sbox pill left">2023</div>
            <div className={`sbox ico`}>
              <img src={heart} alt="heart" />
            </div>
            <div className="sbox info right">
              In a Relationship
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}
