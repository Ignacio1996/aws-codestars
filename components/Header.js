import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Margin, Color, Border, FontFamily } from "../GlobalStyles";

const Header = ({ fullName, photo, class1 }) => {
  return (
    <View
      style={[styles.header, styles.headerSpaceBlock, styles.headerSpaceBlock1]}
    >
      <View style={styles.profile}>
        <Image style={styles.photoIcon} resizeMode="cover" source={photo} />
        <View>
          <Text style={[styles.fullName, styles.nameTypo]}>{fullName}</Text>
          <View style={[styles.studentParent, styles.mt8]}>
            <Text style={[styles.classClr, styles.studentTypo]}>Student</Text>
            <Text style={[styles.classClr, styles.ml8, styles.studentTypo]}>
              •
            </Text>
            <Text
              style={[
                styles.class,
                styles.ml8,
                styles.nameTypo,
                styles.classClr,
              ]}
            >
              {class1}
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.navigationHouse01Layout, styles.ml109]}
        resizeMode="cover"
        source={require("../assets/notificationtrue.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: Margin.m_3xs,
  },
  mt8: {
    marginTop: Margin.m_3xs,
  },
  ml5: {
    marginLeft: Margin.m_4xs,
  },
  ml109: {
    marginLeft: 109,
  },
  classClr: {
    color: Color.brown_100,
    textAlign: "left",
  },
  photoIcon: {
    borderRadius: Border.br_xl,
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  fullName: {
    color: Color.gray_700,
    fontFamily: FontFamily.mobileLinkLarge,
    textAlign: "left",
  },
  class: {
    fontFamily: FontFamily.mobileLinkLarge,
  },
  studentParent: {
    flexDirection: "row",
  },
  profile: {
    alignItems: "center",
    flexDirection: "row",
  },
  navigationHouse01Layout: {
    height: 32,
    width: 32,
  },
  header: {
    backgroundColor: Color.gray_200,
  },
});

export default Header;
