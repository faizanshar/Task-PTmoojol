import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

// import package
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import HomeScreen from "./src/screens/HomeScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import MessageScreen from "./src/screens/MessageScreen";
import AccountScreen from "./src/screens/AccountScreen";
import Mooku from "./src/screens/Mooku";

// icons from expo
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#e6443a",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={{
                  uri: "https://res.cloudinary.com/falovi/image/upload/v1647718549/moojol/icons/homee_r8xu1r.png",
                }}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? "#ffff" : "#ffff",
                }}
              />
            </View>
          ),
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            marginBottom: 3,
            color: "#ffffff",
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="md-document-text-outline"
              size={size}
              color={"#ffff"}
            />
          ),
          tabBarLabel: "Riwayat",
          tabBarLabelStyle: {
            marginBottom: 3,
            color: "#ffffff",
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Mooku"
        component={Mooku}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={{
                  uri: "https://res.cloudinary.com/falovi/image/upload/v1647718709/moojol/icons/logomooku_jeaqd4.png",
                }}
                style={styles.logo}
              />
            );
          },
          tabBarLabel: "Moocu",
          tabBarLabelStyle: {
            marginBottom: 3,
            color: "#ffffff",
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={size}
              color={"#ffff"}
            />
          ),
          tabBarLabel: "Pesan",
          tabBarLabelStyle: {
            marginBottom: 3,
            color: "#ffffff",
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={size}
              color={"#ffff"}
            />
          ),
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            marginBottom: 3,
            color: "#ffffff",
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={MyTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 20,
    height: 20,
  },
});
