import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VariantTextSizeMediumIc.module.css";

type VariantTextSizeMediumIcType = {
  maskedIcon?: string;
  button?: string;

  /** Style props */
  variantTextSizeMediumIcPosition?: CSSProperties["position"];
  variantTextSizeMediumIcPadding?: CSSProperties["padding"];
  buttonColor?: CSSProperties["color"];
};

const VariantTextSizeMediumIc: FunctionComponent<
  VariantTextSizeMediumIcType
> = ({
  maskedIcon,
  button,
  variantTextSizeMediumIcPosition,
  variantTextSizeMediumIcPadding,
  buttonColor,
}) => {
  const variantTextSizeMediumIcStyle: CSSProperties = useMemo(() => {
    return {
      position: variantTextSizeMediumIcPosition,
      padding: variantTextSizeMediumIcPadding,
    };
  }, [variantTextSizeMediumIcPosition, variantTextSizeMediumIcPadding]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={styles.varianttextSizemediumIc}
      style={variantTextSizeMediumIcStyle}
    >
      <div className={styles.content}>
        <img className={styles.maskedicon} alt="" src={maskedIcon} />
        <div className={styles.button} style={button1Style}>
          {button}
        </div>
      </div>
    </div>
  );
};

export default VariantTextSizeMediumIc;
