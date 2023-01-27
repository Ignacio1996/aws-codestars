import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const JoinClassModal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.joinclassmodal}>
      <View style={styles.joinClass}>
        <Text style={[styles.title, styles.titleFlexBox]}>Join Class</Text>
        <Text
          style={[
            styles.description,
            styles.mt12,
            styles.joinClass1Typo,
            styles.titleFlexBox,
          ]}
        >
          Ask for the class code to access the modules.
        </Text>
        <TextInput
          style={[styles.input, styles.mt12, styles.inputSpaceBlock]}
          placeholder="Enter Class ID"
          keyboardType="default"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
        />
        <TouchableOpacity
          style={[styles.button, styles.mt12]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.joinClass1, styles.joinClass1Typo]}>
            Join Class
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.tabBar, styles.mt48, styles.inputSpaceBlock]}>
        <View style={styles.home}>
          <Image
            style={styles.navigationHouse01}
            resizeMode="cover"
            source={require("../assets/navigation--house-012.png")}
          />
          <Text style={[styles.home1, styles.mt8, styles.home1Typo]}>Home</Text>
        </View>
        <View style={[styles.home, styles.ml88]}>
          <Image
            style={styles.navigationHouse01}
            resizeMode="cover"
            source={require("../assets/calendar--calendar.png")}
          />
          <Text style={[styles.events1, styles.mt8, styles.home1Typo]}>
            Events
          </Text>
        </View>
        <View style={[styles.home, styles.ml88]}>
          <Image
            style={styles.navigationHouse01}
            resizeMode="cover"
            source={require("../assets/user--usercircle2.png")}
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
  mt12: {
    marginTop: Margin.m_xs,
  },
  mt8: {
    marginTop: Margin.m_3xs,
  },
  ml88: {
    marginLeft: Margin.m_4xl,
  },
  mt48: {
    marginTop: 48,
  },
  titleFlexBox: {
    height: 47,
    display: "flex",
    color: Color.black,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  joinClass1Typo: {
    fontFamily: FontFamily.mobileLinkLarge,
    fontSize: FontSize.mobileTextMedium_size,
    textAlign: "center",
  },
  inputSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.white,
  },
  home1Typo: {
    width: 55,
    fontFamily: FontFamily.gilroy,
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  title: {
    fontSize: FontSize.mobileDisplaySmallBold_size,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.mobileDisplayMediumBold,
    textAlign: "center",
    height: 47,
    display: "flex",
    color: Color.black,
    alignSelf: "stretch",
  },
  description: {
    lineHeight: 26,
    height: 47,
    display: "flex",
    color: Color.black,
    alignSelf: "stretch",
    fontSize: FontSize.mobileTextMedium_size,
  },
  input: {
    borderRadius: Border.br_sm,
    borderColor: "rgba(0, 0, 0, 0.38)",
    borderWidth: 1,
    width: 342,
  },
  joinClass1: {
    lineHeight: 24,
    fontWeight: "600",
    color: Color.white,
  },
  button: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.brown_100,
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  joinClass: {
    width: 342,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationHouse01: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  home1: {
    color: Color.brown_100,
  },
  home: {
    alignItems: "center",
  },
  events1: {
    color: Color.gray_600,
  },
  tabBar: {
    borderColor: "#ffebeb",
    borderTopWidth: 2,
    width: 390,
    display: "none",
    justifyContent: "center",
  },
  joinclassmodal: {
    flex: 1,
    width: "100%",
    paddingVertical: Padding.p_3xl,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.white,
  },
});

export default JoinClassModal;
