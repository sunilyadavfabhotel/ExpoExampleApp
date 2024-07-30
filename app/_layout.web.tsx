import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";

export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Link style={styles.link} href="/">
          Home
        </Link>
        <Link style={styles.link} href="/components/TextShow">
          Text Field
        </Link>
        <Link style={styles.link} href="/components/List">
          List
        </Link>
        <Link style={styles.link} href="/components/InputField">
          Input Field
        </Link>
        <Link style={styles.link} href="/components/Dropdown">
          Dropdown
        </Link>
        <Link style={styles.link} href="/components/AutoSuggestComponent">
          AutoSuggest
        </Link>
        <Link style={styles.link} href="/components/AlertModal">
          Alert Modal
        </Link>
        <Link style={styles.link} href="/components/TableView">
          Table
        </Link>
        <Link style={styles.link} href="/components/Calendar">
          Calendar
        </Link>
      </View>
      <View style={styles.content}>
        <Stack initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen
            name="components/TextShow"
            options={{ title: "Text Field" }}
          />
          <Stack.Screen name="components/List" options={{ title: "List" }} />
          <Stack.Screen
            name="components/InputField"
            options={{ title: "Input" }}
          />
          <Stack.Screen
            name="components/Dropdown"
            options={{ title: "Dropdown" }}
          />
          <Stack.Screen
            name="components/AutoSuggestComponent"
            options={{ title: "AutoSuggest" }}
          />
          <Stack.Screen
            name="components/AlertModal"
            options={{ title: "Alert Modal" }}
          />
          <Stack.Screen
            name="components/TableView"
            options={{ title: "Table" }}
          />
          <Stack.Screen
            name="components/Calendar"
            options={{ title: "Calendar" }}
          />
        </Stack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
  },
  sidebar: {
    width: "20%",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  content: {
    width: "80%",
    borderWidth: 1,
  },
  link: {
    marginVertical: 10,
    fontSize: 18,
    color: "blue",
    textDecorationLine: "none",
  },
});
