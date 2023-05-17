import React from "react";
import "./CompletedCard.css";
import { Card } from "antd";

const CompletedCard = () => {
  return (
    <>
      <Card className="widget-card">
        <span className="widget-workOut-Card-title">Workout Completed</span>
        <span className="widget-workOut-Card-count">45</span>
        {/* <p className="widget-workOut-Card-percentage">
          <span className="arrow-span">
            <img src={arrowUp} alt="arrowUp" className="arrow-up-img" />
          </span>
          12 %
        </p> */}
      </Card>
    </>
  );
};

export default CompletedCard;
