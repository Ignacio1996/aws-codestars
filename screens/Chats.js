import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Chats = () => {
  return (
    <View style={styles.chats}>
      <View style={[styles.chatsChild, styles.chatsLayout]} />
      <View style={[styles.chatsItem, styles.chatsLayout]} />
      <View style={[styles.chatsInner, styles.chatsLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  chatsLayout: {
    height: 72,
    width: 459,
    backgroundColor: Color.gray_400,
    left: 0,
    position: "absolute",
  },
  chatsChild: {
    top: 85,
  },
  chatsItem: {
    top: 188,
  },
  chatsInner: {
    top: 291,
  },
  chats: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 940,
    overflow: "hidden",
  },
});

export default Chats;
