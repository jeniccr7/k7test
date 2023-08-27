import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VariantOutlinedSizeSmall.module.css";

type VariantOutlinedSizeSmallType = {
  button?: string;
  maskedIcon?: string;

  /** Style props */
  variantOutlinedSizeSmallPosition?: CSSProperties["position"];
  variantOutlinedSizeSmallPadding?: CSSProperties["padding"];
  buttonColor?: CSSProperties["color"];
};

const VariantOutlinedSizeSmall: FunctionComponent<
  VariantOutlinedSizeSmallType
> = ({
  button,
  maskedIcon,
  variantOutlinedSizeSmallPosition,
  variantOutlinedSizeSmallPadding,
  buttonColor,
}) => {
  const variantOutlinedSizeSmallStyle: CSSProperties = useMemo(() => {
    return {
      position: variantOutlinedSizeSmallPosition,
      padding: variantOutlinedSizeSmallPadding,
    };
  }, [variantOutlinedSizeSmallPosition, variantOutlinedSizeSmallPadding]);

  const button3Style: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={styles.variantoutlinedSizesmall}
      style={variantOutlinedSizeSmallStyle}
    >
      <div className={styles.content}>
        <div className={styles.button} style={button3Style}>
          {button}
        </div>
        <img className={styles.maskedIcon} alt="" src={maskedIcon} />
      </div>
    </div>
  );
};

export default VariantOutlinedSizeSmall;
