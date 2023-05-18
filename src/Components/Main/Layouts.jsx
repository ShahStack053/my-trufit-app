// import confirm from "antd/es/modal/confirm";
import "./Layouts.css";
// import { ExclamationCircleFilled } from "@ant-design/icons";
import Arm from ".././../Assets/Images/Sider/Arm.png";
import armGrey from ".././../Assets/Images/Sider/armGrey.png";
import Dumble from ".././../Assets/Images/Sider/Dumble.png";
import dumbleGrey from ".././../Assets/Images/Sider/dumbleGrey.png";
import Home from ".././../Assets/Images/Sider/home.png";
import homeGrey from ".././../Assets/Images/Sider/homeGrey.png";
import logout from ".././../Assets/Images/Sider/logout.png";
import Group from ".././../Assets/Images/Sider/groupIcon.png";
import groupGrey from ".././../Assets/Images/Sider/groupGrey.png";
import File from ".././../Assets/Images/Sider/file.png";
import fileGrey from ".././../Assets/Images/Sider/fileGrey.png";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const { Header, Sider, Content } = Layout;
const Layouts = () => {
  const [selectedKeys, setSelectedKeys] = useState(["1"]);

  const handleMenuClick = (e) => {
    setSelectedKeys([e.key]);
    if (e.key === "1") {
      navigate("/main/dashboard");
    } else if (e.key === "2") {
      navigate("/main/groups");
    } else if (e.key === "3") {
      navigate("/main/workout");
    } else if (e.key === "4") {
      navigate("/main/exercises");
    } else if (e.key === "5") {
      navigate("/main/playlist");
    } else if (e.key === "6") {
      mylogout();
    }
  };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const mylogout = () => {
    // confirm({
    //   title: "Do you want to Logout?",
    //   icon: <ExclamationCircleFilled style={{ color: " #faad14" }} />,
    //   content: "You will return to signIn page",
    //   okText: "Yes",
    //   cancelText: "Cancel",
    //   okCancel: true,
    //   okButtonProps: { style: { float: "right", marginRight: 10 } },
    //   cancelButtonProps: { style: { float: "right" } },
    //   onOk() {
    //     localStorage.clear();
    //     navigate("/");
    //   },
    //   onCancel() {
    //     navigate("/main/dashboard");
    //     setSelectedKeys(6);
    //   },
    // });
    localStorage.clear();
    navigate("/");
  };
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          padding: 0,
          height: 75,
          background: colorBgContainer,
          borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          // position: "fixed",
          // top: 0,
          // left: 0,
          // zIndex: 1,
          width: "100%",
        }}
      >
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Header>
      <Layout>
        <Sider
          className="sider-class"
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          style={{
            borderRight: "1px solid rgba(0, 0, 0, 0.2)",
            background: colorBgContainer,
            // width: 240,
          }}
        >
          <div>
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={selectedKeys}
              onClick={handleMenuClick}
            >
              <Menu.Item
                key="1"
                icon={
                  <img
                    src={selectedKeys[0] === "1" ? Home : homeGrey}
                    alt="home"
                    style={{ height: 20 }}
                  />
                }
              >
                Home
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={
                  <img
                    src={selectedKeys[0] === "2" ? Group : groupGrey}
                    alt="group"
                    style={{ height: 30, width: 30 }}
                  />
                }
              >
                Groups
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={
                  <img
                    src={selectedKeys[0] === "3" ? Arm : armGrey}
                    alt="Arm"
                    style={{ height: 30, width: 30 }}
                  />
                }
              >
                Workouts
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={
                  <img
                    src={selectedKeys[0] === "4" ? Dumble : dumbleGrey}
                    alt="dumble"
                    style={{ height: 23, width: 20 }}
                  />
                }
              >
                Exercises
              </Menu.Item>
              <Menu.Item
                key="5"
                icon={
                  <img
                    src={selectedKeys[0] === "5" ? File : fileGrey}
                    alt="playlist"
                    style={{ height: 19, width: 17 }}
                  />
                }
              >
                Playlists
              </Menu.Item>
            </Menu>
          </div>
          <div style={{ marginTop: "15px" }}>
            <Menu theme="light" mode="inline" onClick={handleMenuClick}>
              <Menu.Item
                key="6"
                icon={
                  <img
                    src={logout}
                    alt="logout"
                    style={{ height: 21, width: 19 }}
                  />
                }
              >
                Logout
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Content
          style={{
            padding: 24,
            minHeight: "86.4vh",
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
