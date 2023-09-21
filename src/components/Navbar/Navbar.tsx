import Icon from "../Icon/Icon";
import styles from "./Navbar.module.css";
import icon from "../../img/image-circle-plus-svgrepo-com.svg";
import { Link } from "react-router-dom";

const IconStyles = {
  marginTop: "1.5rem",
  marginRight: "0.5rem",
  width: "4rem",
  height: "4rem",
  backgroundColor: "transparent",
  backgroundImage: `url(${icon})`,
};

const Navbar = ({ children }: any) => {
  return (
    <>
      <div className={styles.Navbar}>
        <Link to={"/"}>
          <div className={styles.NameWrapper}>
            <Icon IconStyles={IconStyles} />
            <h1>Image Editor</h1>
          </div>
        </Link>
      </div>

      {children}
    </>
  );
};

export default Navbar;
