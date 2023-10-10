import styles from "./Icon.module.css";
import { Link } from "react-router-dom";

export default function Icon({
  icon,
  IconStyles = {},
  linkTo = "",
  onClick = () => {},
}: any) {
  let Styles = {};
  if (Object.keys(IconStyles).length === 0) {
    Styles = { backgroundColor: "transparent" };
  } else {
    Styles = IconStyles;
  }
  Styles = { ...Styles, backgroundImage: `url(${icon})` };
  return (
    <>
      {linkTo != "" ? (
        <Link to={linkTo}>
          <button
            style={Styles}
            className={styles.Button}
            onClick={onClick}
          ></button>
        </Link>
      ) : (
        <button
          style={Styles}
          className={styles.Button}
          onClick={onClick}
        ></button>
      )}
    </>
  );
}
