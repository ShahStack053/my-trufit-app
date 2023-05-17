import React, { useEffect, useState } from "react";
import "./CreateWorkOut.css";
import { useLocation, useNavigate } from "react-router-dom";
import crosBtn from "../../../../Assets/Images/workout/crossBtn.png";
import CoachCard from "../../Dashboard/Cards/coachCard/CoachCard";
import { Checkbox, Input, Modal } from "antd";
import confirm from "antd/es/modal/confirm";
import { ExclamationCircleFilled } from "@ant-design/icons";
import ExcerciseCard from "../workoutAssets/Cards/exercisesCard/ExcerciseCard";
import axios from "axios";
import AddExerciseCard from "../addExercises/addExerciseCard/AddExerciseCard";

const CreateWorkOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let { id, label, description, title } = location.state;
  const [exerciseList, setExerciseList] = useState([]);
  const [modalList, setModalList] = useState([]);
  const [createData, setCreateData] = useState({
    workout_id: id,
    workout_title: "",
    long_desc: "",
    exercise_id: "",
    workout_status: "is_noramal",
    is_feed: false,
  });

  const handleRemoveCard = (index) => {
    const updatedList = [...exerciseList];
    updatedList.splice(index, 1);
    setExerciseList(updatedList);
  };
  const addExerciseToList = (exercise) => {
    // setExerciseList((prevExerciseList) => [...prevExerciseList, exercise]);
    const exerciseExists = exerciseList.some(
      (e) => e.exercise_id === exercise.exercise_id
    );

    if (exerciseExists) {
      setExerciseList((prevExerciseList) =>
        prevExerciseList.filter((e) => e.exercise_id !== exercise.exercise_id)
      );
    } else {
      setExerciseList((prevExerciseList) => [...prevExerciseList, exercise]);
    }
  };
  const saveWorkOutHandler = () => {
    if (label === "Edit") {
      const formData = new FormData();
      formData.append("workout_title", createData.workout_title);
      formData.append("long_desc", createData.long_desc);
      // formData.append("exercise_id", createData.exercise_id);
      formData.append("workout_id", createData.workout_id);
      const exerciseIds = exerciseList
        .map((exercise) => exercise.exercise_id)
        .join(",");
      formData.append("exercise_id", exerciseIds);

      confirm({
        title: "Do you want to Save changes to Workout?",
        icon: <ExclamationCircleFilled style={{ color: " #faad14" }} />,
        okText: "Yes",
        cancelText: "Cancel",
        okCancel: true,
        okButtonProps: { style: { float: "right", marginRight: 10 } },
        cancelButtonProps: { style: { float: "right" } },
        onOk() {
          axios({
            method: "Post",
            url: `http://52.205.1.61/app/api/version_1_3/edit_workout`,
            headers: {
              Token: localStorage.AuthToken,
              UserId: localStorage.userId,
            },
            data: formData,
          }).then(
            (res) => {
              setExerciseList(res.data.data);
              Modal.success({
                content: "Your workout updated successfully",
              });
              navigate("/main/workout");
            },
            (err) => {
              Modal.warning({
                content: err,
              });
            }
          );
        },
        onCancel() {
          Modal.warning({
            content: "Your workout not updated",
          });
        },
      });
    }
    if (label === "Create") {
      const formData = new FormData();
      formData.append("workout_title", createData.workout_title);
      formData.append("long_desc", createData.long_desc);
      formData.append("workout_status", createData.workout_status);
      if (createData.is_feed === true) {
        formData.append("is_feed", "add_feed");
      }
      const exerciseIds = exerciseList
        .map((exercise) => exercise.exercise_id)
        .join(",");
      formData.append("exercise_id", exerciseIds);

      confirm({
        title: "Do you want to Save Workout?",
        icon: <ExclamationCircleFilled style={{ color: " #faad14" }} />,
        okText: "Yes",
        cancelText: "Cancel",
        okCancel: true,
        okButtonProps: { style: { float: "right", marginRight: 10 } },
        cancelButtonProps: { style: { float: "right" } },
        onOk() {
          axios({
            method: "Post",
            url: `http://52.205.1.61/app/api/version_1_3/create_workout`,
            headers: {
              Token: localStorage.AuthToken,
              UserId: localStorage.userId,
            },
            data: formData,
          }).then(
            (res) => {
              setExerciseList(res.data.data);
              Modal.success({
                content: "Your workout saved successfully",
              });
              navigate("/main/workout");
            },
            (err) => {
              Modal.warning({
                content: err,
              });
            }
          );
        },
        onCancel() {
          Modal.warning({
            content: "Your workout not save",
          });
        },
      });
    }
  };

  useEffect(() => {
    if (label === "Edit") {
      const formData = new FormData();
      formData.append("workout_id", id);
      axios({
        method: "Post",
        url: `http://52.205.1.61/app/api/version_1_3/exercise_list`,
        headers: {
          Token: localStorage.AuthToken,
          UserId: localStorage.userId,
        },
        data: formData,
      }).then(
        (res) => {
          setExerciseList(res.data.data);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, []);

  const [open, setOpen] = useState(false);
  const showModal = () => {
    axios({
      method: "Post",
      url: `http://52.205.1.61/app/api/version_1_3/exercise_list`,
      headers: {
        Token: localStorage.AuthToken,
        UserId: localStorage.userId,
      },
    }).then(
      (res) => {
        setModalList(res.data.data);
        console.log("modal dataaa======>", res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <div className="create-workout-container">
      <div className="create-workout-left">
        <div className="create-workout-title-div">
          <span className="create-workout-title-span">Create a Workout</span>
        </div>
        <div className="create-workout-input-div">
          <input
            type="text"
            className="title-input"
            placeholder="Workout Name"
            defaultValue={label === "Create" ? null : title}
            onChange={(e) =>
              setCreateData({
                ...createData,
                workout_title: e.target.value,
              })
            }
          />
          <textarea
            name=""
            id=""
            className="desc-input"
            placeholder="Enter Description"
            defaultValue={label === "Create" ? null : description}
            onChange={(e) =>
              setCreateData({
                ...createData,
                long_desc: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="create-workout-exercises-btn-div">
          <span className="exercises-title-span">Exercises</span>
          <button className="add-exercises-btn" onClick={showModal}>
            Add Exercises
          </button>
          <Modal
            style={{ maxWidth: 350 }}
            title="Exercises"
            titleProps={{
              style: {
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 18,
                color: "#0A364B",
              },
            }}
            closeIcon={
              <img
                src={crosBtn}
                alt="cross"
                style={{ height: 25, width: 25, background: "none" }}
              />
            }
            open={open}
            onOk={handleOk}
            okText="Add"
            cancelButtonProps={{
              style: {
                display: "none",
              },
            }}
            onCancel={handleCancel}
            okButtonProps={{
              style: {
                width: "100%",
                height: "50px",
                background: "#F79A28",
                boxShadow: "1px 1px 2px rgba(71, 42, 6, 0.1)",
                borderRadius: "10px",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: 18,
                marginTop: 20,
                display: "none",
              },
            }}
          >
            <Input
              style={{
                marginTop: 15,
                marginBottom: 30,
                borderRadius: 10,
                width: "100%",
                height: 45,
                border: "none",
                background: "#FFFFFF",
                boxShadow: " 4px 4px 17px rgba(38, 51, 77, 0.15)",
              }}
              placeholder="Type to Search Here"
            />
            <div className="add-exercise-modal-card-div">
              {modalList?.map((x, i) => {
                let ImageUrl = x.exercise_images.map((x, i) => {
                  return x.exercise_image;
                });
                return (
                  <AddExerciseCard
                    key={i}
                    exercise_name={x.exercise_name}
                    sort_description={x.sort_description}
                    exercise_image={ImageUrl}
                    imageId={x.exercise_images[0].exercise_image_id}
                    exercise_id={x.exercise_id}
                    addExerciseToList={addExerciseToList}
                    exerciseList={exerciseList}
                  />
                );
              })}
            </div>
          </Modal>
        </div>
        <div className="create-workout-exercise-container-div">
          {label === "Edit" ? (
            <>
              {exerciseList && exerciseList.length > 0 ? (
                <div className="create-workout-exercises-div">
                  {exerciseList?.map((x, i) => {
                    return (
                      <ExcerciseCard
                        key={i}
                        title={x.exercise_name}
                        description={x.sort_description}
                        onRemoveCard={handleRemoveCard}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="no-exercises-div">
                  <span className="no-exercises-span">
                    No Exercises Added Yet
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              {exerciseList && exerciseList.length > 0 ? (
                <div className="create-workout-exercises-div">
                  {exerciseList.map((x, i) => {
                    return (
                      <ExcerciseCard
                        key={i}
                        title={x.exercise_name}
                        description={x.sort_description}
                        onRemoveCard={handleRemoveCard}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="no-exercises-div">
                  <span className="no-exercises-span">
                    No Exercises Added Yet
                  </span>
                </div>
              )}
            </>
          )}
        </div>
        <div className="save-workout-btn-div">
          <button className="save-workout-btn" onClick={saveWorkOutHandler}>
            Save Workout
          </button>
          {label === "Create" ? (
            <div class="checkbox-line">
              <label for="feed-checkbox">Add to Feed</label>
              <Checkbox
                onChange={() =>
                  setCreateData({
                    ...createData,
                    is_feed: true,
                  })
                }
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="create-workout-right">
        <div className="create-workout-activity-div">
          <span className="create-workout-activity-span">Activity</span>
        </div>
        <div className="create-workout-coach-card-div">
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
        </div>
      </div>
    </div>
  );
};

export default CreateWorkOut;
