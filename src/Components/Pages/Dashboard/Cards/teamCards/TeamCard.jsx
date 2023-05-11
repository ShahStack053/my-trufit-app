import { Card } from "antd";
import React from "react";
import exercise from "../../../../../Assets/Images/Dashboard/exercise1.png";
import "./TeamCard.css";

const TeamCard = () => {
  return (
    <div>
      <Card className="team-card-container">
        <img src={exercise} alt="exercise" className="team-exercise-img" />
        <span className="team-exercise-span">Team Flexibility</span>
      </Card>
    </div>
  );
};

export default TeamCard;
