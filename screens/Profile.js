import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Margin, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={[styles.profile, styles.tabBarBg]}>
      <View style={styles.content}>
        <Text style={[styles.title, styles.textClr]}>Profile</Text>
        <View style={[styles.logOut, styles.mt24]}>
          <View style={styles.action}>
            <View style={styles.iconText}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.text, styles.ml8, styles.textClr]}>
                Log out
              </Text>
            </View>
            <Image
              style={[styles.iconRight, styles.ml195, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon-right.png")}
            />
          </View>
          <View style={[styles.divider, styles.mt14, styles.tabBarBorder]} />
        </View>
      </View>
      <View
        style={[
          styles.tabBar,
          styles.mt626,
          styles.tabBarBorder,
          styles.tabBarBg,
        ]}
      >
        <View style={styles.home} />
        <View style={styles.home} />
        <View style={styles.home} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_3xs,
  },
  ml195: {
    marginLeft: 195,
  },
  mt14: {
    marginTop: 14,
  },
  mt24: {
    marginTop: Margin.m_lg,
  },
  mt626: {
    marginTop: 626,
  },
  tabBarBg: {
    backgroundColor: Color.white,
    alignItems: "center",
  },
  textClr: {
    color: Color.gray_600,
    fontFamily: FontFamily.mobileLinkLarge,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  tabBarBorder: {
    borderColor: "#ffebeb",
    borderStyle: "solid",
  },
  title: {
    fontSize: FontSize.mobileLinkLarge_size,
    lineHeight: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    fontSize: FontSize.mobileTextMedium_size,
    lineHeight: 26,
    textAlign: "left",
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconRight: {
    overflow: "hidden",
  },
  action: {
    flexDirection: "row",
  },
  divider: {
    borderTopWidth: 1,
    width: 343,
    height: 1,
  },
  logOut: {
    paddingTop: Padding.p_3xs,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  home: {
    display: "none",
  },
  tabBar: {
    borderTopWidth: 2,
    width: 390,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    flex: 1,
    width: "100%",
    paddingTop: Padding.p_xs,
    alignItems: "center",
  },
});

export default Profile;
