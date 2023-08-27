import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SizeSmallStateEnabledHas.module.css";

type SizeSmallStateEnabledHasType = {
  label?: string;

  /** Style props */
  sizeSmallStateEnabledHasPosition?: CSSProperties["position"];
  sizeSmallStateEnabledHasWidth?: CSSProperties["width"];
  sizeSmallStateEnabledHasTop?: CSSProperties["top"];
  sizeSmallStateEnabledHasLeft?: CSSProperties["left"];
  sizeSmallStateEnabledHasHeight?: CSSProperties["height"];
  inputBorder?: CSSProperties["border"];
  inputFlex?: CSSProperties["flex"];
  inputBackgroundColor?: CSSProperties["backgroundColor"];
  containerPadding?: CSSProperties["padding"];
  containerFlex?: CSSProperties["flex"];
  labelColor?: CSSProperties["color"];
};

const SizeSmallStateEnabledHas: FunctionComponent<
  SizeSmallStateEnabledHasType
> = ({
  label,
  sizeSmallStateEnabledHasPosition,
  sizeSmallStateEnabledHasWidth,
  sizeSmallStateEnabledHasTop,
  sizeSmallStateEnabledHasLeft,
  sizeSmallStateEnabledHasHeight,
  inputBorder,
  inputFlex,
  inputBackgroundColor,
  containerPadding,
  containerFlex,
  labelColor,
}) => {
  const sizeSmallStateEnabledHasStyle: CSSProperties = useMemo(() => {
    return {
      position: sizeSmallStateEnabledHasPosition,
      width: sizeSmallStateEnabledHasWidth,
      top: sizeSmallStateEnabledHasTop,
      left: sizeSmallStateEnabledHasLeft,
      height: sizeSmallStateEnabledHasHeight,
    };
  }, [
    sizeSmallStateEnabledHasPosition,
    sizeSmallStateEnabledHasWidth,
    sizeSmallStateEnabledHasTop,
    sizeSmallStateEnabledHasLeft,
    sizeSmallStateEnabledHasHeight,
  ]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      border: inputBorder,
      flex: inputFlex,
      backgroundColor: inputBackgroundColor,
    };
  }, [inputBorder, inputFlex, inputBackgroundColor]);

  const containerStyle: CSSProperties = useMemo(() => {
    return {
      padding: containerPadding,
      flex: containerFlex,
    };
  }, [containerPadding, containerFlex]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  return (
    <div
      className={styles.sizesmallStateenabledHas}
      style={sizeSmallStateEnabledHasStyle}
    >
      <div className={styles.input} style={inputStyle}>
        <div className={styles.container} style={containerStyle}>
          <div className={styles.label} style={labelStyle}>
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeSmallStateEnabledHas;
