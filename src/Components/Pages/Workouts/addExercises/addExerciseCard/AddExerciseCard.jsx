import React from "react";
import "./AddExerciseCard.css";
import { Card, Checkbox } from "antd";
import kneeTop from "../../../../../Assets/Images/Dashboard/high-Knee-Top.png";

const AddExerciseCard = () => {
  return (
    // <Card className="add-exercise-card-container">
    <Card className="add-exercise-card-container">
      <div className="add-exercise-card-title-div">
        <span className="add-exercise-card-name-span">High Knee Tap</span>
        <Checkbox />
      </div>
      <img
        src={kneeTop}
        alt="kneeTop"
        className="add-exercise-card-workout-image"
      />
      <span className="add-exercise-card-workout-detail">
        Improve general balance, mobility, Flexibility and stability with a
        dowel...
      </span>
    </Card>
  );
};

export default AddExerciseCard;
