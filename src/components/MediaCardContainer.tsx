import { FunctionComponent } from "react";
import SizeMediumIconLeftFalse from "./SizeMediumIconLeftFalse1";
import InputAWAvataraEnabled from "./InputAWAvataraEnabled";
import styles from "./MediaCardContainer.module.css";
const MediaCardContainer: FunctionComponent = () => {
  return (
    <div className={styles.bgParent}>
      <div className={styles.bg} />
      <div className={styles.unstyledbutton}>
        <img className={styles.icon} alt="" src="/icon12.svg" />
        <div className={styles.button}>お気に入り</div>
        <div className={styles.unstyledbuttonChild} />
        <div className={styles.button}>10</div>
      </div>
      <SizeMediumIconLeftFalse
        button="お問い合わせ"
        sizeMediumIconLeftFalsePosition="absolute"
        sizeMediumIconLeftFalseBorder="1px solid var(--red)"
        sizeMediumIconLeftFalseBoxSizing="border-box"
        sizeMediumIconLeftFalseTop="calc(50% + 179.5px)"
        sizeMediumIconLeftFalseLeft="79.58%"
        sizeMediumIconLeftFalseBackgroundColor="#bd0017"
        sizeMediumIconLeftFalseWidth="17.61%"
        sizeMediumIconLeftFalseRight="2.82%"
        sizeMediumIconLeftFalseHeight="unset"
        sizeMediumIconLeftFalseBottom="unset"
        buttonColor="#fff"
      />
      <div className={styles.bg1} />
      <div className={styles.content}>
        <img className={styles.maskedIcon} alt="" src="/masked-icon8.svg" />
        <img className={styles.icon} alt="" src="/icon13.svg" />
        <div className={styles.button1}>比較</div>
      </div>
      <b className={styles.title}>MediaTitleMediaTitle</b>
      <div className={styles.imageParent}>
        <div className={styles.image} />
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      </div>
      <div className={styles.choiceChipbActiveWrapper}>
        <InputAWAvataraEnabled
          avatar="/avatar17.svg"
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
      <div className={styles.description}>
        <p className={styles.p}>1.食品・飲料 00%</p>
        <p className={styles.p}>2.家庭用品・トイレタリー 00%</p>
        <p className={styles.p}>3.化粧品 00%</p>
      </div>
      <div className={styles.top3}>広告主の業種/商材Top3</div>
      <div className={styles.divider} />
      <div className={styles.divider1} />
      <div className={styles.divider2} />
      <div className={styles.divider3} />
      <div className={styles.divider4} />
      <div className={styles.div1}>メディア概要</div>
      <div className={styles.div2}>メディア種別</div>
      <div className={styles.description1}> ポータルメディア</div>
      <div className={styles.description2}>
        概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト
      </div>
      <div className={styles.div3}>対応ファネル</div>
      <div className={styles.divider5} />
      <div className={styles.div4}>閲覧/視聴/読者ターゲット</div>
      <div className={styles.description3}>女性 , 社会人</div>
      <InputAWAvataraEnabled
        avatar="/avatar18.svg"
        label="興味"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#f2f2f2"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% - 60.5px)"
        inputAWAvataraEnabledLeft="648px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#757575"
      />
      <InputAWAvataraEnabled
        avatar="/avatar19.svg"
        label="認知"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#222"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% - 60.5px)"
        inputAWAvataraEnabledLeft="591px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#fff"
      />
      <InputAWAvataraEnabled
        avatar="/avatar20.svg"
        label="理解"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#f2f2f2"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% - 60.5px)"
        inputAWAvataraEnabledLeft="705px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#757575"
      />
      <InputAWAvataraEnabled
        avatar="/avatar21.svg"
        label="購買 / 来店促進"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#222"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% - 60.5px)"
        inputAWAvataraEnabledLeft="762px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#fff"
      />
      <InputAWAvataraEnabled
        avatar="/avatar22.svg"
        label="推奨"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#f2f2f2"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% - 60.5px)"
        inputAWAvataraEnabledLeft="960px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#757575"
      />
      <InputAWAvataraEnabled
        avatar="/avatar23.svg"
        label="リピート"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="#f2f2f2"
        inputAWAvataraEnabledHeight="unset"
        inputAWAvataraEnabledTop="calc(50% - 60.5px)"
        inputAWAvataraEnabledLeft="879px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="unset"
        labelColor="#757575"
      />
      <div className={styles.div5}>主なユーザー属性</div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.descriptionParent}>
          <div className={styles.description4}>20代 男性 : 00%</div>
          <div className={styles.groupChild1} />
        </div>
        <div className={styles.descriptionGroup}>
          <div className={styles.description4}>30代 女性 : 00%</div>
          <div className={styles.groupChild2} />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description6}>その他 : 00%</div>
          <div className={styles.groupChild3} />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.description4}>30代 男性 : 00%</div>
          <div className={styles.groupChild4} />
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild5} />
          <div className={styles.groupChild6} />
        </div>
        <div className={styles.descriptionParent1}>
          <div className={styles.description8}>女性 : 00%</div>
          <div className={styles.groupChild7} />
        </div>
        <div className={styles.descriptionParent2}>
          <div className={styles.description8}>男性 : 00%</div>
          <div className={styles.groupChild8} />
        </div>
      </div>
    </div>
  );
};

export default MediaCardContainer;
