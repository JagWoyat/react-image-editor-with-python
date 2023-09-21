import styles from "./Icon.module.css";

export default function Icon({ IconStyles }: any) {
  return <button style={IconStyles} className={styles.Button}></button>;
}
