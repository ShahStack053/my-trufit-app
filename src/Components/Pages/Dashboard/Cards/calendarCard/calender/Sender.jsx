import React from "react";
import { Card, Select } from "antd";
import { Calendar, theme } from "antd";
import "./Sender.css";
const { Option } = Select;

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const Sender = () => {
  // const { token } = theme.useToken();
  const headerStyle = {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "14px",
    color: "#0B0B0B",
  };

  const yearOptions = [];
  for (let year = 1999; year <= 2050; year++) {
    yearOptions.push(
      <Option key={year} value={year}>
        {year}
      </Option>
    );
  }

  return (
    <div>
      <Card className="card-calender-container">
        <Calendar
          fullscreen={false}
          style={{ height: "260px" }}
          onPanelChange={onPanelChange}
          headerRender={({ value, type, onChange, onTypeChange }) => {
            const year = value.year();
            return (
              <div style={{ padding: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={headerStyle}>Calendar</div>
                  <Select
                    className="custom-select"
                    defaultValue={year}
                    onChange={(year) => onChange(value.year(year))}
                  >
                    {yearOptions}
                  </Select>
                </div>
              </div>
            );
          }}
        />
      </Card>
    </div>
  );
};

export default Sender;
