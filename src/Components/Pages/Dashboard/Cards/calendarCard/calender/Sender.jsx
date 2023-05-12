import React from "react";
import { Card, Select } from "antd";
import { Calendar, theme } from "antd";
import "./Sender.css";
const { Option } = Select;

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const Sender = () => {
  const { token } = theme.useToken();
  const headerStyle = {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "16px",
    color: "#0B0B0B",
  };
  //   const dropDownStyle = {
  //     fontFamily: "Manrope",
  //     fontStyle: "normal",
  //     fontWeight: 800,
  //     fontSize: "20px",
  //     color: "#0B0B0B",
  //   };

  const yearOptions = [];
  for (let year = 1979; year <= 2050; year++) {
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
                    // style={{
                    //   marginLeft: "10px",
                    //   width: "103px",
                    //   height: "40px",
                    //   background: "#0081C6",
                    //   borderRadius: "24px",
                    //   flex: "none",
                    //   order: 0,
                    //   flexGrow: 0,
                    // }}
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
