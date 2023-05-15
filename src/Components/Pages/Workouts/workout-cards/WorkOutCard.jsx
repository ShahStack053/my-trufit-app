import React from "react";
import "./WorkOutCard.css";
import { Card, Dropdown, Modal, Space } from "antd";
import verticalDashed from "../../../../Assets/Images/workout/verticalDashed.png";
import Edit from "../../../../Assets/Images/workout/Edit.png";
import Delete from "../../../../Assets/Images/workout/Delete.png";
import confirm from "antd/es/modal/confirm";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const WorkOutCard = () => {
  const navigate = useNavigate();
  const editClickHandler = (label) => {
    navigate("/main/createworkout", { state: { label } });
  };
  const deleteClickHandler = () => {
    confirm({
      title: "Do you want to Delete this workout?",
      icon: <ExclamationCircleFilled style={{ color: " #faad14" }} />,
      content: "This workout is deleted permanently",
      okText: "Yes",
      cancelText: "Cancel",
      okCancel: true,
      okButtonProps: { style: { float: "right", marginRight: 10 } },
      cancelButtonProps: { style: { float: "right" } },
      onOk() {
        console.log("deleted");
        Modal.success({
          content: "Workout Deleted Successfully",
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const items = [
    {
      label: (
        <button
          style={{
            border: "none",
            background: "none",
            color: "#526B78",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => editClickHandler("Edit")}
        >
          <img src={Edit} alt="Edit" style={{ width: 14 }} />
          &nbsp;&nbsp; Edit
        </button>
      ),
      key: "1",
    },
    {
      label: (
        <button
          style={{
            border: "none",
            background: "none",
            color: "#526B78",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={deleteClickHandler}
        >
          <img src={Delete} alt="Delete" style={{ width: 20, height: 18 }} />
          &nbsp;&nbsp;Delete
        </button>
      ),
      key: "2",
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <Card className="workout-card-container">
      <div className="workout-card-title-div">
        <span className="workout-card-title-span">Shoulder Roll</span>
        <Dropdown menu={menuProps}>
          {/* <Space>{<DashOutlined />}</Space> */}
          <Space>
            <img
              src={verticalDashed}
              alt="vertical dashes"
              style={{ width: 12, height: 12 }}
            />
          </Space>
        </Dropdown>
      </div>
      <div className="workout-card-detail-div">
        <p className="workout-card-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga
          minus saepe aliquid similique tenetur,
        </p>
      </div>
      <div className="workout-card-assign-btn-div">
        <button className="assign-workout-btn">Assign Workout</button>
      </div>
    </Card>
  );
};

export default WorkOutCard;
