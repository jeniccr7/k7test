import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Footer from "./Footer";
import styles from "./HeaderMypage.module.css";

type HeaderMypageType = {
  /** Style props */
  headerMypagePosition?: CSSProperties["position"];
  headerMypageTop?: CSSProperties["top"];
  headerMypageLeft?: CSSProperties["left"];
};

const HeaderMypage: FunctionComponent<HeaderMypageType> = ({
  headerMypagePosition,
  headerMypageTop,
  headerMypageLeft,
}) => {
  const headerMypageStyle: CSSProperties = useMemo(() => {
    return {
      position: headerMypagePosition,
      top: headerMypageTop,
      left: headerMypageLeft,
    };
  }, [headerMypagePosition, headerMypageTop, headerMypageLeft]);

  return (
    <div className={styles.headerMypage} style={headerMypageStyle}>
      <div className={styles.base} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.div}>ログイン</div>
      </div>
      <Footer />
      <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
    </div>
  );
};

export default HeaderMypage;
