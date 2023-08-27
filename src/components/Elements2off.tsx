import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Elements2off.module.css";

type Elements2offType = {
  prop?: string;
  icon?: string;

  /** Style props */
  elements2offPosition?: CSSProperties["position"];
  elements2offWidth?: CSSProperties["width"];
  elements2offTop?: CSSProperties["top"];
  elements2offRight?: CSSProperties["right"];
  elements2offLeft?: CSSProperties["left"];
};

const Elements2off: FunctionComponent<Elements2offType> = ({
  prop,
  icon,
  elements2offPosition,
  elements2offWidth,
  elements2offTop,
  elements2offRight,
  elements2offLeft,
}) => {
  const elements2offStyle: CSSProperties = useMemo(() => {
    return {
      position: elements2offPosition,
      width: elements2offWidth,
      top: elements2offTop,
      right: elements2offRight,
      left: elements2offLeft,
    };
  }, [
    elements2offPosition,
    elements2offWidth,
    elements2offTop,
    elements2offRight,
    elements2offLeft,
  ]);

  return (
    <div className={styles.elements2off} style={elements2offStyle}>
      <div className={styles.div}>{prop}</div>
      <img className={styles.icon} alt="" src={icon} />
    </div>
  );
};

export default Elements2off;
