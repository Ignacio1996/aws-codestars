import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Margin,
  Padding,
  FontFamily,
  FontSize,
  Color,
  Border,
} from "../GlobalStyles";

const Home1 = () => {
  return (
    <View style={styles.home1}>
      <View style={[styles.header, styles.headerSpaceBlock]}>
        <View style={styles.profile}>
          <Image
            style={styles.photoIcon}
            resizeMode="cover"
            source={require("../assets/photo.png")}
          />
          <View style={styles.ml5}>
            <Text
              style={[styles.fullName, styles.titleTypo1, styles.titleTypo2]}
            >
              Darlene Robertson
            </Text>
            <Text style={[styles.student, styles.mt4, styles.studentTypo]}>
              Student
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.class,
            styles.ml85,
            styles.titleTypo1,
            styles.titleTypo2,
          ]}
        >
          Class 2022
        </Text>
      </View>
      <View style={styles.mt16}>
        <Text style={[styles.title, styles.titleTypo]}>Next event</Text>
        <View style={[styles.event, styles.mt8]}>
          <View style={styles.description}>
            <View style={styles.day}>
              <Text style={[styles.text, styles.titleTypo]}>12</Text>
              <Text style={[styles.jan, styles.mt4, styles.titleTypo]}>
                Jan
              </Text>
            </View>
            <View style={[styles.divider, styles.ml16]} />
            <View style={[styles.name1, styles.ml16]}>
              <Text
                style={[
                  styles.eventName,
                  styles.eventNameLayout,
                  styles.titleTypo1,
                  styles.titleTypo2,
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
          <Text style={[styles.tinem, styles.ml60, styles.tinemTypo]}>
            18:00-19:30
          </Text>
        </View>
      </View>
      <View style={[styles.modules, styles.mt16]}>
        <Text style={[styles.title1, styles.titleTypo]}>Modules</Text>
        <View style={[styles.cards, styles.mt8]}>
          <View style={styles.module}>
            <Image
              style={[styles.illustrationIcon, styles.illustrationIconLayout]}
              resizeMode="cover"
              source={require("../assets/illustration4.png")}
            />
            <View style={[styles.description2, styles.mt13]}>
              <Text
                style={[
                  styles.title2,
                  styles.bodyFlexBox,
                  styles.titleTypo1,
                  styles.titleTypo2,
                ]}
              >
                <Text style={styles.titleTxt}>
                  <Text style={styles.financeFundamentals}>
                    Finance Fundamentals
                  </Text>
                </Text>
              </Text>
              <Text
                style={[
                  styles.body,
                  styles.mt8,
                  styles.bodyTypo,
                  styles.bodyFlexBox,
                ]}
              >
                <Text style={styles.titleTxt}>
                  <Text style={styles.financeFundamentals}>
                    Learn the Basics of Money Management
                  </Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.profile, styles.mt13]}>
              <View style={styles.profile}>
                <Image
                  style={styles.accessTimeIcon}
                  resizeMode="cover"
                  source={require("../assets/access-time.png")}
                />
                <Text style={[styles.h, styles.ml4, styles.bodyTypo]}>3 h</Text>
              </View>
              <View style={[styles.cards, styles.ml72]}>
                <Text style={[styles.dueDate, styles.studentTypo]}>
                  Due Date:
                </Text>
                <Text style={[styles.text1, styles.ml4, styles.bodyTypo]}>
                  03-09
                </Text>
              </View>
            </View>
            <View style={[styles.timeline, styles.mt13]}>
              <View style={styles.progress} />
            </View>
            <View style={[styles.buttonPrimary, styles.mt13]}>
              <Text
                style={[styles.start, styles.bodyFlexBox, styles.titleTypo1]}
              >
                Start
              </Text>
            </View>
          </View>
          <View style={[styles.module, styles.ml16]}>
            <Image
              style={[styles.illustrationIcon1, styles.illustrationIconLayout]}
              resizeMode="cover"
              source={require("../assets/illustration5.png")}
            />
            <View style={[styles.description2, styles.mt13]}>
              <Text
                style={[
                  styles.title2,
                  styles.bodyFlexBox,
                  styles.titleTypo1,
                  styles.titleTypo2,
                ]}
              >
                Managing Your “E” Factor! Part 1
              </Text>
              <Text
                style={[
                  styles.body,
                  styles.mt8,
                  styles.bodyTypo,
                  styles.bodyFlexBox,
                ]}
              >
                Learn to manage your emotions and improve your relationships and
                life.
              </Text>
            </View>
            <View style={[styles.profile, styles.mt13]}>
              <View style={styles.profile}>
                <Image
                  style={styles.accessTimeIcon}
                  resizeMode="cover"
                  source={require("../assets/access-time.png")}
                />
                <Text style={[styles.h, styles.ml4, styles.bodyTypo]}>3 h</Text>
              </View>
              <View style={[styles.cards, styles.ml72]}>
                <Text style={[styles.dueDate, styles.studentTypo]}>
                  Due Date:
                </Text>
                <Text style={[styles.text1, styles.ml4, styles.bodyTypo]}>
                  03-09
                </Text>
              </View>
            </View>
            <View style={[styles.timeline, styles.mt13]}>
              <View style={styles.progress} />
            </View>
            <View style={[styles.buttonPrimary, styles.mt13]}>
              <Text
                style={[styles.start, styles.bodyFlexBox, styles.titleTypo1]}
              >
                Start
              </Text>
            </View>
          </View>
          <View style={[styles.module, styles.ml16]}>
            <Image
              style={[styles.illustrationIcon2, styles.illustrationIconLayout]}
              resizeMode="cover"
              source={require("../assets/illustration6.png")}
            />
            <View style={[styles.description4, styles.mt13]}>
              <Text
                style={[
                  styles.title4,
                  styles.bodyFlexBox,
                  styles.titleTypo1,
                  styles.titleTypo2,
                ]}
              >
                <Text style={styles.titleTxt}>
                  <Text style={styles.financeFundamentals}>
                    Your Voice Matters
                  </Text>
                </Text>
              </Text>
              <Text
                style={[
                  styles.body2,
                  styles.mt8,
                  styles.bodyTypo,
                  styles.bodyFlexBox,
                ]}
              >
                <Text style={styles.titleTxt}>
                  <Text style={styles.financeFundamentals}>
                    Learn how your voice builds the world around you.
                  </Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.profile, styles.mt13]}>
              <View style={styles.profile}>
                <Image
                  style={styles.accessTimeIcon}
                  resizeMode="cover"
                  source={require("../assets/access-time6.png")}
                />
                <Text style={[styles.h, styles.ml4, styles.bodyTypo]}>3 h</Text>
              </View>
              <View style={[styles.cards, styles.ml72]}>
                <Text style={[styles.dueDate, styles.studentTypo]}>
                  Due Date:
                </Text>
                <Text style={[styles.text1, styles.ml4, styles.bodyTypo]}>
                  03-09
                </Text>
              </View>
            </View>
            <View style={[styles.timeline, styles.mt13]}>
              <View style={styles.progress} />
            </View>
            <View style={[styles.buttonPrimary, styles.mt13]}>
              <Text
                style={[styles.start, styles.bodyFlexBox, styles.titleTypo1]}
              >
                Start
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.mt16, styles.headerSpaceBlock]}>
        <View style={styles.day}>
          <Image
            style={styles.navigationHouse01}
            resizeMode="cover"
            source={require("../assets/navigation--house-01.png")}
          />
          <Text style={[styles.home2, styles.mt8, styles.home2Typo]}>Home</Text>
        </View>
        <View style={[styles.day, styles.ml88]}>
          <Image
            style={styles.navigationHouse01}
            resizeMode="cover"
            source={require("../assets/calendar--calendar5.png")}
          />
          <Text style={[styles.events1, styles.mt8, styles.home2Typo]}>
            Events
          </Text>
        </View>
        <View style={[styles.day, styles.ml88]}>
          <Image
            style={styles.navigationHouse01}
            resizeMode="cover"
            source={require("../assets/user--usercircle.png")}
          />
          <Text style={[styles.events1, styles.mt8, styles.home2Typo]}>
            Profile
          </Text>
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
  ml60: {
    marginLeft: Margin.m_xl,
  },
  ml4: {
    marginLeft: Margin.m_5xs,
  },
  ml72: {
    marginLeft: Margin.m_2xl,
  },
  mt13: {
    marginTop: Margin.m_sm,
  },
  ml88: {
    marginLeft: Margin.m_4xl,
  },
  mt16: {
    marginTop: Margin.m_md,
  },
  headerSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  titleTypo1: {
    fontFamily: FontFamily.mobileLinkLarge,
    fontWeight: "600",
    fontSize: FontSize.mobileTextSmall_size,
  },
  titleTypo2: {
    lineHeight: 16,
    fontWeight: "600",
    fontSize: FontSize.mobileTextSmall_size,
  },
  studentTypo: {
    fontSize: FontSize.mobileLinkExtraSmall_size,
    fontFamily: FontFamily.mobileLinkLarge,
    fontWeight: "600",
    lineHeight: 16,
  },
  titleTypo: {
    lineHeight: 26,
    fontSize: FontSize.mobileTextMedium_size,
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
  illustrationIconLayout: {
    height: 120,
    overflow: "hidden",
  },
  bodyFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  bodyTypo: {
    color: Color.gray_500,
    lineHeight: 18,
    fontSize: FontSize.mobileLinkExtraSmall_size,
    fontFamily: FontFamily.mobileLinkLarge,
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
  },
  header: {
    backgroundColor: Color.gray_200,
    paddingVertical: Padding.p_3xs,
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
    alignItems: "center",
  },
  divider: {
    borderColor: "rgba(217, 70, 69, 0.3)",
    borderRightWidth: 1,
    width: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  eventName: {
    color: Color.primaryDark,
  },
  description1: {
    color: Color.brown_300,
  },
  name1: {
    justifyContent: "center",
  },
  description: {
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  tinem: {
    textAlign: "right",
    color: Color.primaryDark,
  },
  event: {
    padding: Padding.p_3xs,
    backgroundColor: Color.primaryLight,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  title1: {
    color: Color.gray_600,
    textAlign: "left",
  },
  illustrationIcon: {
    width: 114,
  },
  financeFundamentals: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  titleTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  title2: {
    width: 216,
    color: Color.gray_600,
    textAlign: "left",
  },
  body: {
    width: 216,
    textAlign: "left",
  },
  description2: {
    width: 216,
  },
  accessTimeIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  h: {
    textAlign: "left",
  },
  dueDate: {
    color: Color.secondaryColor,
    textAlign: "center",
  },
  text1: {
    textAlign: "center",
  },
  cards: {
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
    paddingRight: Padding.p_xl,
    borderRadius: Border.br_md,
    backgroundColor: Color.primaryLight,
  },
  start: {
    lineHeight: 22,
    color: Color.white,
    width: 184,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.mobileTextSmall_size,
    display: "flex",
  },
  buttonPrimary: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.brown_100,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  module: {
    borderColor: "rgba(34, 34, 36, 0.2)",
    borderWidth: 1,
    paddingHorizontal: Padding.p_4xs,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  illustrationIcon1: {
    width: 139,
  },
  illustrationIcon2: {
    width: 152,
  },
  title4: {
    width: 220,
    color: Color.gray_600,
    textAlign: "left",
  },
  body2: {
    width: 220,
    textAlign: "left",
  },
  description4: {
    width: 220,
  },
  modules: {
    width: 342,
    height: 514,
  },
  navigationHouse01: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  home2: {
    color: Color.brown_100,
  },
  events1: {
    color: Color.gray_600,
  },
  tabBar: {
    borderColor: "#ffebeb",
    borderTopWidth: 2,
    width: 390,
    borderStyle: "solid",
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.white,
  },
  home1: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Home1;
