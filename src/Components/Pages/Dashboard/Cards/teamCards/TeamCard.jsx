import { Card } from "antd";
import React from "react";
import "./TeamCard.css";

const TeamCard = ({ exerciseImage, color }) => {
  return (
    <div>
      <Card className="team-card-container" style={{ background: color }}>
        <img src={exerciseImage} alt="exercise" className="team-exercise-img" />
        <span className="team-exercise-span">Team Flexibility</span>
      </Card>
    </div>
  );
};

export default TeamCard;
