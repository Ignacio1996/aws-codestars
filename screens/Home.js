import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Margin,
  Padding,
  FontSize,
  FontFamily,
  Border,
  Color,
} from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.header, styles.headerSpaceBlock]}>
        <View style={styles.profile}>
          <Image
            style={styles.photoIcon}
            resizeMode="cover"
            source={require("../assets/photo.png")}
          />
          <View style={styles.ml5}>
            <Text style={[styles.fullName, styles.nameTypo]}>
              Darlene Robertson
            </Text>
            <Text style={[styles.student, styles.mt4, styles.studentTypo]}>
              Student
            </Text>
          </View>
        </View>
        <Text style={[styles.class, styles.ml85, styles.nameTypo]}>
          Class 2022
        </Text>
      </View>
      <View style={[styles.nextEvent, styles.mt16]}>
        <Text style={[styles.title, styles.janTypo]}>Next event</Text>
        <View style={[styles.event, styles.mt8]}>
          <View style={[styles.descriptionParent, styles.tabBarFlexBox]}>
            <View style={styles.description}>
              <View style={[styles.day, styles.dayBorder]}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.name1, styles.ml16]}>
                <Text
                  style={[
                    styles.eventName,
                    styles.eventNameLayout,
                    styles.nameTypo,
                  ]}
                >
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.tinemTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.tinem, styles.tinemTypo]}>18:00-19:30</Text>
          </View>
        </View>
      </View>
      <View style={[styles.modules, styles.mt16]}>
        <Text style={[styles.title, styles.janTypo]}>Modules</Text>
        <View style={styles.mt8}>
          <View style={[styles.module, styles.moduleBorder]}>
            <Image
              style={[styles.illustrationIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/illustration.png")}
            />
            <View style={[styles.description2, styles.mt8]}>
              <Text style={[styles.title2, styles.startTypo]}>
                Finance Fundamentals
              </Text>
              <Text style={[styles.bodyFlexBox, styles.mt8, styles.hClr]}>
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
              <View style={[styles.dueDateParent, styles.ml140]}>
                <Text style={[styles.dueDate, styles.studentTypo]}>
                  Due Date:
                </Text>
                <Text style={[styles.text1, styles.ml4, styles.hClr]}>
                  03-09
                </Text>
              </View>
            </View>
            <View style={[styles.timeline, styles.mt8]}>
              <View style={styles.progress} />
            </View>
            <View style={[styles.buttonPrimary, styles.mt8]}>
              <Text style={[styles.start, styles.startTypo]}>Start</Text>
            </View>
          </View>
          <View style={[styles.moduleBorder, styles.mt16]}>
            <Image
              style={[styles.undrawInTheOfficeReJtgcIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/undraw-in-the-office-re-jtgc.png")}
            />
            <View style={[styles.description2, styles.mt8]}>
              <Text
                style={[styles.title3, styles.bodyFlexBox, styles.nameTypo]}
              >
                Managing Your “E” Factor! Part 1
              </Text>
              <Text style={[styles.hClr, styles.mt8]}>
                Learn to manage your emotions and improve your relationships and
                life.
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
              <View style={[styles.dueDateParent, styles.ml140]}>
                <Text style={[styles.dueDate, styles.studentTypo]}>
                  Due Date:
                </Text>
                <Text style={[styles.text1, styles.ml4, styles.hClr]}>
                  03-09
                </Text>
              </View>
            </View>
            <View style={[styles.timeline, styles.mt8]}>
              <View style={styles.progress} />
            </View>
            <View style={[styles.buttonPrimary, styles.mt8]}>
              <Text style={[styles.start, styles.startTypo]}>Start</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
  },
  ml5: {
    marginLeft: Margin.m_4xs,
  },
  ml85: {
    marginLeft: Margin.m_3xl,
  },
  mt8: {
    marginTop: Margin.m_3xs,
  },
  ml16: {
    marginLeft: Margin.m_md,
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
  ml140: {
    marginLeft: Margin.m_6xl,
  },
  mt16: {
    marginTop: Margin.m_md,
  },
  headerSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
  },
  nameTypo: {
    fontWeight: "600",
    fontSize: FontSize.mobileTextSmall_size,
    lineHeight: 16,
  },
  studentTypo: {
    fontSize: FontSize.mobileLinkExtraSmall_size,
    fontFamily: FontFamily.mobileLinkLarge,
    fontWeight: "600",
    lineHeight: 16,
  },
  janTypo: {
    lineHeight: 26,
    fontSize: FontSize.mobileTextMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.mobileLinkLarge,
    fontWeight: "600",
  },
  tabBarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  dayBorder: {
    borderStyle: "solid",
    alignItems: "center",
  },
  eventNameLayout: {
    width: 98,
    textAlign: "left",
  },
  tinemTypo: {
    lineHeight: 18,
    fontSize: FontSize.mobileLinkExtraSmall_size,
    fontFamily: FontFamily.mobileLinkLarge,
  },
  moduleBorder: {
    padding: Padding.p_xs,
    borderWidth: 1,
    borderColor: "rgba(34, 34, 36, 0.2)",
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 148,
    overflow: "hidden",
  },
  startTypo: {
    display: "flex",
    fontFamily: FontFamily.mobileLinkLarge,
    fontWeight: "600",
    fontSize: FontSize.mobileTextSmall_size,
    alignItems: "center",
  },
  hClr: {
    color: Color.gray_500,
    lineHeight: 18,
    fontSize: FontSize.mobileLinkExtraSmall_size,
  },
  bodyFlexBox: {
    width: 288,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.mobileLinkLarge,
    alignItems: "center",
  },
  home2Typo: {
    width: 55,
    fontFamily: FontFamily.gilroy,
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  photoIcon: {
    borderRadius: Border.br_xl,
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  fullName: {
    color: Color.gray_700,
    textAlign: "left",
    fontFamily: FontFamily.mobileLinkLarge,
  },
  student: {
    color: Color.gray_900,
    textAlign: "left",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  class: {
    color: Color.brown_100,
    textAlign: "left",
    fontFamily: FontFamily.mobileLinkLarge,
  },
  header: {
    backgroundColor: Color.gray_200,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: Color.gray_600,
  },
  text: {
    width: 30,
    color: Color.primaryDark,
    textAlign: "center",
  },
  jan: {
    width: 50,
    color: Color.primaryDark,
    textAlign: "center",
  },
  day: {
    borderColor: "#c6c6c6",
    borderRightWidth: 2,
    paddingRight: Padding.p_3xs,
  },
  eventName: {
    color: Color.primaryDark,
    fontFamily: FontFamily.mobileLinkLarge,
  },
  description1: {
    color: Color.brown_300,
  },
  name1: {
    justifyContent: "center",
  },
  description: {
    height: 56,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  tinem: {
    textAlign: "right",
    color: Color.primaryDark,
  },
  descriptionParent: {
    width: 310,
  },
  event: {
    padding: Padding.p_3xs,
    backgroundColor: Color.primaryLight,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  nextEvent: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  illustrationIcon: {
    width: 141,
  },
  title2: {
    width: 188,
    color: Color.gray_600,
    textAlign: "left",
    lineHeight: 16,
    display: "flex",
  },
  learnTheBasics: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bodyTxt: {
    lineBreak: "anywhere",
    width: "100%",
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
    textAlign: "left",
    fontFamily: FontFamily.mobileLinkLarge,
  },
  dueDate: {
    color: Color.secondaryColor,
    textAlign: "center",
  },
  text1: {
    textAlign: "center",
    fontFamily: FontFamily.mobileLinkLarge,
  },
  dueDateParent: {
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
    borderRadius: Border.br_md,
    backgroundColor: Color.primaryLight,
  },
  start: {
    lineHeight: 22,
    color: Color.white,
    width: 252,
    justifyContent: "center",
    textAlign: "center",
  },
  buttonPrimary: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.brown_100,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  module: {
    justifyContent: "center",
  },
  undrawInTheOfficeReJtgcIcon: {
    width: 172,
  },
  title3: {
    color: Color.gray_600,
  },
  modules: {
    width: 342,
  },
  home: {
    flex: 1,
    height: 1108,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Home;
