import React from "react";
import "./TeamDas.css";
import CompletedCard from "../Dashboard/Cards/WorkOutCards/completedCard/CompletedCard";
import AchievementCard from "../Dashboard/Cards/WorkOutCards/achievementCard/AchievementCard";
import AssignWork from "../Dashboard/Cards/calendarCard/assignWork/AssignWork";
// import Calender from "../Dashboard/Cards/calendarCard/calender/Calender";
import Sender from "../Dashboard/Cards/calendarCard/calender/Sender";
import TeamCard from "../Dashboard/Cards/teamCards/TeamCard";
import CoachCard from "../Dashboard/Cards/coachCard/CoachCard";

const TeamDas = () => {
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
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
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
