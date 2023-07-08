import styles from "./Navbar.module.css";
// import icon from "../../image-circle-plus-svgrepo-com.svg";

const Navbar = ({ children }: any) => {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.NameWrapper}>
          {/* <img src={icon} /> */}
          <h1>Image Editor</h1>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
