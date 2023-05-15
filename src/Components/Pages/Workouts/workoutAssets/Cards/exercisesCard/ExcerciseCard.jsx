import React from "react";
import "./ExcerciseCard.css";
import { Card } from "antd";
import crossBtn from "../../../../../../Assets/Images/workout/crossBtn.png";

const ExcerciseCard = () => {
  return (
    <Card className="excercise-card-container-div">
      <div className="exercises-title-div">
        <span className="exercises-title-span">High Knee Top</span>
        <button className="exercises-cancel-btn">
          <img
            src={crossBtn}
            alt="cross-circle"
            style={{ width: 30, height: 30 }}
          />
        </button>
      </div>
      <div className="exercises-detail-div">
        <p className="exercises-detail-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae
          soluta fugit vel temporibus commodi at asperiores esse. Blanditiis
          officia, rem ex placeat aliquam fugiat perferendis,
        </p>
      </div>
    </Card>
  );
};

export default ExcerciseCard;
