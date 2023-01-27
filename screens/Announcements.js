import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Announcements = () => {
  return (
    <View style={styles.announcements}>
      <Text style={[styles.jessica, styles.dateTypo1, styles.dateTypo2]}>
        Jessica
      </Text>
      <Text style={[styles.jessica1, styles.dateTypo]}>Jessica</Text>
      <Text style={[styles.jessica2, styles.dateTypo]}>Jessica</Text>
      <Text style={[styles.jessica3, styles.dateTypo1, styles.dateTypo2]}>
        Jessica
      </Text>
      <Text style={[styles.hiStudentsHope, styles.dateTypo1, styles.dateTypo2]}>
        Hi students! Hope you’re well. Don’t forget to bring your laptops!
      </Text>
      <Text style={[styles.hiStudentsHope1, styles.dateTypo]}>
        Hi students! Hope you’re well. Don’t forget to bring your laptops!
      </Text>
      <Text style={[styles.hiStudentsHope2, styles.dateTypo]}>
        Hi students! Hope you’re well. Don’t forget to bring your laptops!
      </Text>
      <Text
        style={[styles.hiStudentsHope3, styles.dateTypo1, styles.dateTypo2]}
      >
        Hi students! Hope you’re well. Don’t forget to bring your laptops!
      </Text>
      <Text style={[styles.date, styles.dateTypo1, styles.dateTypo2]}>
        Date
      </Text>
      <Text style={[styles.date1, styles.dateTypo]}>Date</Text>
      <Text style={[styles.date2, styles.dateTypo]}>Date</Text>
      <Text style={[styles.date3, styles.dateTypo1, styles.dateTypo2]}>
        Date
      </Text>
      <View style={styles.tabBar}>
        <View style={styles.home} />
        <View style={styles.home} />
        <View style={styles.home} />
      </View>
      <Text style={[styles.viewMore, styles.dateTypo1]}>View more</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateTypo1: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inter,
    fontWeight: "700",
    lineHeight: 12,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  dateTypo2: {
    left: 25,
    color: Color.black,
    fontFamily: FontFamily.inter,
    fontWeight: "700",
    lineHeight: 12,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  dateTypo: {
    left: 30,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.inter,
    fontWeight: "700",
    lineHeight: 12,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  jessica: {
    top: 93,
  },
  jessica1: {
    top: 201,
  },
  jessica2: {
    top: 309,
  },
  jessica3: {
    top: 404,
  },
  hiStudentsHope: {
    top: 120,
  },
  hiStudentsHope1: {
    top: 228,
  },
  hiStudentsHope2: {
    top: 336,
  },
  hiStudentsHope3: {
    top: 431,
  },
  date: {
    top: 147,
  },
  date1: {
    top: 255,
  },
  date2: {
    top: 363,
  },
  date3: {
    top: 458,
  },
  home: {
    display: "none",
  },
  tabBar: {
    marginTop: 384,
    marginLeft: -189.5,
    top: "50%",
    left: "50%",
    borderStyle: "solid",
    borderColor: "#ffebeb",
    borderTopWidth: 2,
    width: 390,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    backgroundColor: Color.white,
  },
  viewMore: {
    top: 570,
    left: 170,
  },
  announcements: {
    flex: 1,
    width: "100%",
    height: 940,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Announcements;
