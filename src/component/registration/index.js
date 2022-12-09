import styles from "./registration.module.scss";
import img1 from "../../img/Done.svg";
import { usersService } from "../../service";

import classNames from "classnames/bind";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("name is a required field"),
    password: yup.string().required("password is a required field"),
    email: yup.string().required("Email is a required field"),
    confirm: yup.string().required("password is a required field"),
  })
  .required();

function Registration() {
  const {} = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const HanlerClick = () => {
    navigate("/login");
  };
  const cx = classNames.bind(styles);
  const onFinish = async (values) => {
    await usersService.getPost(values);
    navigate("/login");
    console.log("Success:", values);
  };
  return (
    <div className={cx("screen")}>
      <div className={cx("heard")}>
        <div className={cx("logo")}>
          <img src={img1} alt="" />
        </div>
        <div className={cx("title_text")}>
          <p className={cx("title_heard")}>Get’s things done with TODO</p>
          <p className={cx("title_heard_text")}>
            Let’s help you meet up your tasks
          </p>
        </div>
        <div className={cx("text")}>
          <div className={cx("form-register")}>
            <Form
              onFinish={onFinish}
            >
              <Form.Item
                className={cx("input_type")}
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your full name" />
              </Form.Item>
              <Form.Item
                className={cx("input_type")}
                name="email"
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
              <Form.Item
                className={cx("input_type")}
                name="confirm"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Confirm Password"
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
                    <span className={cx("text-btn")}>Register</span>
                  </button>
                </div>
              </Form.Item>
            </Form>
            <div className={cx("already")}>
              <span className={cx("already_text")}>
                Already have an account ?
              </span>
              <span className={cx("already_text-link")}>
                <a className={cx("already_link")} onClick={HanlerClick}>
                  Sign In
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
