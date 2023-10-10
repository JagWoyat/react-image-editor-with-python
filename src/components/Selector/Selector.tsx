import icon from "../../img/image-circle-plus-svgrepo-com.svg";
import styles from "./Selector.module.css";
import SelectorIcon from "../Icon/SelectorIcon/SelectorIcon";

type Options = {
  mirroredVer: boolean;
  mirroredHor: boolean;
  cropped: boolean;
};

type Props = {
  selectorOptions: Options;
  updateState: (newOptions: Options) => void;
};

const Selector: React.FC<Props> = ({ selectorOptions, updateState }: Props) => {
  return (
    <div className={styles.Main}>
      <div className={styles.Wrapper}>
        <SelectorIcon
          icon={icon}
          selectorOptions={selectorOptions}
          name={"mirroredVer"}
          updateState={updateState}
        />
        <SelectorIcon
          icon={icon}
          selectorOptions={selectorOptions}
          name={"mirroredHor"}
          updateState={updateState}
        />
        <SelectorIcon
          icon={icon}
          selectorOptions={selectorOptions}
          name={"cropped"}
          updateState={updateState}
        />
      </div>
    </div>
  );
};

export default Selector;
