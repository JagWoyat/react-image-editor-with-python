import Icon from "../Icon/Icon";
import icon from "../../img/image-circle-plus-svgrepo-com.svg";
import styles from "./Selector.module.css";

type Options = {
  mirroredVer: boolean;
  mirroredHor: boolean;
  cropped: boolean;
};

type Props = {
  selectorOptions: Options;
  updateState: (newOptions: Options) => void;
};

const Selector: React.FC<Props> = ({ selectorOptions, updateState }) => {
  let optionsTemp: Options = selectorOptions;

  function changeState(name: keyof typeof selectorOptions): void {
    if (selectorOptions.hasOwnProperty(name)) {
      optionsTemp[name] = !optionsTemp[name];
      updateState(optionsTemp);
      console.log(selectorOptions[name]);
    } else {
      console.log(`Property '${name}' does not exist in the object.`);
    }
  }

  const IconStyles = {
    height: "3rem",
    backgroundColor: "transparent",
  };

  return (
    <div className={styles.Wrapper}>
      <Icon
        IconStyles={IconStyles}
        icon={icon}
        onClick={() => changeState("mirroredVer")}
      />
      <Icon
        IconStyles={IconStyles}
        icon={icon}
        onClick={() => changeState("mirroredHor")}
      />
      <Icon
        IconStyles={IconStyles}
        icon={icon}
        onClick={() => changeState("cropped")}
      />
    </div>
  );
};

export default Selector;
