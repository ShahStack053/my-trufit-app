import React from "react";
import dotted from "../../../../../../Assets/Images/Dashboard/dotted.png";
import starBadge from "../../../../../../Assets/Images/Dashboard/starBadge.png";
import medal from "../../../../../../Assets/Images/Dashboard/medal.png";
import trophy from "../../../../../../Assets/Images/Dashboard/trophyCoin.png";
import { Card } from "antd";
import "./AchievementCard.css";

const AchievementCard = () => {
  return (
    <div>
      <Card className="widget-achievement-card">
        <div className="widget-achievement-card-up">
          <span className="widget-achievement-card-title">
            Recent Achivements
          </span>
          <span>
            <img
              src={dotted}
              alt="dot-img"
              className="widget-achievement-card-img"
            />
          </span>
        </div>
        <div className="widget-achievement-card-down">
          <div className="achievement-trophy-img-selected-div">
            <img src={medal} alt="medal" style={{ height: 35, width: 35 }} />
            <span className="trophy-title">Holiday Champion</span>
          </div>
          <div className="achievement-trophy-img-div">
            <img
              src={starBadge}
              alt="starBadge"
              style={{ height: 32, width: 32 }}
            />
            <span className="trophy-title">Holiday Commitment</span>
          </div>
          <div className="achievement-trophy-img-div">
            <img src={trophy} alt="trophy" style={{ height: 33, width: 33 }} />
            <span className="trophy-title">Med Ball Challenge</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AchievementCard;
