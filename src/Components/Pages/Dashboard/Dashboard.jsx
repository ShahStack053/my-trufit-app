import React, { useEffect } from "react";
import { Modal } from "antd";

const Dashboard = () => {
  useEffect(() => {
    Modal.success({
      title: "Success",
      content: "Welcome to Dashboard",
    });
  });
  return <div>Dashboard</div>;
};

export default Dashboard;
