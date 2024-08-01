import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack, Link, usePathname } from "expo-router";

const sideLayoutData = [
  { name: "Home", path: "/" },
  { name: "Text Field", path: "/components/TextShow" },
  { name: "List", path: "/components/List" },
  { name: "Input Field", path: "/components/InputField" },
  { name: "Dropdown", path: "/components/Dropdown" },
  { name: "AutoSuggest", path: "/components/AutoSuggestComponent" },
  { name: "Alert Modal", path: "/components/AlertModal" },
  { name: "Table", path: "/components/TableView" },
  { name: "Calendar", path: "/components/Calendar" },
];
const screens = [
  {
    name: "index",
    options: { title: "Home" },
  },
  {
    name: "components/TextShow",
    options: { title: "Text Field" },
  },
  {
    name: "components/List",
    options: { title: "List" },
  },
  {
    name: "components/InputField",
    options: { title: "Input" },
  },
  {
    name: "components/Dropdown",
    options: { title: "Dropdown" },
  },
  {
    name: "components/AutoSuggestComponent",
    options: { title: "AutoSuggest" },
  },
  {
    name: "components/AlertModal",
    options: { title: "Alert Modal" },
  },
  {
    name: "components/TableView",
    options: { title: "Table" },
  },
  {
    name: "components/Calendar",
    options: { title: "Calendar" },
  },
];

export default function Layout() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {sideLayoutData.map((data) => (
          <Link
            key={data.path}
            style={[
              styles.link,
              pathname === data.path ? styles.activeLink : {},
            ]}
            href={data.path}
          >
            {data.name}
          </Link>
        ))}
      </View>
      <View style={styles.content}>
        <Stack initialRouteName="Home" screenOptions={{ headerShown: false }}>
          {screens.map((screen, index) => (
            <Stack.Screen
              key={index}
              name={screen.name}
              options={screen.options}
            />
          ))}
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
    backgroundColor: "#bebbbb",
    padding: 10,
  },
  content: {
    width: "80%",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  link: {
    marginVertical: 5,
    fontSize: 18,
    color: "#41348d",
    textDecorationLine: "none",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  activeLink: {
    color: "#f0f0f0",
    backgroundColor: "#41348d",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
