import React from "react";
import "./Login.css";
import Man from "../../../Assets/Images/Login/Man.png";
import logo from "../../../Assets/Images/Login/logo.png";
import email from "../../../Assets/Images/Login/email.png";
import Lock from "../../../Assets/Images/Login/Lock.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Form, Input } from "antd";
const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios({
      method: "Post",
      url: "http://52.205.1.61/app/api/version_1_3/user_login",
      data: values,
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/main/dashboard");
          // const userData = {
          //   Token: res.data.data.Token,
          //   userId: res.data.data.user_id,
          // };

          // localStorage.setItem("userData", JSON.stringify(userData));
          localStorage.setItem("userId", res.data.data.user_id);
          localStorage.setItem("AuthToken", res.data.data.Token);
        }
      })
      .catch((err) => {
        console.log("error==>>", err);
      });
  };

  const validatePasswordLength = (rule, value, callback) => {
    if (value && value.length <= 6) {
      callback("Password must be greater than 6 characters.");
    } else {
      callback();
    }
  };
  return (
    <div className="login-container">
      <div className="login-img-div">
        <img className="gym-man-image" src={Man} alt="Man" />
      </div>
      <div className="login-input-div">
        <div className="input-logo-div">
          <div className="logo-login-div">
            <img className="logo-img" src={logo} alt="trufit-logo" />
          </div>
          <div className="paragraph-div">
            <span className="login-paragraph">
              Log in to your exising account of TruFit
            </span>
          </div>
          <div className="input-div">
            <Form
              name="trufit_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                style={{ marginBottom: 15 }}
                name="user_email_id"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please enter your email!",
                  },
                ]}
              >
                <Input
                  className="login-input"
                  prefix={
                    <img
                      src={email}
                      alt="email"
                      style={{ width: 20, height: 15, marginRight: 10 }}
                    />
                  }
                  placeholder="Enter Email"
                  // style={{
                  //   fontFamily: "Poppins",
                  //   fontWeight: 500,
                  //   fontSize: 14,
                  //   fontStyle: "normal",
                  //   color: "#526B78",
                  // }}
                />
              </Form.Item>
              <Form.Item
                style={{ marginBottom: 10 }}
                name="user_password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Password!",
                  },
                  {
                    validator: validatePasswordLength,
                  },
                ]}
              >
                <Input.Password
                  className="login-input"
                  prefix={
                    <img
                      src={Lock}
                      alt="lock"
                      style={{ width: 20, height: 15, marginRight: 9 }}
                    />
                  }
                  type="password"
                  placeholder="Enter Password"
                />
              </Form.Item>

              <div className="forget-btn-div">
                <Link className="login-forget-btn" to="/forgetpassword">
                  Forgot Password ?
                </Link>
              </div>

              <button htmlType="submit" className="login-button">
                Log in
              </button>
            </Form>
            <div className="model-btnDiv-login">
              <p className="login-model-paragraph">
                Don't have an account ? &nbsp;
                <Link
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontWeight: "500",
                    // textDecoration: "none",
                    color: "#F79A28",
                    cursor: "pointer",
                  }}
                  to="/signup"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
