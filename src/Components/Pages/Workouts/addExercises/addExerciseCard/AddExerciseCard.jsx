import React from "react";
import "./AddExerciseCard.css";
import { Card, Checkbox } from "antd";
// import kneeTop from "../../../../../Assets/Images/Dashboard/high-Knee-Top.png";

const AddExerciseCard = ({
  exercise_id,
  imageId,
  exercise_image,
  sort_description,
  exercise_name,
  addExerciseToList,
  exerciseList,
}) => {
  return (
    // <Card className="add-exercise-card-container">
    <Card className="add-exercise-card-container">
      <div className="add-exercise-card-title-div">
        <span className="add-exercise-card-name-span">{exercise_name}</span>
        <Checkbox
          checked={exerciseList.some((e) => e.exercise_id === exercise_id)}
          onChange={() =>
            addExerciseToList({
              exercise_id,
              exercise_image,
              sort_description,
              exercise_name,
            })
          }
        />
      </div>
      <img
        src={exercise_image}
        alt="exercise_img"
        className="add-exercise-card-workout-image"
      />
      <span className="add-exercise-card-workout-detail">
        {sort_description}
      </span>
    </Card>
  );
};

export default AddExerciseCard;
