import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VariantOutlinedSizeMedium2.module.css";

type VariantOutlinedSizeMediumType = {
  button?: string;

  /** Style props */
  variantOutlinedSizeMediumPosition?: CSSProperties["position"];
  buttonColor?: CSSProperties["color"];
};

const VariantOutlinedSizeMedium: FunctionComponent<
  VariantOutlinedSizeMediumType
> = ({ button, variantOutlinedSizeMediumPosition, buttonColor }) => {
  const variantOutlinedSizeMediumStyle: CSSProperties = useMemo(() => {
    return {
      position: variantOutlinedSizeMediumPosition,
    };
  }, [variantOutlinedSizeMediumPosition]);

  const button2Style: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={styles.variantoutlinedSizemedium}
      style={variantOutlinedSizeMediumStyle}
    >
      <div className={styles.button} style={button2Style}>
        {button}
      </div>
    </div>
  );
};

export default VariantOutlinedSizeMedium;
