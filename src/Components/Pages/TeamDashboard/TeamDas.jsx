import React from "react";
import "./TeamDas.css";
import CompletedCard from "../Dashboard/Cards/WorkOutCards/completedCard/CompletedCard";
import AchievementCard from "../Dashboard/Cards/WorkOutCards/achievementCard/AchievementCard";
import AssignWork from "../Dashboard/Cards/calendarCard/assignWork/AssignWork";
// import Calender from "../Dashboard/Cards/calendarCard/calender/Calender";
import Sender from "../Dashboard/Cards/calendarCard/calender/Sender";
import TeamCard from "../Dashboard/Cards/teamCards/TeamCard";
import CoachCard from "../Dashboard/Cards/coachCard/CoachCard";
import arrowLeft from "../../../Assets/Images/Dashboard/arrowLeft.png";
import arrowRight from "../../../Assets/Images/Dashboard/arrowRight.png";
import exercise1 from "../../../Assets/Images/Dashboard/exercise1.png";
import exercise2 from "../../../Assets/Images/Dashboard/exercise2.png";
import exercise3 from "../../../Assets/Images/Dashboard/exercise3.png";
import exercise4 from "../../../Assets/Images/Dashboard/exercise4.png";

const TeamDas = () => {
  const scrollLeft = () => {
    const container = document.querySelector(".team-cards-container");
    container.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = document.querySelector(".team-cards-container");
    container.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };
  const exercises = [exercise1, exercise2, exercise3, exercise4];
  const colors = ["#CDEBFD", "#F9EBB3", "#D7FFD0", "#D9D9D9"];
  return (
    <div className="teamDas-dashboard-Container">
      <div className="teamDas-lower-main">
        <div className="teamDas-left-main-div">
          <div className="teamDas-name-badge-div">
            <span className="teamDas-welcome-span">Welcome</span>
            <span className="teamDas-name-span">Clayton Santos</span>
          </div>
          <div className="teamDas-widget-card-div">
            <CompletedCard />
            <CompletedCard />
            <AchievementCard />
          </div>
          <div className="teamDas-workOut-calender-div">
            <AssignWork />
            <Sender />
          </div>
          <div className="teamDas-team-card-container-div">
            <div className="teamDas-team-title-div">
              <span className="teamDas-team-title">Teams</span>
            </div>
            <div className="teamDas-team-card-div">
              <img
                src={arrowLeft}
                alt="arrowLeft"
                className="arrow-img-left"
                onClick={scrollLeft}
              />
              <div className="team-cards-container">
                <TeamCard exerciseImage={exercises[1]} color={colors[1]} />
                <TeamCard exerciseImage={exercises[2]} color={colors[2]} />
                <TeamCard exerciseImage={exercises[3]} color={colors[3]} />
                <TeamCard exerciseImage={exercises[0]} color={colors[0]} />
                <TeamCard exerciseImage={exercises[1]} color={colors[2]} />
                <TeamCard exerciseImage={exercises[2]} color={colors[3]} />
                <TeamCard exerciseImage={exercises[3]} color={colors[0]} />
                <TeamCard exerciseImage={exercises[0]} color={colors[2]} />
                <TeamCard exerciseImage={exercises[1]} color={colors[1]} />
                <TeamCard exerciseImage={exercises[2]} color={colors[2]} />
                <TeamCard exerciseImage={exercises[3]} color={colors[3]} />
                <TeamCard exerciseImage={exercises[0]} color={colors[0]} />
                <TeamCard exerciseImage={exercises[1]} color={colors[1]} />
                <TeamCard exerciseImage={exercises[2]} color={colors[2]} />
                <TeamCard exerciseImage={exercises[3]} color={colors[3]} />
                <TeamCard exerciseImage={exercises[0]} color={colors[0]} />
              </div>
              <img
                src={arrowRight}
                alt="arrowRight"
                className="arrow-img-right"
                onClick={scrollRight}
              />
            </div>
          </div>
        </div>
        <div className="teamDas-right-main-div">
          <div className="teamDas-activity-div">
            <span className="teamDas-activity-span">Activity</span>
          </div>
          <div className="coach-card-div">
            <CoachCard />
            <CoachCard />
            <CoachCard />
            <CoachCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDas;
