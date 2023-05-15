import React, { useState } from "react";
import "./CreateWorkOut.css";
import { useLocation, useNavigate } from "react-router-dom";
import CoachCard from "../../Dashboard/Cards/coachCard/CoachCard";
import { Form, Input, Modal } from "antd";
import confirm from "antd/es/modal/confirm";
import { ExclamationCircleFilled } from "@ant-design/icons";
import ExcerciseCard from "../workoutAssets/Cards/exercisesCard/ExcerciseCard";

const CreateWorkOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const label = location.state.label;
  console.log("label", label);
  const validateMessages = {
    required: `${label} is required!`,
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const addExerciseHandler = () => {
    setShowModal(true);
    navigate("/main/modal", { state: { showModal } });
    console.log("add exercise is clicked");
  };
  const saveWorkOutHandler = () => {
    confirm({
      title: "Do you want to Save Workout?",
      icon: <ExclamationCircleFilled style={{ color: " #faad14" }} />,
      okText: "Yes",
      cancelText: "Cancel",
      okCancel: true,
      okButtonProps: { style: { float: "right", marginRight: 10 } },
      cancelButtonProps: { style: { float: "right" } },
      onOk() {
        Modal.success({
          content: "Your workout save successfully",
        });
      },
      onCancel() {
        Modal.warning({
          content: "Your workout not save",
        });
      },
    });
  };
  return (
    <div className="create-workout-container">
      <div className="create-workout-left">
        <div className="create-workout-title-div">
          <span className="create-workout-title-span">Create a Workout</span>
        </div>
        <div className="create-workout-input-div">
          <div className="create-workout-input-div">
            <Form
              layout="vertical"
              size="medium"
              name="nest-messages"
              onFinish={onFinish}
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
              validateMessages={validateMessages}
            >
              <div style={{ flex: 1, marginRight: 10 }}>
                <Form.Item
                  name={["workout", "name"]}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Workout Name" />
                </Form.Item>
              </div>

              <div style={{ flex: 1, marginLeft: 10 }}>
                <Form.Item name={["workout", "description"]}>
                  <Input.TextArea placeholder="Enter Description" />
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div className="create-workout-exercises-btn-div">
          <span className="exercises-title-span">Exercises</span>
          <button className="add-exercises-btn" onClick={addExerciseHandler}>
            Add Exercises
          </button>
        </div>
        <div className="create-workout-exercises-div">
          <ExcerciseCard />
          <ExcerciseCard />
        </div>
        <div className="save-workout-btn-div">
          <button className="save-workout-btn" onClick={saveWorkOutHandler}>
            Save Workout
          </button>
          <div class="checkbox-line">
            <label for="feed-checkbox">Add to Feed</label>
            <input type="checkbox" id="feed-checkbox" />
          </div>
        </div>
      </div>
      <div className="create-workout-right">
        <div className="teamDas-activity-div">
          <span className="teamDas-activity-span">Activity</span>
        </div>
        <div className="coach-card-div">
          <CoachCard />
          <CoachCard />
        </div>
      </div>
    </div>
  );
};

export default CreateWorkOut;
