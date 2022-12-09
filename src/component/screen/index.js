import styles from "./screen.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import img1 from "../../img/Done.svg";
import img2 from "../../img/Vector.svg";

function Screen() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/registration");
  };

  const cx = classNames.bind(styles);
  return (
    <div className={cx("screen")}>
      <div className={cx("heard")}>
        <div className={cx("logo")}>
          <img src={img1} alt="" />
        </div>
        <div className={cx("title_text")}>
          <p className={cx("title_wc")}>Welcome to</p>
          <p className={cx("title_heard")}>OUR REMINDER</p>
        </div>
        <div className={cx("text")}>
          <span className={cx("text_title")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
          </span>
        </div>
        <div className={cx("btn_")}>
          <button className={cx("btn")} onClick={handleClick}>
            <span className={cx("text-btn")}>Get Start</span>
            <img src={img2} alt="" className={cx("vector")} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Screen;
