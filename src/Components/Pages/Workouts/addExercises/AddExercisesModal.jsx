import React from "react";
import "./AddExercisesModal.css";
import { Button, Input, Modal } from "antd";
import { useState } from "react";
import crosBtn from "../../../../Assets/Images/workout/crossBtn.png";
import AddExerciseCard from "./addExerciseCard/AddExerciseCard";
// import searchIcon from "../../../../Assets/Images/Header/searchIcon.png";

const AddExercisesModal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
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
    <>
      <div className="add-exercise-modal-container">
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
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
          } // Choose any icon you need.
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
            },
          }}
        >
          <Input
            style={{
              marginTop: 15,
              marginBottom: 15,
              borderRadius: 10,
              width: "100%",
              height: 45,
              border: "none",
              background: "#FFFFFF",
              boxShadow: " 4px 4px 17px rgba(38, 51, 77, 0.15)",
            }}
            placeholder="Type to Search Here"
          />
          <div className="add-exercide-modal-card-div">
            <AddExerciseCard />
            <AddExerciseCard />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddExercisesModal;
