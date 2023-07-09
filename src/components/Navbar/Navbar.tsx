import Icon from "../Icon/Icon";
import styles from "./Navbar.module.css";
import icon from "../../img/image-circle-plus-svgrepo-com.svg";

const Navbar = ({ children }: any) => {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.NameWrapper}>
          <Icon icon={icon} linkTo="/" />
          <h1>Image Editor</h1>
        </div>
      </div>

      {children}
    </>
  );
};

export default Navbar;
