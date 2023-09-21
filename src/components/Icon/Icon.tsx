import { Link } from "react-router-dom";
import styles from "./Icon.module.css";

export default function Icon({ icon, linkTo }: any) {
  return (
    <Link to={linkTo}>
      <button
        style={{
          backgroundColor: "transparent",
          backgroundImage: `url(${icon})`,
        }}
        className={styles.Button}
      ></button>
    </Link>
  );
}
