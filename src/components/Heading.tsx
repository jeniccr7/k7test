import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Heading.module.css";

type HeadingType = {
  prop?: string;

  /** Style props */
  headingPosition?: CSSProperties["position"];
  headingTop?: CSSProperties["top"];
  headingLeft?: CSSProperties["left"];
  bgBorderBottom?: CSSProperties["borderBottom"];
};

const Heading: FunctionComponent<HeadingType> = ({
  prop,
  headingPosition,
  headingTop,
  headingLeft,
  bgBorderBottom,
}) => {
  const headingStyle: CSSProperties = useMemo(() => {
    return {
      position: headingPosition,
      top: headingTop,
      left: headingLeft,
    };
  }, [headingPosition, headingTop, headingLeft]);

  const bgStyle: CSSProperties = useMemo(() => {
    return {
      borderBottom: bgBorderBottom,
    };
  }, [bgBorderBottom]);

  return (
    <div className={styles.heading} style={headingStyle}>
      <div className={styles.bg} style={bgStyle} />
      <b className={styles.b}>{prop}</b>
    </div>
  );
};

export default Heading;
