import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Elements2on.module.css";

type Elements2onType = {
  icon?: string;
  vector?: string;
  prop?: string;

  /** Style props */
  elements2onPosition?: CSSProperties["position"];
  elements2onWidth?: CSSProperties["width"];
  elements2onTop?: CSSProperties["top"];
  elements2onRight?: CSSProperties["right"];
  elements2onLeft?: CSSProperties["left"];
};

const Elements2on: FunctionComponent<Elements2onType> = ({
  icon,
  vector,
  prop,
  elements2onPosition,
  elements2onWidth,
  elements2onTop,
  elements2onRight,
  elements2onLeft,
}) => {
  const elements2onStyle: CSSProperties = useMemo(() => {
    return {
      position: elements2onPosition,
      width: elements2onWidth,
      top: elements2onTop,
      right: elements2onRight,
      left: elements2onLeft,
    };
  }, [
    elements2onPosition,
    elements2onWidth,
    elements2onTop,
    elements2onRight,
    elements2onLeft,
  ]);

  return (
    <div className={styles.elements2on} style={elements2onStyle}>
      <div className={styles.rectangle} />
      <img className={styles.icon} alt="" src={icon} />
      <img className={styles.vectorIcon} alt="" src={vector} />
      <b className={styles.b}>{prop}</b>
    </div>
  );
};

export default Elements2on;
