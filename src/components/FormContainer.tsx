import { FunctionComponent } from "react";
import SizeSmallStateEnabledHas from "./SizeSmallStateEnabledHas";
import SizeMediumIconLeftTrue from "./SizeMediumIconLeftTrue";
import InputAWAvataraEnabled from "./InputAWAvataraEnabled";
import SizeMediumIconLeftFalse from "./SizeMediumIconLeftFalse1";
import styles from "./FormContainer.module.css";
const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.bgParent}>
      <div className={styles.bg} />
      <div className={styles.bg1} />
      <b className={styles.b}>フリーワード</b>
      <div className={styles.textFieldoutlinedWrapper}>
        <SizeSmallStateEnabledHas
          label="キーワードを入力"
          sizeSmallStateEnabledHasPosition="absolute"
          sizeSmallStateEnabledHasWidth="336px"
          sizeSmallStateEnabledHasTop="0px"
          sizeSmallStateEnabledHasLeft="0px"
          sizeSmallStateEnabledHasHeight="36px"
          inputBorder="1px solid var(--gray)"
          inputFlex="1"
          inputBackgroundColor="#fff"
          containerPadding="var(--padding-5xs) 0px var(--padding-6xs)"
          containerFlex="1"
          labelColor="#b3b3b3"
        />
      </div>
      <b className={styles.b1}>メディア種別</b>
      <b className={styles.b2}>対応ファネル</b>
      <b className={styles.b3}>ターゲット</b>
      <b className={styles.b4}>ターゲット種別</b>
      <b className={styles.b5}>デモグラ</b>
      <SizeMediumIconLeftTrue
        maskedIcon="/maskedicon.svg"
        button="ターゲットを選ぶ"
        sizeMediumIconLeftTruePosition="absolute"
        sizeMediumIconLeftTrueBorder="unset"
        sizeMediumIconLeftTrueBoxSizing="unset"
        sizeMediumIconLeftTrueHeight="5.16%"
        sizeMediumIconLeftTrueTop="32.9%"
        sizeMediumIconLeftTrueBottom="61.94%"
        sizeMediumIconLeftTrueLeft="calc(50% - 326px)"
        unstyledButtonPadding="var(--padding-9xs) var(--padding-5xs)"
        buttonColor="#0a7ebf"
      />
      <SizeMediumIconLeftTrue
        maskedIcon="/maskedicon.svg"
        button="メディア種別を選ぶ"
        sizeMediumIconLeftTruePosition="absolute"
        sizeMediumIconLeftTrueBorder="unset"
        sizeMediumIconLeftTrueBoxSizing="unset"
        sizeMediumIconLeftTrueHeight="5.16%"
        sizeMediumIconLeftTrueTop="14.84%"
        sizeMediumIconLeftTrueBottom="80%"
        sizeMediumIconLeftTrueLeft="calc(50% - 326px)"
        unstyledButtonPadding="var(--padding-9xs) var(--padding-5xs)"
        buttonColor="#0a7ebf"
      />
      <b className={styles.b6}>主要広告主の業種/商材</b>
      <SizeMediumIconLeftTrue
        maskedIcon="/maskedicon.svg"
        button="主要広告主の業種/商材を選ぶ"
        sizeMediumIconLeftTruePosition="absolute"
        sizeMediumIconLeftTrueBorder="unset"
        sizeMediumIconLeftTrueBoxSizing="unset"
        sizeMediumIconLeftTrueHeight="5.16%"
        sizeMediumIconLeftTrueTop="60%"
        sizeMediumIconLeftTrueBottom="34.84%"
        sizeMediumIconLeftTrueLeft="calc(50% - 326px)"
        unstyledButtonPadding="var(--padding-9xs) var(--padding-5xs)"
        buttonColor="#0a7ebf"
      />
      <SizeMediumIconLeftTrue
        maskedIcon="/maskedicon.svg"
        button="デモグラを選ぶ"
        sizeMediumIconLeftTruePosition="absolute"
        sizeMediumIconLeftTrueBorder="unset"
        sizeMediumIconLeftTrueBoxSizing="unset"
        sizeMediumIconLeftTrueHeight="5.16%"
        sizeMediumIconLeftTrueTop="50.97%"
        sizeMediumIconLeftTrueBottom="43.87%"
        sizeMediumIconLeftTrueLeft="calc(50% - 326px)"
        unstyledButtonPadding="var(--padding-9xs) var(--padding-5xs)"
        buttonColor="#0a7ebf"
      />
      <b className={styles.b7}>下限費用感</b>
      <InputAWAvataraEnabled
        avatar="/avatar1.svg"
        label="toB"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="unset"
        inputAWAvataraEnabledHeight="32px"
        inputAWAvataraEnabledTop="calc(50% - 50px)"
        inputAWAvataraEnabledLeft="297px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="1px solid var(--gray)"
        labelColor="#222"
      />
      <InputAWAvataraEnabled
        avatar="/avatar2.svg"
        label="toC"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="unset"
        inputAWAvataraEnabledHeight="32px"
        inputAWAvataraEnabledTop="calc(50% - 50px)"
        inputAWAvataraEnabledLeft="242px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="1px solid var(--gray)"
        labelColor="#222"
      />
      <InputAWAvataraEnabled
        avatar="/avatar3.svg"
        label="両方"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="unset"
        inputAWAvataraEnabledHeight="32px"
        inputAWAvataraEnabledTop="calc(50% - 50px)"
        inputAWAvataraEnabledLeft="351px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="1px solid var(--gray)"
        labelColor="#222"
      />
      <div className={styles.textFieldoutlinedParent}>
        <SizeSmallStateEnabledHas
          label="選択してください"
          sizeSmallStateEnabledHasPosition="absolute"
          sizeSmallStateEnabledHasWidth="336px"
          sizeSmallStateEnabledHasTop="0px"
          sizeSmallStateEnabledHasLeft="0px"
          sizeSmallStateEnabledHasHeight="36px"
          inputBorder="1px solid var(--gray)"
          inputFlex="1"
          inputBackgroundColor="#fff"
          containerPadding="var(--padding-5xs) 0px var(--padding-6xs)"
          containerFlex="1"
          labelColor="#b3b3b3"
        />
        <img
          className={styles.arrowdropdownfilledIcon}
          alt=""
          src="/arrowdropdownfilled.svg"
        />
      </div>
      <div className={styles.groupChild} />
      <b className={styles.b8}>ジャンル</b>
      <div className={styles.groupItem} />
      <div className={styles.groupInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupChild1} />
      <div className={styles.groupChild2} />
      <div className={styles.groupChild3} />
      <div className={styles.groupChild4} />
      <SizeMediumIconLeftTrue
        maskedIcon="/maskedicon.svg"
        button="ターゲットを選ぶ"
        sizeMediumIconLeftTruePosition="absolute"
        sizeMediumIconLeftTrueBorder="unset"
        sizeMediumIconLeftTrueBoxSizing="unset"
        sizeMediumIconLeftTrueHeight="5.16%"
        sizeMediumIconLeftTrueTop="5.81%"
        sizeMediumIconLeftTrueBottom="89.03%"
        sizeMediumIconLeftTrueLeft="calc(50% - 326px)"
        unstyledButtonPadding="var(--padding-9xs) var(--padding-5xs)"
        buttonColor="#0a7ebf"
      />
      <div className={styles.groupChild5} />
      <InputAWAvataraEnabled
        avatar="/avatar4.svg"
        label="興味"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="unset"
        inputAWAvataraEnabledHeight="32px"
        inputAWAvataraEnabledTop="calc(50% - 162px)"
        inputAWAvataraEnabledLeft="303px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="1px solid var(--gray)"
        labelColor="#222"
      />
      <InputAWAvataraEnabled
        avatar="/avatar5.svg"
        label="認知"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="unset"
        inputAWAvataraEnabledHeight="32px"
        inputAWAvataraEnabledTop="calc(50% - 162px)"
        inputAWAvataraEnabledLeft="242px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="1px solid var(--gray)"
        labelColor="#222"
      />
      <InputAWAvataraEnabled
        avatar="/avatar6.svg"
        label="理解"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="unset"
        inputAWAvataraEnabledHeight="32px"
        inputAWAvataraEnabledTop="calc(50% - 162px)"
        inputAWAvataraEnabledLeft="364px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="1px solid var(--gray)"
        labelColor="#222"
      />
      <InputAWAvataraEnabled
        avatar="/avatar7.svg"
        label="購買 / 来店促進"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="unset"
        inputAWAvataraEnabledHeight="32px"
        inputAWAvataraEnabledTop="calc(50% - 162px)"
        inputAWAvataraEnabledLeft="425px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="1px solid var(--gray)"
        labelColor="#222"
      />
      <InputAWAvataraEnabled
        avatar="/avatar8.svg"
        label="推奨"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="unset"
        inputAWAvataraEnabledHeight="32px"
        inputAWAvataraEnabledTop="calc(50% - 162px)"
        inputAWAvataraEnabledLeft="645px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="1px solid var(--gray)"
        labelColor="#222"
      />
      <InputAWAvataraEnabled
        avatar="/avatar9.svg"
        label="リピート"
        icon="/-icon1.svg"
        showAvatar={false}
        showIcon={false}
        inputAWAvataraEnabledPosition="absolute"
        inputAWAvataraEnabledBackgroundColor="unset"
        inputAWAvataraEnabledHeight="32px"
        inputAWAvataraEnabledTop="calc(50% - 162px)"
        inputAWAvataraEnabledLeft="556px"
        inputAWAvataraEnabledBorderRadius="16px"
        inputAWAvataraEnabledBorder="1px solid var(--gray)"
        labelColor="#222"
      />
      <div className={styles.groupChild6} />
      <SizeMediumIconLeftFalse
        button="検索条件をクリア"
        sizeMediumIconLeftFalsePosition="absolute"
        sizeMediumIconLeftFalseBorder="1px solid var(--darkgray)"
        sizeMediumIconLeftFalseBoxSizing="border-box"
        sizeMediumIconLeftFalseTop="90.32%"
        sizeMediumIconLeftFalseLeft="calc(50% + 127px)"
        sizeMediumIconLeftFalseBackgroundColor="unset"
        sizeMediumIconLeftFalseWidth="200px"
        sizeMediumIconLeftFalseRight="unset"
        sizeMediumIconLeftFalseHeight="5.81%"
        sizeMediumIconLeftFalseBottom="3.87%"
        buttonColor="#222"
      />
      <SizeMediumIconLeftFalse
        button="検索する"
        sizeMediumIconLeftFalsePosition="absolute"
        sizeMediumIconLeftFalseBorder="1px solid var(--blue)"
        sizeMediumIconLeftFalseBoxSizing="border-box"
        sizeMediumIconLeftFalseTop="90.32%"
        sizeMediumIconLeftFalseLeft="calc(50% + 343px)"
        sizeMediumIconLeftFalseBackgroundColor="#0a7ebf"
        sizeMediumIconLeftFalseWidth="200px"
        sizeMediumIconLeftFalseRight="unset"
        sizeMediumIconLeftFalseHeight="5.81%"
        sizeMediumIconLeftFalseBottom="3.87%"
        buttonColor="#fff"
      />
    </div>
  );
};

export default FormContainer;
