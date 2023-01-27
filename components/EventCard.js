import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Margin, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const EventCard = () => {
  return (
    <View style={[styles.event, styles.mt8]}>
      <View style={styles.description}>
        <View style={styles.day}>
          <Text style={[styles.text1, styles.janTypo, styles.janFlexBox]}>
            12
          </Text>
          <Text
            style={[styles.jan, styles.mt4, styles.janTypo, styles.janFlexBox]}
          >
            Jan
          </Text>
        </View>
        <View style={[styles.divider, styles.ml16]} />
        <View style={[styles.name1, styles.ml16]}>
          <Text
            style={[styles.eventName, styles.eventNameLayout, styles.nameTypo]}
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
  janFlexBox: {
    textAlign: "center",
    color: Color.primaryDark,
  },
  text1: {
    width: 30,
  },
  jan: {
    width: 50,
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
    fontFamily: FontFamily.mobileLinkLarge,
    color: Color.primaryDark,
  },
  description1: {
    color: Color.brown_300,
  },
  name1: {
    justifyContent: "center",
  },
  description: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
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
});

export default EventCard;
