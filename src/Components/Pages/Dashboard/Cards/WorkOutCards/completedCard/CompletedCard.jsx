import React from "react";
import "./CompletedCard.css";
import arrowUp from "../../../../../../Assets/Images/Dashboard/arrowUp.png";
import { Card } from "antd";

const CompletedCard = () => {
  return (
    <div>
      <Card className="widget-card">
        <div className="widget-workOut-Card-up">
          <span className="widget-workOut-Card-title">Workout Completed</span>
        </div>
        <div className="widget-workOut-Card-down">
          <p className="widget-workOut-Card-count">45</p>
          <p className="widget-workOut-Card-percentage">
            <span className="arrow-span">
              <img src={arrowUp} alt="arrowUp" className="arrow-up-img" />
            </span>
            12 %
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CompletedCard;
