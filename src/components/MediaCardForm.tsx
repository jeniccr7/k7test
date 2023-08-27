import { FunctionComponent } from "react";
import InputAWAvataraEnabled from "./InputAWAvataraEnabled";
import SizeMediumIconLeftFalse from "./SizeMediumIconLeftFalse1";
import styles from "./MediaCardForm.module.css";
const MediaCardForm: FunctionComponent = () => {
  return (
    <div className={styles.bgParent}>
      <img className={styles.bgIcon} alt="" src="/bg1.svg" />
      <div className={styles.parent}>
        <div className={styles.div}>主なユーザー属性</div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.groupInner} />
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.descriptionParent}>
            <div className={styles.description}>20代 男性 : 00%</div>
            <div className={styles.groupChild1} />
          </div>
          <div className={styles.descriptionGroup}>
            <div className={styles.description}>30代 女性 : 00%</div>
            <div className={styles.groupChild2} />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.description2}>その他 : 00%</div>
            <div className={styles.groupChild3} />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.description}>30代 男性 : 00%</div>
            <div className={styles.groupChild4} />
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild5} />
            <div className={styles.groupChild6} />
          </div>
          <div className={styles.descriptionParent1}>
            <div className={styles.description4}>女性 : 00%</div>
            <div className={styles.groupChild7} />
          </div>
          <div className={styles.descriptionParent2}>
            <div className={styles.description4}>男性 : 00%</div>
            <div className={styles.groupChild8} />
          </div>
        </div>
      </div>
      <div className={styles.imageParent}>
        <div className={styles.image} />
        <img className={styles.image1Icon} alt="" src="/image-14@2x.png" />
      </div>
      <b className={styles.title}>MediaTitleMediaTitle</b>
      <div className={styles.choiceChipbActiveWrapper}>
        <InputAWAvataraEnabled
          avatar="/avatar31.svg"
          label="ライフスタイル"
          icon="/-icon.svg"
          showAvatar={false}
          showIcon={false}
          inputAWAvataraEnabledPosition="absolute"
          inputAWAvataraEnabledBackgroundColor="rgba(10, 126, 191, 0.08)"
          inputAWAvataraEnabledHeight="24px"
          inputAWAvataraEnabledTop="calc(50% - 12px)"
          inputAWAvataraEnabledLeft="0px"
          inputAWAvataraEnabledBorderRadius="4px"
          inputAWAvataraEnabledBorder="1px solid var(--blue)"
          labelColor="#0a7ebf"
        />
      </div>
      <InputAWAvataraEnabled
        avatar="/avatar32.svg"
        label="購買 / 来店促進"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#222"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% + 58px)"
        inputAWAvataraEnabledLeft="16px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#fff"
      />
      <InputAWAvataraEnabled
        avatar="/avatar33.svg"
        label="推奨"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#f2f2f2"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% + 58px)"
        inputAWAvataraEnabledLeft="214px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#757575"
      />
      <InputAWAvataraEnabled
        avatar="/avatar34.svg"
        label="リピート"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#f2f2f2"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% + 58px)"
        inputAWAvataraEnabledLeft="133px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#757575"
      />
      <InputAWAvataraEnabled
        avatar="/avatar35.svg"
        label="興味"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#f2f2f2"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% + 22px)"
        inputAWAvataraEnabledLeft="73px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#757575"
      />
      <InputAWAvataraEnabled
        avatar="/avatar36.svg"
        label="認知"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#222"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% + 22px)"
        inputAWAvataraEnabledLeft="16px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#fff"
      />
      <InputAWAvataraEnabled
        avatar="/avatar37.svg"
        label="理解"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#f2f2f2"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% + 22px)"
        inputAWAvataraEnabledLeft="130px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#757575"
      />
      <div className={styles.unstyledbutton}>
        <img className={styles.icon} alt="" src="/icon12.svg" />
        <div className={styles.button}>お気に入り</div>
        <div className={styles.unstyledbuttonChild} />
        <div className={styles.button}>10</div>
      </div>
      <SizeMediumIconLeftFalse
        button="お問い合わせ"
        sizeMediumIconLeftFalsePosition="absolute"
        sizeMediumIconLeftFalseBorder="unset"
        sizeMediumIconLeftFalseBoxSizing="unset"
        sizeMediumIconLeftFalseTop="calc(50% + 334px)"
        sizeMediumIconLeftFalseLeft="calc(50% + 11.5px)"
        sizeMediumIconLeftFalseBackgroundColor="#bd0017"
        sizeMediumIconLeftFalseWidth="144px"
        sizeMediumIconLeftFalseRight="unset"
        sizeMediumIconLeftFalseHeight="unset"
        sizeMediumIconLeftFalseBottom="unset"
        buttonColor="#fff"
      />
      <div className={styles.description6}>
        <p className={styles.p}>1.食品・飲料 00%</p>
        <p className={styles.p}>2.家庭用品・トイレタリー 00%</p>
        <p className={styles.p}>3.化粧品 00%</p>
      </div>
      <div className={styles.top3}>広告主の業種/商材Top3</div>
      <div className={styles.div2}>対応ファネル</div>
      <div className={styles.description7}>ポータルメディア</div>
      <div className={styles.div3}>メディア種別</div>
      <div className={styles.description8}>女性 , 社会人</div>
      <div className={styles.div4}>閲覧/視聴/読者ターゲット</div>
      <div className={styles.div5}>メディア概要</div>
      <img className={styles.vectorIcon} alt="" src="/vector-6.svg" />
      <div className={styles.description9}>
        概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト
      </div>
      <img className={styles.groupChild9} alt="" src="/vector-6.svg" />
      <img className={styles.groupChild10} alt="" src="/vector-6.svg" />
      <img className={styles.groupChild11} alt="" src="/vector-6.svg" />
      <img className={styles.groupChild12} alt="" src="/vector-6.svg" />
      <img className={styles.groupChild13} alt="" src="/vector-6.svg" />
      <div className={styles.bgGroup}>
        <div className={styles.bg} />
        <div className={styles.content}>
          <img className={styles.maskedIcon} alt="" src="/masked-icon11.svg" />
          <img className={styles.icon} alt="" src="/1checkboxoutline.svg" />
          <div className={styles.button1}>比較</div>
        </div>
      </div>
    </div>
  );
};

export default MediaCardForm;
