import confirm from "antd/es/modal/confirm";
import { ExclamationCircleFilled } from "@ant-design/icons";
import Arm from ".././../Assets/Images/Sider/Arm.png";
import Dumble from ".././../Assets/Images/Sider/Dumble.png";
import Home from ".././../Assets/Images/Sider/home.png";
import logout from ".././../Assets/Images/Sider/logout.png";
import Group from ".././../Assets/Images/Sider/groupIcon.png";
import File from ".././../Assets/Images/Sider/file.png";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const { Header, Sider, Content } = Layout;
const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const navigateRouteHandler = (e) => {
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
            width: 256,
          }}
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={(e) => navigateRouteHandler(e)}
            items={[
              {
                key: "1",
                icon: (
                  <img src={Home} alt="Arm" style={{ height: 15, width: 20 }} />
                ),
                label: "Home",
              },
              {
                key: "2",
                icon: (
                  <img
                    src={Group}
                    alt="Arm"
                    style={{ height: 15, width: 20 }}
                  />
                ),
                label: "Groups",
              },
              {
                key: "3",
                icon: (
                  <img src={Arm} alt="Arm" style={{ height: 15, width: 20 }} />
                ),
                label: "Workouts",
              },
              {
                key: "4",
                icon: (
                  <img
                    src={Dumble}
                    alt="Arm"
                    style={{ height: 15, width: 20 }}
                  />
                ),
                label: "Exercises",
              },
              {
                key: "5",
                icon: (
                  <img src={File} alt="Arm" style={{ height: 15, width: 20 }} />
                ),
                label: "Playlists",
              },
              // {
              //   key: "6",
              //   icon: (
              //     <img
              //       src={logout}
              //       alt="Arm"
              //       style={{ height: 15, width: 15 }}
              //     />
              //   ),
              //   label: "Logout",
              // },
            ]}
          />
          <div className="logout-div">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                border: "none",
                backgroundColor: "none",
                background: "none",
              }}
            >
              <img
                src={logout}
                alt="logout"
                style={{ height: 15, width: 15, marginRight: 20 }}
              />{" "}
              Logout
            </button>
          </div>
        </Sider>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
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
