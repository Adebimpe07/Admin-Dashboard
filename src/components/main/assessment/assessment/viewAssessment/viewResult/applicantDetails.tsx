import { ArrowLeft2, ArrowRight2, PlayCircle } from "iconsax-react";
import React from "react";

const applicantDetails = () => {
  return (
    <section>
      <h1>Applicant details</h1>
      <div>
        <div>
          <img src="" alt="" />
          <p>Applicant name:</p>
          <p>Course Applied for:</p>
          <p>Application ID:</p>
          <p>Email:</p>
        </div>
        <div>
          <p>Device used:</p>
          <p>Location:</p>
          <p>Webcam: </p>
          <p>Time Started:</p>
          <p>Change Device time: </p>
          <div>
            <h3>Camera test:</h3>
            <div>
              <ArrowLeft2 size="32" color="#FF8A65" />
              <img src="" alt="" />
              <ArrowRight2 size="32" color="#FF8A65" />
            </div>
          </div>
        </div>
        <div>
          <p>Browser used:</p>
          <p>Fullscreen:</p>
          <p>Time Ended:</p>
        </div>
        <div>
          <h3>Audio test:</h3>
          <PlayCircle size="32" color="#FF8A65" />
          <audio>
            <source src="" type=""></source>
          </audio>
        </div>
      </div>
    </section>
  );
};

export default applicantDetails;
