import { FunctionComponent, useMemo, type CSSProperties } from "react";
import VariantTextSizeMediumIc from "./VariantTextSizeMediumIc";
import styles from "./SizeMediumIconLeftTrue.module.css";

type SizeMediumIconLeftTrueType = {
  maskedIcon?: string;
  button?: string;

  /** Style props */
  sizeMediumIconLeftTruePosition?: CSSProperties["position"];
  sizeMediumIconLeftTrueBorder?: CSSProperties["border"];
  sizeMediumIconLeftTrueBoxSizing?: CSSProperties["boxSizing"];
  sizeMediumIconLeftTrueHeight?: CSSProperties["height"];
  sizeMediumIconLeftTrueTop?: CSSProperties["top"];
  sizeMediumIconLeftTrueBottom?: CSSProperties["bottom"];
  sizeMediumIconLeftTrueLeft?: CSSProperties["left"];
  unstyledButtonPadding?: CSSProperties["padding"];
  buttonColor?: CSSProperties["color"];
};

const SizeMediumIconLeftTrue: FunctionComponent<SizeMediumIconLeftTrueType> = ({
  maskedIcon,
  button,
  sizeMediumIconLeftTruePosition,
  sizeMediumIconLeftTrueBorder,
  sizeMediumIconLeftTrueBoxSizing,
  sizeMediumIconLeftTrueHeight,
  sizeMediumIconLeftTrueTop,
  sizeMediumIconLeftTrueBottom,
  sizeMediumIconLeftTrueLeft,
  unstyledButtonPadding,
  buttonColor,
}) => {
  const sizeMediumIconLeftTrueStyle: CSSProperties = useMemo(() => {
    return {
      position: sizeMediumIconLeftTruePosition,
      border: sizeMediumIconLeftTrueBorder,
      boxSizing: sizeMediumIconLeftTrueBoxSizing,
      height: sizeMediumIconLeftTrueHeight,
      top: sizeMediumIconLeftTrueTop,
      bottom: sizeMediumIconLeftTrueBottom,
      left: sizeMediumIconLeftTrueLeft,
    };
  }, [
    sizeMediumIconLeftTruePosition,
    sizeMediumIconLeftTrueBorder,
    sizeMediumIconLeftTrueBoxSizing,
    sizeMediumIconLeftTrueHeight,
    sizeMediumIconLeftTrueTop,
    sizeMediumIconLeftTrueBottom,
    sizeMediumIconLeftTrueLeft,
  ]);

  const variantTextSizeMediumIcStyle: CSSProperties = useMemo(() => {
    return {
      padding: unstyledButtonPadding,
    };
  }, [unstyledButtonPadding]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={styles.sizemediumIconLefttrue}
      style={sizeMediumIconLeftTrueStyle}
    >
      <VariantTextSizeMediumIc
        maskedIcon="/masked-icon2.svg"
        button="Medium"
        variantTextSizeMediumIcPosition="unset"
        variantTextSizeMediumIcPadding="var(--padding-7xs) var(--padding-base)"
        buttonColor="#1976d2"
      />
    </div>
  );
};

export default SizeMediumIconLeftTrue;
