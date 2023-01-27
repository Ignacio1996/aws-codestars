import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, FontFamily, FontSize, Color } from "../GlobalStyles";

const ToggleButton2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.toggleButton}>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={() => navigation.navigate("EventsPast")}
      >
        <Text style={[styles.pastEvents, styles.eventsTypo]}>Past events</Text>
      </Pressable>
      <View style={[styles.button1, styles.ml16, styles.buttonLayout]}>
        <Text style={[styles.upcomingEvents, styles.eventsTypo]}>
          Upcoming events
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_md,
  },
  buttonLayout: {
    overflow: "hidden",
    height: 48,
    width: 163,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  eventsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileLinkLarge,
    fontSize: FontSize.mobileTextSmall_size,
    position: "absolute",
  },
  pastEvents: {
    top: 13,
    left: 45,
    lineHeight: 22,
    color: Color.gray_600,
  },
  button: {
    borderColor: "#222224",
  },
  upcomingEvents: {
    top: 16,
    left: 19,
    lineHeight: 16,
    fontWeight: "600",
    color: Color.brown_100,
  },
  button1: {
    borderColor: "#d94645",
  },
  toggleButton: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
});

export default ToggleButton2;
