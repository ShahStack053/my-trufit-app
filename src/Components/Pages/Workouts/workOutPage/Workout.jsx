import React, { useEffect, useState } from "react";
import "./Workout.css";
import CoachCard from "../../Dashboard/Cards/coachCard/CoachCard";
import WorkOutCard from "../workout-cards/WorkOutCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Workout = () => {
  const [workout, setWorkout] = useState([]);
  const navigate = useNavigate();
  const createWorkOuthandler = () => {
    const label = "Create";
    navigate("/main/createworkout", { state: { label } });
  };

  const deleteWorkout = (id) => {
    setWorkout((prevWorkout) => prevWorkout.filter((x) => x.workout_id !== id));
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    const formData = new FormData();
    formData.append("login_user_id", userId);

    axios({
      method: "Post",
      url: `http://52.205.1.61/app/api/version_1_3/find_workout_list`,
      headers: {
        Token: localStorage.AuthToken,
        UserId: localStorage.userId,
      },
      data: formData,
    }).then(
      (res) => {
        // console.log("Workout List=============>>>", res.data.data);
        setWorkout(res.data.data);
      },
      (err) => {
        console.log("err===>", err);
      }
    );
  }, []);

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
          {workout?.map((x, i) => {
            return (
              <WorkOutCard
                key={i}
                title={x.workout_title}
                description={x.long_desc}
                id={x.workout_id}
                setWorkout={setWorkout}
                onDelete={deleteWorkout}
              />
            );
          })}
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
