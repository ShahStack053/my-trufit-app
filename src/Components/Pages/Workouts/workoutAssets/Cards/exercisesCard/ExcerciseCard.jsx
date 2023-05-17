import React from "react";
import "./ExcerciseCard.css";
import { Card } from "antd";
import crossBtn from "../../../../../../Assets/Images/workout/crossBtn.png";

const ExcerciseCard = ({ id, title, description, onRemoveCard }) => {
  const handleRemoveClick = () => {
    onRemoveCard(id);
  };
  return (
    <Card className="excercise-card-container-div">
      <div className="exercises-title-div">
        <span className="exercises-cardtitle-span ">{title}</span>
        <button className="exercises-cancel-btn" onClick={handleRemoveClick}>
          <img
            src={crossBtn}
            alt="cross-circle"
            style={{ width: 25, height: 25 }}
          />
        </button>
      </div>
      <div className="exercises-detail-div">
        <p className="exercises-detail-paragraph">{description}</p>
      </div>
    </Card>
  );
};

export default ExcerciseCard;
