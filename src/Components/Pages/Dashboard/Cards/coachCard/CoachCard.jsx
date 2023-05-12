import React from "react";
import "./CoachCard.css";
import CoachImage from "../../../../../Assets/Images/Dashboard/CoachImage.png";
import Heart from "../../../../../Assets/Images/Dashboard/Heart.png";
import video from "../../../../../Assets/Images/Dashboard/video.png";
import { Card } from "antd";

const CoachCard = () => {
  return (
    <div>
      <Card className="coach-card-container">
        <div className="coach-upper-div">
          <div className="coach-img-div">
            <img src={CoachImage} alt="CoachImage" className="CoachImage" />
          </div>
          <div className="coach-name-detail-div">
            <div className="coach-name-div">
              <span className="coach-name-span">Coach John</span>
              <span className="coach-upload-time-span">2 minutes ago</span>
            </div>
            <span className="heart-img-span">
              <img src={Heart} alt="Heart" className="heart-img" />
            </span>
          </div>
        </div>
        <div className="coach-lower-div">
          <p className="coach-paragraph">Best way to workout, Must Watch!!!</p>
          <img src={video} alt="video-img" className="coach-video-img" />
        </div>
      </Card>
    </div>
  );
};

export default CoachCard;
