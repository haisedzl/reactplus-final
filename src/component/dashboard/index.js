import classNames from "classnames/bind";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";

import styles from "./dashboard.module.scss";
import img3 from "../../img/Ellipse.svg";
import img4 from "../../img/Ellipse1.svg";
import img5 from "../../img/Ellipse2.svg";
import { usersService } from "../../service";

function Dashboard() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getDataTasks();
  }, []);

  const getDataTasks = async () => {
    const data = await usersService.getData();
    setTodo(data);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/registration");
  };
  const cx = classNames.bind(styles);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className={cx("container")}>
      <div className={cx("avatar")}>
        <div className={cx("avatar-all")}>
          <img src={img4} alt="" className={cx("avatar-border")} />
          <img src={img3} alt="" className={cx("user-avatar")} />
          <div className={cx("info")}>
            <div className={cx("name")}>Monica Gamage</div>
            <div className={cx("desc")}>@monicagamage</div>
          </div>
          <div>
            <button className={cx("btn-log-out")} onClick={handleClick}>
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className={cx("lock")}>
        <div>
          <img src={img5} alt="" className={cx("lock-border")} />
        </div>
        <div className={cx("lock-info")}>Good Affternoon</div>
      </div>

      <div className={cx("list-all")}>
        <h2 className={cx("title")}>Tasks List</h2>
        <div className={cx("list-item")}>
          <div className={cx("title-text")}>Tasks List</div>
          <div className={cx("checkbox")}>
            <ul className={cx("checkbox-item")}>
              {todo.map((data) => (
                <li key={data.id} className={cx("item")}>
                  <Checkbox
                    checked={data.completed}
                    onChange={onChange}
                    className={cx("checkbox-item")}
                  >
                    <div>
                      <span>{data.name}</span>
                      <span className={cx("lock-time")}>
                        {moment(data.createdAt).format("hh A")}
                      </span>
                    </div>
                  </Checkbox>
                </li>
              ))}
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
