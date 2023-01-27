import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import ModuleCard from "../components/ModuleCard";
import {
  Margin,
  Padding,
  FontSize,
  FontFamily,
  Border,
  Color,
} from "../GlobalStyles";

const HomeDashboard = () => {
  return (
    <View style={styles.homedashboard}>
      <Header
        fullName="Robert Wilson"
        photo={require("../assets/photo.png")}
        class1="Gwinnett 2023"
      />
      <View style={styles.mt16}>
        <Text style={[styles.title, styles.janTypo]}>Next event</Text>
        <EventCard />
      </View>
      <View style={[styles.modules, styles.mt16]}>
        <Text style={[styles.title, styles.janTypo]}>Modules</Text>
        <View style={styles.mt8}>
          <ModuleCard title="Finance Fundamentals" />
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
              <View style={[styles.studentParent, styles.ml140]}>
                <Text style={[styles.dueDate, styles.studentTypo]}>
                  Due Date:
                </Text>
                <Text style={[styles.text2, styles.ml4, styles.hClr]}>
                  03-09
                </Text>
              </View>
            </View>
            <View style={[styles.timeline, styles.mt8]}>
              <View style={styles.progress} />
            </View>
            <View
              style={[
                styles.buttonPrimary,
                styles.mt8,
                styles.headerSpaceBlock,
              ]}
            >
              <Text style={[styles.start, styles.startTypo]}>Start</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.tabBar,
          styles.mt16,
          styles.headerSpaceBlock,
          styles.headerSpaceBlock1,
        ]}
      >
        <View style={styles.day}>
          <Image
            style={[styles.navigationHouse01, styles.navigationHouse01Layout]}
            resizeMode="cover"
            source={require("../assets/navigation--house-01.png")}
          />
          <Text style={[styles.home1, styles.mt8, styles.home1Typo]}>Home</Text>
        </View>
        <View style={styles.day}>
          <Image
            style={[styles.navigationHouse01, styles.navigationHouse01Layout]}
            resizeMode="cover"
            source={require("../assets/calendar--calendar.png")}
          />
          <Text style={[styles.events1, styles.mt8, styles.home1Typo]}>
            Events
          </Text>
        </View>
        <View style={styles.day}>
          <Image
            style={[styles.navigationHouse01, styles.navigationHouse01Layout]}
            resizeMode="cover"
            source={require("../assets/user--usercircle.png")}
          />
          <Text style={[styles.events1, styles.mt8, styles.home1Typo]}>
            Profile
          </Text>
        </View>
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
  mt16: {
    marginTop: Margin.m_md,
  },
  headerSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  headerSpaceBlock1: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
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
  navigationHouse01Layout: {
    height: 32,
    width: 32,
  },
  home1Typo: {
    width: 55,
    lineHeight: 12,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.mobileLinkLarge,
  },
  title: {
    textAlign: "center",
    color: Color.gray_600,
  },
  undrawInTheOfficeReJtgcIcon: {
    width: 172,
  },
  title3: {
    color: Color.gray_600,
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
  },
  modules: {
    width: 342,
  },
  navigationHouse01: {
    overflow: "hidden",
  },
  home1: {
    color: Color.brown_100,
  },
  day: {
    alignItems: "center",
  },
  events1: {
    color: Color.gray_600,
  },
  tabBar: {
    borderColor: "#ffebeb",
    borderTopWidth: 2,
    width: 390,
    justifyContent: "space-between",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  homedashboard: {
    flex: 1,
    height: 1108,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default HomeDashboard;
