import { FunctionComponent } from "react";
import SizeSmallIconLeftFalseI from "../components/SizeSmallIconLeftFalseI";
import FormContainer from "../components/FormContainer";
import MediaComparisonContainer from "../components/MediaComparisonContainer";
import MediaCardContainer from "../components/MediaCardContainer";
import FormContainer1 from "../components/FormContainer1";
import Heading from "../components/Heading";
import styles from "./K10.module.css";
const K10: FunctionComponent = () => {
  return (
    <div className={styles.k10}>
      <SizeSmallIconLeftFalseI
        button="メディアを比較"
        maskedIcon="/masked-icon6.svg"
        sizeSmallIconLeftFalseIPosition="absolute"
        sizeSmallIconLeftFalseIBorder="unset"
        sizeSmallIconLeftFalseIBoxSizing="unset"
        sizeSmallIconLeftFalseIHeight="1.74%"
        sizeSmallIconLeftFalseITop="36.1%"
        sizeSmallIconLeftFalseIBottom="62.16%"
        sizeSmallIconLeftFalseILeft="calc(50% - 440px)"
        sizeSmallIconLeftFalseIBackgroundColor="#222"
        sizeSmallIconLeftFalseIWidth="unset"
        unstyledButtonPadding="var(--padding-7xs) var(--padding-base)"
        buttonColor="#fff"
      />
      <FormContainer />
      <MediaComparisonContainer />
      <MediaCardContainer />
      <FormContainer1 />
      <Heading
        prop="メディア一覧"
        headingPosition="absolute"
        headingTop="0px"
        headingLeft="256px"
        bgBorderBottom="1px solid var(--lightgray)"
      />
    </div>
  );
};

export default K10;
