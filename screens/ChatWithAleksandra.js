import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const ChatWithAleksandra = () => {
  return (
    <View style={styles.chatWithAleksandra}>
      <View style={[styles.chatWithAleksandraChild, styles.chatChildBg]} />
      <View
        style={[styles.chatWithAleksandraItem, styles.rectangleViewPosition]}
      />
      <View
        style={[
          styles.chatWithAleksandraInner,
          styles.chatChildBg,
          styles.chatBg,
        ]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[
          styles.chatWithAleksandraChild1,
          styles.chatChildBg,
          styles.chatBg,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatChildBg: {
    backgroundColor: Color.gray_400,
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 264,
    backgroundColor: Color.gray_400,
    left: 0,
    position: "absolute",
  },
  chatBg: {
    backgroundColor: Color.gray_400,
    position: "absolute",
  },
  chatWithAleksandraChild: {
    top: 850,
    width: 459,
    height: 72,
    left: 0,
    backgroundColor: Color.gray_400,
    position: "absolute",
  },
  chatWithAleksandraItem: {
    top: 115,
    height: 65,
  },
  chatWithAleksandraInner: {
    top: 253,
    left: 199,
    width: 260,
    height: 74,
  },
  rectangleView: {
    top: 375,
    height: 70,
  },
  chatWithAleksandraChild1: {
    top: 481,
    left: 227,
    width: 232,
    height: 81,
  },
  chatWithAleksandra: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 940,
    overflow: "hidden",
  },
});

export default ChatWithAleksandra;
