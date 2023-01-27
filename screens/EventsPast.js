import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, Switch, View } from "react-native";
import {
  Margin,
  FontSize,
  Color,
  FontFamily,
  Border,
  Padding,
} from "../GlobalStyles";

const EventsPast = () => {
  const [switchLabelValue, setSwitchLabelValue] = useState(false);

  return (
    <View style={styles.eventspast}>
      <View style={styles.content}>
        <Text style={styles.title}>Upcoming and past events</Text>
        <Switch
          style={[styles.switchLabel, styles.mt24]}
          value={switchLabelValue}
          onValueChange={setSwitchLabelValue}
          thumbColor="#bfbfbf"
          trackColor={{ false: "#939393", true: "#222224" }}
        />
        <View style={styles.mt24}>
          <View style={[styles.event, styles.eventBorder]}>
            <View style={styles.description}>
              <View style={styles.content}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.ml60, styles.timeTypo]}>
              18:00-19:30
            </Text>
          </View>
          <View style={[styles.event, styles.mt16, styles.eventBorder]}>
            <View style={styles.description}>
              <View style={styles.content}>
                <Text style={[styles.text, styles.janTypo]}>12</Text>
                <Text style={[styles.jan, styles.mt4, styles.janTypo]}>
                  Jan
                </Text>
              </View>
              <View style={[styles.divider, styles.ml16, styles.eventBorder]} />
              <View style={[styles.name, styles.ml16]}>
                <Text style={[styles.eventName, styles.eventNameLayout]}>
                  Event Name
                </Text>
                <Text
                  style={[
                    styles.description1,
                    styles.mt8,
                    styles.timeTypo,
                    styles.eventNameLayout,
                  ]}
                >
                  Description
                </Text>
              </View>
            </View>
            <Text style={[styles.time, styles.ml60, styles.timeTypo]}>
              18:00-19:30
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.tabBar, styles.mt418]}>
        <View style={styles.home} />
        <View style={styles.home} />
        <View style={styles.home} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_5xs,
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
  mt16: {
    marginTop: Margin.m_md,
  },
  mt24: {
    marginTop: Margin.m_lg,
  },
  mt418: {
    marginTop: 418,
  },
  eventBorder: {
    borderColor: "rgba(34, 34, 36, 0.22)",
    borderStyle: "solid",
  },
  janTypo: {
    lineHeight: 26,
    fontSize: FontSize.mobileTextMedium_size,
    color: Color.gray_800,
    textAlign: "center",
    fontFamily: FontFamily.mobileLinkLarge,
    fontWeight: "600",
  },
  eventNameLayout: {
    width: 98,
    textAlign: "left",
  },
  timeTypo: {
    lineHeight: 18,
    fontSize: FontSize.mobileLinkExtraSmall_size,
    fontFamily: FontFamily.mobileLinkLarge,
  },
  title: {
    fontSize: FontSize.mobileLinkLarge_size,
    lineHeight: 30,
    textAlign: "center",
    color: Color.gray_600,
    fontFamily: FontFamily.mobileLinkLarge,
    fontWeight: "600",
  },
  switchLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    width: 30,
    color: Color.gray_800,
  },
  jan: {
    width: 50,
    color: Color.gray_800,
  },
  content: {
    alignItems: "center",
  },
  divider: {
    borderRightWidth: 1,
    width: 1,
    alignSelf: "stretch",
  },
  eventName: {
    fontSize: FontSize.mobileTextSmall_size,
    lineHeight: 16,
    color: Color.gray_600,
    fontFamily: FontFamily.mobileLinkLarge,
    fontWeight: "600",
    width: 98,
    textAlign: "left",
  },
  description1: {
    color: Color.gray_800,
  },
  name: {
    justifyContent: "center",
  },
  description: {
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    textAlign: "right",
    color: Color.gray_600,
  },
  event: {
    borderRadius: Border.br_xs,
    borderWidth: 1,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  home: {
    display: "none",
  },
  tabBar: {
    borderColor: "#ffebeb",
    borderTopWidth: 2,
    width: 390,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "space-between",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  eventspast: {
    flex: 1,
    width: "100%",
    paddingTop: Padding.p_xs,
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default EventsPast;
