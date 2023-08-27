import { FunctionComponent, useMemo, type CSSProperties } from "react";
import VariantOutlinedSizeSmall from "./VariantOutlinedSizeSmall";
import styles from "./SizeSmallIconLeftFalseI.module.css";

type SizeSmallIconLeftFalseIType = {
  button?: string;
  maskedIcon?: string;

  /** Style props */
  sizeSmallIconLeftFalseIPosition?: CSSProperties["position"];
  sizeSmallIconLeftFalseIBorder?: CSSProperties["border"];
  sizeSmallIconLeftFalseIBoxSizing?: CSSProperties["boxSizing"];
  sizeSmallIconLeftFalseIHeight?: CSSProperties["height"];
  sizeSmallIconLeftFalseITop?: CSSProperties["top"];
  sizeSmallIconLeftFalseIBottom?: CSSProperties["bottom"];
  sizeSmallIconLeftFalseILeft?: CSSProperties["left"];
  sizeSmallIconLeftFalseIBackgroundColor?: CSSProperties["backgroundColor"];
  sizeSmallIconLeftFalseIWidth?: CSSProperties["width"];
  unstyledButtonPadding?: CSSProperties["padding"];
  buttonColor?: CSSProperties["color"];
};

const SizeSmallIconLeftFalseI: FunctionComponent<
  SizeSmallIconLeftFalseIType
> = ({
  button,
  maskedIcon,
  sizeSmallIconLeftFalseIPosition,
  sizeSmallIconLeftFalseIBorder,
  sizeSmallIconLeftFalseIBoxSizing,
  sizeSmallIconLeftFalseIHeight,
  sizeSmallIconLeftFalseITop,
  sizeSmallIconLeftFalseIBottom,
  sizeSmallIconLeftFalseILeft,
  sizeSmallIconLeftFalseIBackgroundColor,
  sizeSmallIconLeftFalseIWidth,
  unstyledButtonPadding,
  buttonColor,
}) => {
  const sizeSmallIconLeftFalseIStyle: CSSProperties = useMemo(() => {
    return {
      position: sizeSmallIconLeftFalseIPosition,
      border: sizeSmallIconLeftFalseIBorder,
      boxSizing: sizeSmallIconLeftFalseIBoxSizing,
      height: sizeSmallIconLeftFalseIHeight,
      top: sizeSmallIconLeftFalseITop,
      bottom: sizeSmallIconLeftFalseIBottom,
      left: sizeSmallIconLeftFalseILeft,
      backgroundColor: sizeSmallIconLeftFalseIBackgroundColor,
      width: sizeSmallIconLeftFalseIWidth,
    };
  }, [
    sizeSmallIconLeftFalseIPosition,
    sizeSmallIconLeftFalseIBorder,
    sizeSmallIconLeftFalseIBoxSizing,
    sizeSmallIconLeftFalseIHeight,
    sizeSmallIconLeftFalseITop,
    sizeSmallIconLeftFalseIBottom,
    sizeSmallIconLeftFalseILeft,
    sizeSmallIconLeftFalseIBackgroundColor,
    sizeSmallIconLeftFalseIWidth,
  ]);

  const variantOutlinedSizeSmallStyle: CSSProperties = useMemo(() => {
    return {
      padding: unstyledButtonPadding,
    };
  }, [unstyledButtonPadding]);

  const button3Style: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={styles.sizesmallIconLeftfalseI}
      style={sizeSmallIconLeftFalseIStyle}
    >
      <VariantOutlinedSizeSmall
        button="Small"
        maskedIcon="/masked-icon4.svg"
        variantOutlinedSizeSmallPosition="unset"
        variantOutlinedSizeSmallPadding="var(--padding-9xs) var(--padding-3xs)"
        buttonColor="#1976d2"
      />
    </div>
  );
};

export default SizeSmallIconLeftFalseI;
