import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import { createContext, useContext, useState } from "react";
import Start from "./Screens/Start";
import AllActivities from "./Screens/AllActivities";
import AddAnActivity from "./Screens/AddAnActivity";
import SpecialActivities from "./Screens/SpecialActivities";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export const EntriesContext = createContext(null);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          if (route.name === "All Activities") {
            <FontAwesome name="dollar" size={size} color={color} />;
          } else if (route.name === "Special Activities") {
            return <AntDesign name="exclamation" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="All Activities"
        component={AllActivities}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("AddAnActivity")}
              title="Add"
              color="gold"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Special Activities"
        component={SpecialActivities}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("AddAnActivity")}
              title="Add"
              color="gold"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [entries, setEntries] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <EntriesContext.Provider value={{ entries, setEntries }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddAnActivity"
              component={AddAnActivity}
              options={{ headerBackTitleVisible: false }}
            />
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </EntriesContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center",
    backgroundColor: "lavender",
  },
});
