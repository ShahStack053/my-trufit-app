import {
  FileTextOutlined,
  MessageOutlined,
  UploadOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import confirm from "antd/es/modal/confirm";
import { ExclamationCircleFilled } from "@ant-design/icons";
import Arm from ".././../Assets/Images/Sider/Arm.png";
import Dumble from ".././../Assets/Images/Sider/Dumble.png";
import Thumb from ".././../Assets/Images/Sider/thumb.png";
import logout from ".././../Assets/Images/Sider/logout.png";
import { Button, Layout, Menu, theme } from "antd";
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
      navigate("/main/team");
    } else if (e.key === "3") {
      navigate("/main/workout");
    } else if (e.key === "4") {
      navigate("/main/exercise");
    } else if (e.key === "5") {
      let label = "User";
      navigate("/main/chat", { state: { label } });
    } else if (e.key === "6") {
      navigate("/main/favourite");
    } else if (e.key === "7") {
      navigate("/main/settings");
    } else if (e.key === "8") {
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
          background: colorBgContainer,
        }}
      >
        {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          /> */}
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
          <div className="logo" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={(e) => navigateRouteHandler(e)}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <TeamOutlined />,
                label: "Teams",
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
                label: "Exercise",
              },
              {
                key: "5",
                icon: <MessageOutlined />,
                label: "Chats",
              },
              {
                key: "6",
                icon: (
                  <img
                    src={Thumb}
                    alt="Arm"
                    style={{ height: 15, width: 15 }}
                  />
                ),
                label: "Favourite",
              },
              {
                key: "7",
                icon: <FileTextOutlined />,
                label: "Record",
              },
              {
                key: "8",
                icon: (
                  <img
                    src={logout}
                    alt="Arm"
                    style={{ height: 15, width: 15 }}
                  />
                ),
                label: "Logout",
              },
            ]}
          />
          {/* <div className="logout-div">
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
          </div> */}
        </Sider>
        <Content
          style={{
            margin: "24px 16px",
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
