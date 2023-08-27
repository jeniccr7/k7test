import { FunctionComponent, useMemo, type CSSProperties } from "react";
import VariantOutlinedSizeMedium from "./VariantOutlinedSizeMedium2";
import styles from "./SizeMediumIconLeftFalse1.module.css";

type SizeMediumIconLeftFalseType = {
  button?: string;

  /** Style props */
  sizeMediumIconLeftFalsePosition?: CSSProperties["position"];
  sizeMediumIconLeftFalseBorder?: CSSProperties["border"];
  sizeMediumIconLeftFalseBoxSizing?: CSSProperties["boxSizing"];
  sizeMediumIconLeftFalseTop?: CSSProperties["top"];
  sizeMediumIconLeftFalseLeft?: CSSProperties["left"];
  sizeMediumIconLeftFalseBackgroundColor?: CSSProperties["backgroundColor"];
  sizeMediumIconLeftFalseWidth?: CSSProperties["width"];
  sizeMediumIconLeftFalseRight?: CSSProperties["right"];
  sizeMediumIconLeftFalseHeight?: CSSProperties["height"];
  sizeMediumIconLeftFalseBottom?: CSSProperties["bottom"];
  buttonColor?: CSSProperties["color"];
};

const SizeMediumIconLeftFalse: FunctionComponent<
  SizeMediumIconLeftFalseType
> = ({
  button,
  sizeMediumIconLeftFalsePosition,
  sizeMediumIconLeftFalseBorder,
  sizeMediumIconLeftFalseBoxSizing,
  sizeMediumIconLeftFalseTop,
  sizeMediumIconLeftFalseLeft,
  sizeMediumIconLeftFalseBackgroundColor,
  sizeMediumIconLeftFalseWidth,
  sizeMediumIconLeftFalseRight,
  sizeMediumIconLeftFalseHeight,
  sizeMediumIconLeftFalseBottom,
  buttonColor,
}) => {
  const sizeMediumIconLeftFalseStyle: CSSProperties = useMemo(() => {
    return {
      position: sizeMediumIconLeftFalsePosition,
      border: sizeMediumIconLeftFalseBorder,
      boxSizing: sizeMediumIconLeftFalseBoxSizing,
      top: sizeMediumIconLeftFalseTop,
      left: sizeMediumIconLeftFalseLeft,
      backgroundColor: sizeMediumIconLeftFalseBackgroundColor,
      width: sizeMediumIconLeftFalseWidth,
      right: sizeMediumIconLeftFalseRight,
      height: sizeMediumIconLeftFalseHeight,
      bottom: sizeMediumIconLeftFalseBottom,
    };
  }, [
    sizeMediumIconLeftFalsePosition,
    sizeMediumIconLeftFalseBorder,
    sizeMediumIconLeftFalseBoxSizing,
    sizeMediumIconLeftFalseTop,
    sizeMediumIconLeftFalseLeft,
    sizeMediumIconLeftFalseBackgroundColor,
    sizeMediumIconLeftFalseWidth,
    sizeMediumIconLeftFalseRight,
    sizeMediumIconLeftFalseHeight,
    sizeMediumIconLeftFalseBottom,
  ]);

  const button2Style: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={styles.sizemediumIconLeftfalse}
      style={sizeMediumIconLeftFalseStyle}
    >
      <VariantOutlinedSizeMedium
        button="Medium"
        variantOutlinedSizeMediumPosition="unset"
        buttonColor="#1976d2"
      />
    </div>
  );
};

export default SizeMediumIconLeftFalse;
