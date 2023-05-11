import React from "react";
import "./Calender.css";
import { Card } from "antd";
import { Calendar, theme } from "antd";
const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const Calender = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 425,
    height: 345,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div>
      <Card className="card-container">
        <div style={wrapperStyle}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </Card>
    </div>
  );
};

export default Calender;
