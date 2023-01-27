import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Margin, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const ModuleCard = ({ title }) => {
  return (
    <View style={[styles.module, styles.moduleBorder]}>
      <Image
        style={[styles.illustrationIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/illustration.png")}
      />
      <View style={[styles.description2, styles.mt8]}>
        <Text style={[styles.title2, styles.startTypo, styles.title2FlexBox]}>
          {title}
        </Text>
        <Text
          style={[
            styles.bodyFlexBox,
            styles.mt8,
            styles.hClr,
            styles.title2FlexBox,
          ]}
        >
          <Text style={styles.bodyTxt}>
            <Text style={styles.learnTheBasics}>
              Learn the Basics of Money Management
            </Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.profile, styles.mt8]}>
        <View style={styles.profile}>
          <Image
            style={styles.accessTimeIcon}
            resizeMode="cover"
            source={require("../assets/access-time.png")}
          />
          <Text style={[styles.h, styles.ml4, styles.hClr]}>3 h</Text>
        </View>
        <View style={[styles.studentParent, styles.ml140]}>
          <Text style={[styles.dueDate, styles.studentTypo]}>Due Date:</Text>
          <Text style={[styles.text2, styles.ml4, styles.hClr]}>03-09</Text>
        </View>
      </View>
      <View style={[styles.timeline, styles.mt8]}>
        <View style={styles.progress} />
      </View>
      <View style={[styles.buttonPrimary, styles.mt8, styles.headerSpaceBlock]}>
        <Text style={[styles.start, styles.startTypo]}>Start</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_3xs,
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
  ml140: {
    marginLeft: Margin.m_6xl,
  },
  title2FlexBox: {
    display: "flex",
    textAlign: "left",
  },
  illustrationIcon: {
    width: 141,
  },
  title2: {
    width: 188,
    color: Color.gray_600,
    lineHeight: 16,
  },
  learnTheBasics: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bodyTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  bodyFlexBox: {
    width: 288,
    alignItems: "center",
    fontFamily: FontFamily.mobileLinkLarge,
  },
  description2: {
    width: 294,
  },
  accessTimeIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  h: {
    fontFamily: FontFamily.mobileLinkLarge,
    textAlign: "left",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  dueDate: {
    color: Color.secondaryColor,
    textAlign: "center",
  },
  text2: {
    textAlign: "center",
    fontFamily: FontFamily.mobileLinkLarge,
  },
  studentParent: {
    flexDirection: "row",
  },
  progress: {
    backgroundColor: Color.primaryDark,
    width: 68,
    height: 4,
    borderRadius: Border.br_md,
    overflow: "hidden",
  },
  timeline: {
    paddingRight: Padding.p_2xl,
    backgroundColor: Color.primaryLight,
    borderRadius: Border.br_md,
  },
  start: {
    lineHeight: 22,
    color: Color.white,
    width: 252,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonPrimary: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.brown_100,
    paddingHorizontal: Padding.p_2xs,
  },
  module: {
    justifyContent: "center",
  },
});

export default ModuleCard;
