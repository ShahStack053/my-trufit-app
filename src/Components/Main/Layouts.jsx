import React from "react";
import "./Layouts.css";
import { Layout, Menu } from "antd";
import confirm from "antd/es/modal/confirm";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import home from "../../Assets/Images/Sider/home.png";
import chat from "../../Assets/Images/Sider/Chat.png";
import clipBoard from "../../Assets/Images/Sider/Document.png";
import dumble from "../../Assets/Images/Sider/Dumble.png";
import logout from "../../Assets/Images/Sider/logout.png";
import Team from "../../Assets/Images/Sider/Team.png";
import troufy from "../../Assets/Images/Sider/troufy.png";
import arm from "../../Assets/Images/Sider/Arm.png";
import thumb from "../../Assets/Images/Sider/thumb.png";

const { Header, Sider } = Layout;
const headerStyle = {
  height: 80,
  paddingLeft: 40,
  background: "white",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
};
const siderStyle = {
  backgroundColor: "white",
  position: "fixed",
  top: 80,
  left: 0,
  bottom: 0,
  zIndex: 1,
  width: 120,
  color: "#fff",
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const Layouts = () => {
  const navigate = useNavigate();

  const navigateRouteHandler = (e) => {
    if (e.key === "1") {
      navigate("/main/dashboard");
    } else if (e.key === "2") {
      let label = "Order";
      navigate("/main/orders", { state: { label } });
    } else if (e.key === "3") {
      let label = "RFQs";
      navigate("/main/requestForQuotations", { state: { label } });
    } else if (e.key === "4") {
      navigate("/main/myProduct");
    } else if (e.key === "5") {
      let label = "User";
      navigate("/main/manageUser", { state: { label } });
    } else if (e.key === "6") {
      navigate("/main/companyProfile");
    } else if (e.key === "7") {
      navigate("/main/settings");
    }
  };

  const mylogout = () => {
    confirm({
      title: "Do you want to Logout?",
      icon: <ExclamationCircleFilled style={{ color: " #faad14" }} />,
      content: "You will return to signIn page",
      okText: "Yes",
      cancelText: "Cancel",
      okCancel: true,
      okButtonProps: { style: { float: "right", marginRight: 10 } },
      cancelButtonProps: { style: { float: "right" } },
      onOk() {
        localStorage.clear();
        navigate("/");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const items = [
    getItem(
      <button className="sider-home-btn">
        <img src={home} alt="home" style={{ height: 24, width: 22.88 }} />
      </button>,
      "1"
    ),
    getItem(
      <button className="sider-btn">
        <img src={Team} alt="Team" style={{ height: 29, width: 29 }} />
      </button>,
      "2"
    ),
    getItem(
      <button className="sider-btn">
        <img src={arm} alt="arm" style={{ height: 20.27, width: 24 }} />
      </button>,
      "3"
    ),
    getItem(
      <button className="sider-btn">
        <img src={dumble} alt="dumble" style={{ height: 23, width: 23 }} />
      </button>,
      "4"
    ),

    getItem(
      <button className="sider-btn">
        <img src={chat} alt="chat" style={{ height: 21.19, width: 21.19 }} />
      </button>,
      "5"
    ),
    getItem(
      <button className="sider-btn">
        <img src={thumb} alt="thumb" style={{ height: 20.74, width: 23.12 }} />
      </button>,
      "6"
    ),
    getItem(
      <button className="sider-btn">
        <img
          src={clipBoard}
          alt="clipBoard"
          style={{ height: 19.92, width: 18.74 }}
        />
      </button>,
      "7"
    ),
    getItem(
      <button className="sider-btn">
        <img src={troufy} alt="Settings" style={{ height: 20, width: 18.99 }} />
      </button>,
      "8"
    ),
  ];
  return (
    <Layout>
      <Header style={headerStyle}>
        <Navbar />
      </Header>
      <Layout>
        <Sider style={siderStyle}>
          <div className="sideBar-div">
            <Menu
              style={{
                height: 430,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
              onClick={(e) => navigateRouteHandler(e)}
            />
            <div className="logout-div">
              <button className="logout-btn" onClick={mylogout}>
                <img src={logout} alt="Logout" className="logout-img" />
              </button>
            </div>
          </div>
        </Sider>
        {/* <Content style={contentStyle}>Content</Content> */}
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default Layouts;
