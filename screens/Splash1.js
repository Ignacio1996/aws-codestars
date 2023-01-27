import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color, Padding } from "../GlobalStyles";

const Splash1 = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    width: 166,
    height: 64,
  },
  splash: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_4xl,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash1;
