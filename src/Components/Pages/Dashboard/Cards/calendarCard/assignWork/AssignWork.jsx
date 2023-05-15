import React from "react";
import "./AssignWork.css";
import arrowRight from "../../../../../../Assets/Images/Dashboard/arrowRight.png";
import arrowLeft from "../../../../../../Assets/Images/Dashboard/arrowLeft.png";
import kneeTop from "../../../../../../Assets/Images/Dashboard/high-Knee-Top.png";
import { Card } from "antd";

const AssignWork = () => {
  return (
    <div>
      <Card className="card-container">
        <div className="assign-work-title-div">
          <span className="assign-work-title-span">Assigned Workouts</span>
          <div className="assign-work-navigator-div">
            <button className="arrow-image-btn">
              <img src={arrowLeft} alt="arrowLeft" className="arrow-image" />
            </button>
            <button className="arrow-image-btn">
              <img src={arrowRight} alt="arrowRight" className="arrow-image" />
            </button>
          </div>
        </div>
        <div className="assign-work-detail-div">
          <span className="assign-work-name-span">High Knee Tap</span>
          <img src={kneeTop} alt="kneeTop" className="kneeTop-image" />
          <span className="kneeTop-detail">
            Improve general balance, mobility, Flexibility and stability with a
            dowel...
          </span>
        </div>
      </Card>
    </div>
  );
};

export default AssignWork;
