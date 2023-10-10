import { useState } from "react";
import Icon from "../Icon";

export default function SelectorIcon({
  selectorOptions,
  icon,
  name,
  updateState,
}: any) {
  const BaseStyles = {
    height: "2.5rem",
    backgroundColor: "transparent",
  };
  const ClickedStyles = {
    height: "2.5rem",
    backgroundColor: "transparent",
    opacity: "0.5",
  };

  const [IconStyles, setIconStyles] = useState(BaseStyles);

  type Options = {
    mirroredVer: boolean;
    mirroredHor: boolean;
    cropped: boolean;
  };

  let optionsTemp: Options = selectorOptions;

  function changeState(nam: keyof typeof optionsTemp): void {
    if (selectorOptions.hasOwnProperty(nam)) {
      optionsTemp[nam] = !optionsTemp[nam];
      updateState(optionsTemp);
      console.log(selectorOptions);
      if (!optionsTemp[nam]) {
        setIconStyles(BaseStyles);
      } else {
        setIconStyles(ClickedStyles);
      }
    } else {
      console.log(`Property '${nam}' does not exist in the object.`);
    }
  }

  return (
    <div>
      <Icon
        icon={icon}
        onClick={() => changeState(name)}
        IconStyles={IconStyles}
      />
    </div>
  );
}
