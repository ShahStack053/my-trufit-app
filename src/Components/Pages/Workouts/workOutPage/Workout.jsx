import React from "react";
import "./Workout.css";
import CoachCard from "../../Dashboard/Cards/coachCard/CoachCard";
import WorkOutCard from "../workout-cards/WorkOutCard";
import { useNavigate } from "react-router-dom";

const Workout = () => {
  const navigate = useNavigate();
  const createWorkOuthandler = () => {
    const label = "Create";
    navigate("/main/createworkout", { state: { label } });
  };
  return (
    <div className="workout-container">
      <div className="workout-left-div">
        <div className="workout-title-div">
          <span className="workout-title-span">Workouts</span>
          <button className="create-workout-btn" onClick={createWorkOuthandler}>
            Create Workout
          </button>
        </div>
        <div className="workout-cards-div">
          <WorkOutCard />
          <WorkOutCard />
          <WorkOutCard />
          <WorkOutCard />
          <WorkOutCard />
        </div>
      </div>
      <div className="workout-right-div">
        <div className="teamDas-activity-div">
          <span className="teamDas-activity-span">Activity</span>
        </div>
        <div className="coach-card-div">
          <CoachCard />
          <CoachCard />
        </div>{" "}
      </div>
    </div>
  );
};

export default Workout;
