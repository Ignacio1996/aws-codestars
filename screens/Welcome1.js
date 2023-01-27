import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontFamily,
  FontSize,
  Padding,
  Color,
  Border,
} from "../GlobalStyles";

const Welcome1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <View style={styles.welcome1}>
        <Image
          style={styles.illustrationIcon}
          resizeMode="cover"
          source={require("../assets/illustration1.png")}
        />
        <Text style={[styles.title, styles.mt16]}>
          <Text style={styles.welcomeTo}>Welcome to</Text>
          <Text style={styles.myRedEd}>MY RED ED</Text>
        </Text>
      </View>
      <View style={styles.mt126}>
        <View style={styles.buttonPrimary}>
          <TouchableOpacity
            style={styles.buttonSpaceBlock}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("false")}
          >
            <Text style={[styles.joinAsStudent, styles.logInTypo]}>
              Join as Student
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonPrimary2,
              styles.ml10,
              styles.buttonSpaceBlock,
            ]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("false")}
          >
            <Text style={[styles.joinAsStudent, styles.logInTypo]}>
              Join as Mentor
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.buttonsecondary, styles.mt16]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HomeDashboard")}
        >
          <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: Margin.m_md,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mt126: {
    marginTop: Margin.m_5xl,
  },
  logInTypo: {
    fontFamily: FontFamily.mobileLinkLarge,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileTextMedium_size,
    textAlign: "center",
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_2xs,
    backgroundColor: Color.brown_100,
    borderRadius: Border.br_lg,
    flexDirection: "row",
  },
  illustrationIcon: {
    width: 329,
    height: 329,
    overflow: "hidden",
  },
  welcomeTo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  myRedEd: {
    margin: Margin.m_6xs,
  },
  title: {
    fontSize: FontSize.mobileDisplayMediumBold_size,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.mobileDisplayMediumBold,
    width: 327,
    textAlign: "center",
    color: Color.brown_100,
  },
  welcome1: {
    alignItems: "center",
  },
  joinAsStudent: {
    color: Color.white,
  },
  buttonPrimary2: {
    width: 166,
  },
  buttonPrimary: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  logIn: {
    color: Color.brown_100,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.mobileTextMedium_size,
  },
  buttonsecondary: {
    borderStyle: "solid",
    borderColor: "#d94645",
    borderWidth: 2,
    width: 342,
    padding: Padding.p_3xs,
    borderRadius: Border.br_lg,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  welcome: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_sm,
    alignItems: "center",
  },
});

export default Welcome1;
