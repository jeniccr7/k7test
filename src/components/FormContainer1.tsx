import { FunctionComponent } from "react";
import Elements2off from "./Elements2off";
import Elements2on from "./Elements2on";
import styles from "./FormContainer1.module.css";
const FormContainer1: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <Elements2off
        prop="登録情報"
        icon="/icon14.svg"
        elements2offPosition="absolute"
        elements2offWidth="100%"
        elements2offTop="152px"
        elements2offRight="0px"
        elements2offLeft="0px"
      />
      <Elements2off
        prop="商談管理"
        icon="/icon14.svg"
        elements2offPosition="absolute"
        elements2offWidth="100%"
        elements2offTop="296px"
        elements2offRight="0px"
        elements2offLeft="0px"
      />
      <Elements2off
        prop="与件一覧"
        icon="/icon14.svg"
        elements2offPosition="absolute"
        elements2offWidth="100%"
        elements2offTop="200px"
        elements2offRight="0px"
        elements2offLeft="0px"
      />
      <Elements2off
        prop="担当者一覧"
        icon="/icon14.svg"
        elements2offPosition="absolute"
        elements2offWidth="100%"
        elements2offTop="248px"
        elements2offRight="0px"
        elements2offLeft="0px"
      />
      <Elements2off
        prop="ホーム"
        icon="/icon14.svg"
        elements2offPosition="absolute"
        elements2offWidth="100%"
        elements2offTop="104px"
        elements2offRight="0px"
        elements2offLeft="0px"
      />
      <Elements2off
        prop="お気に入りメディア"
        icon="/icon14.svg"
        elements2offPosition="absolute"
        elements2offWidth="100%"
        elements2offTop="392px"
        elements2offRight="0px"
        elements2offLeft="0px"
      />
      <Elements2on
        icon="/icon14.svg"
        vector="/vector1.svg"
        prop="メディア一覧"
        elements2onPosition="absolute"
        elements2onWidth="100%"
        elements2onTop="344px"
        elements2onRight="0px"
        elements2onLeft="0px"
      />
      <Elements2off
        prop="お知らせ"
        icon="/icon14.svg"
        elements2offPosition="absolute"
        elements2offWidth="100%"
        elements2offTop="440px"
        elements2offRight="0px"
        elements2offLeft="0px"
      />
      <div className={styles.navigationItem}>
        <img className={styles.icon} alt="" src="/icon1.svg" />
        <div className={styles.div1}>ログアウト</div>
        <img className={styles.icon1} alt="" src="/icon14.svg" />
      </div>
      <div className={styles.koukokunushiParent}>
        <div className={styles.koukokunushi}>株式会社KOUKOKUNUSHI</div>
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <img className={styles.image1Icon} alt="" src="/image-13@2x.png" />
        </div>
      </div>
      <div className={styles.child} />
      <div className={styles.div2}>広告主</div>
      <img className={styles.image1Icon1} alt="" src="/image-11@2x.png" />
      <img className={styles.icon2} alt="" src="/icon3.svg" />
      <img className={styles.icon3} alt="" src="/icon4.svg" />
      <img className={styles.icon4} alt="" src="/icon5.svg" />
      <img className={styles.icon5} alt="" src="/icon15.svg" />
      <img className={styles.icon6} alt="" src="/icon7.svg" />
      <img className={styles.icon7} alt="" src="/icon16.svg" />
      <img className={styles.icon8} alt="" src="/icon17.svg" />
      <img className={styles.icon9} alt="" src="/icon10.svg" />
    </div>
  );
};

export default FormContainer1;
