import styles from "./login.module.scss";
import img1 from "../../img/Done.svg";

import classNames from "classnames/bind";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/registration");
  };
  const cx = classNames.bind(styles);
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/dashboard");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={cx("screen")}>
      <div className={cx("heard")}>
        <div className={cx("logo")}>
          <img src={img1} alt="" />
        </div>
        <div className={cx("title_text")}>
          <p className={cx("title_heard_text")}>Welcome back to</p>
          <p className={cx("title_heard")}>OUR REMINDER</p>
        </div>
        <div className={cx("text")}>
          <div className={cx("form-register")}>
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                className={cx("input_type")}
                name="username"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                className={cx("input_type")}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter password"
                  type="password"
                />
              </Form.Item>

              <Form.Item>
                <div className={cx("btn_")}>
                  <button
                    className={cx("btn")}
                    type="primary"
                    htmlType="submit"
                  >
                    <span className={cx("text-btn")}>Sign In</span>
                  </button>
                </div>
              </Form.Item>
            </Form>
            <div className={cx("already")}>
              <span className={cx("already_text")}>
                Already have an account ?
              </span>
              <span className={cx("already_text-link")}>
                <a className={cx("already_link")} onClick={HandleClick}>
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
