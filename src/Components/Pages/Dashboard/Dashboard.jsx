import React from "react";
import "./Dashboard.css";
import Star from "../../../Assets/Images/Dashboard/Star.png";
import badge from "../../../Assets/Images/Dashboard/badge.png";
import CompletedCard from "./Cards/WorkOutCards/completedCard/CompletedCard";
import AchievementCard from "./Cards/WorkOutCards/achievementCard/AchievementCard";
import AssignWork from "./Cards/calendarCard/assignWork/AssignWork";
// import Calender from "./Cards/calendarCard/calender/Calender";
import Sender from "./Cards/calendarCard/calender/Sender";
import TeamCard from "./Cards/teamCards/TeamCard";
import CoachCard from "./Cards/coachCard/CoachCard";

const Dashboard = () => {
  return (
    <div className="dashboard-Container">
      <div className="dashboard-top-div">
        <span className="welcome-span">Welcome First Design</span>
      </div>
      <div className="dashboard-lower-container">
        <div className="lower-main">
          <div className="left-main-div">
            <div className="name-badge-div">
              <span className="name-span">Clayton Santos</span>
              <img
                src={badge}
                alt="badge"
                style={{
                  width: 22,
                  height: 22,
                  marginRight: 12,
                  marginLeft: 12,
                }}
              />
              <img src={Star} alt="Star" style={{ width: 24, height: 24 }} />
            </div>
            <div className="widget-card-div">
              <CompletedCard />
              <CompletedCard />
              <AchievementCard />
            </div>
            <div className="workOut-calender-div">
              <AssignWork />

              <Sender />
            </div>
            <div className="team-card-container-div">
              <div className="team-title-div">
                <span className="team-title">Teams</span>
              </div>
              <div className="team-card-div">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
              </div>
            </div>
          </div>
          <div className="right-main-div">
            <div className="activity-div">
              <span className="activity-span">Activity</span>
            </div>
            <CoachCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
