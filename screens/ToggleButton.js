import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, FontFamily, FontSize, Color } from "../GlobalStyles";

const ToggleButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.toggleButton}>
      <View style={[styles.button, styles.buttonLayout]}>
        <Text style={[styles.pastEvents, styles.eventsTypo]}>Past events</Text>
      </View>
      <Pressable
        style={[styles.button1, styles.ml16, styles.buttonLayout]}
        onPress={() => navigation.navigate("EventsUpcoming")}
      >
        <Text style={[styles.upcomingEvents, styles.eventsTypo]}>
          Upcoming events
        </Text>
      </Pressable>
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
    top: 16,
    left: 44,
    lineHeight: 16,
    fontWeight: "600",
    color: Color.brown_100,
  },
  button: {
    borderColor: "#d94645",
  },
  upcomingEvents: {
    top: 13,
    left: 24,
    lineHeight: 22,
    color: Color.gray_600,
  },
  button1: {
    borderColor: "#222224",
  },
  toggleButton: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
});

export default ToggleButton;
