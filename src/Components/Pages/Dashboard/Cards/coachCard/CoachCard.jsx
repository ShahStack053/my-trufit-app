import React from "react";
import "./CoachCard.css";
import { Card } from "antd";

const CoachCard = () => {
  return (
    <div>
      <Card className="coach-card-container">
        <div className="coach-upper-div">upper</div>
        <div className="coach-lower-div">lower</div>
      </Card>
    </div>
  );
};

export default CoachCard;
