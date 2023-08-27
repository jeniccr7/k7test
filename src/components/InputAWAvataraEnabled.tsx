import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputAWAvataraEnabled.module.css";

type InputAWAvataraEnabledType = {
  avatar?: string;
  label?: string;
  icon?: string;
  showAvatar?: boolean;
  showIcon?: boolean;

  /** Style props */
  inputAWAvataraEnabledPosition?: CSSProperties["position"];
  inputAWAvataraEnabledBackgroundColor?: CSSProperties["backgroundColor"];
  inputAWAvataraEnabledHeight?: CSSProperties["height"];
  inputAWAvataraEnabledTop?: CSSProperties["top"];
  inputAWAvataraEnabledLeft?: CSSProperties["left"];
  inputAWAvataraEnabledBorderRadius?: CSSProperties["borderRadius"];
  inputAWAvataraEnabledBorder?: CSSProperties["border"];
  labelColor?: CSSProperties["color"];
};

const InputAWAvataraEnabled: FunctionComponent<InputAWAvataraEnabledType> = ({
  avatar,
  label,
  icon,
  showAvatar,
  showIcon,
  inputAWAvataraEnabledPosition,
  inputAWAvataraEnabledBackgroundColor,
  inputAWAvataraEnabledHeight,
  inputAWAvataraEnabledTop,
  inputAWAvataraEnabledLeft,
  inputAWAvataraEnabledBorderRadius,
  inputAWAvataraEnabledBorder,
  labelColor,
}) => {
  const inputAWAvataraEnabledStyle: CSSProperties = useMemo(() => {
    return {
      position: inputAWAvataraEnabledPosition,
      backgroundColor: inputAWAvataraEnabledBackgroundColor,
      height: inputAWAvataraEnabledHeight,
      top: inputAWAvataraEnabledTop,
      left: inputAWAvataraEnabledLeft,
      borderRadius: inputAWAvataraEnabledBorderRadius,
      border: inputAWAvataraEnabledBorder,
    };
  }, [
    inputAWAvataraEnabledPosition,
    inputAWAvataraEnabledBackgroundColor,
    inputAWAvataraEnabledHeight,
    inputAWAvataraEnabledTop,
    inputAWAvataraEnabledLeft,
    inputAWAvataraEnabledBorderRadius,
    inputAWAvataraEnabledBorder,
  ]);

  const label1Style: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  return (
    <div
      className={styles.inputaWAvataraEnabled}
      style={inputAWAvataraEnabledStyle}
    >
      {showAvatar && (
        <div className={styles.avatar}>
          <img className={styles.avatarIcon} alt="" src={avatar} />
        </div>
      )}
      <div className={styles.label}>
        <div className={styles.label1} style={label1Style}>
          {label}
        </div>
      </div>
      {showIcon && (
        <div className={styles.icon}>
          <img className={styles.icon1} alt="" src={icon} />
        </div>
      )}
    </div>
  );
};

export default InputAWAvataraEnabled;
