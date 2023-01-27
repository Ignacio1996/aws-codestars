const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import JoinClassModal from "./screens/JoinClassModal";
import Welcome from "./screens/Welcome";
import Splash1 from "./screens/Splash1";
import HomeDashboard from "./screens/HomeDashboard";
import Welcome1 from "./screens/Welcome1";
import ToggleButton from "./screens/ToggleButton";
import ToggleButton1 from "./screens/ToggleButton1";
import ToggleButton2 from "./screens/ToggleButton2";
import ToggleButton3 from "./screens/ToggleButton3";
import Home1 from "./screens/Home1";
import EventsUpcoming from "./screens/EventsUpcoming";
import EventsPast from "./screens/EventsPast";
import Profile from "./screens/Profile";
import Chats from "./screens/Chats";
import ChatWithAleksandra from "./screens/ChatWithAleksandra";
import Announcements from "./screens/Announcements";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Gilroy: require("./assets/fonts/Gilroy.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JoinClassModal"
              component={JoinClassModal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash1"
              component={Splash1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeDashboard"
              component={HomeDashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome1"
              component={Welcome1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToggleButton"
              component={ToggleButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToggleButton1"
              component={ToggleButton1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToggleButton2"
              component={ToggleButton2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ToggleButton3"
              component={ToggleButton3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home1"
              component={Home1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventsUpcoming"
              component={EventsUpcoming}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventsPast"
              component={EventsPast}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chats"
              component={Chats}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatWithAleksandra"
              component={ChatWithAleksandra}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Announcements"
              component={Announcements}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
