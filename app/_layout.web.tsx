import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack, Link, usePathname } from "expo-router";

const screens = [
  { name: "Home", path: "/", options: { title: "Home" } },
  {
    name: "Text Field",
    path: "/components/TextShow",
    options: { title: "Text Field" },
  },
  { name: "List", path: "/components/List", options: { title: "List" } },
  {
    name: "Input Field",
    path: "/components/InputField",
    options: { title: "Input" },
  },
  {
    name: "Dropdown",
    path: "/components/Dropdown",
    options: { title: "Dropdown" },
  },
  {
    name: "AutoSuggest",
    path: "/components/AutoSuggestComponent",
    options: { title: "AutoSuggest" },
  },
  {
    name: "Alert Modal",
    path: "/components/AlertModal",
    options: { title: "Alert Modal" },
  },
  { name: "Table", path: "/components/TableView", options: { title: "Table" } },
  {
    name: "Calendar",
    path: "/components/Calendar",
    options: { title: "Calendar" },
  },
];
export default function Layout() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {screens.map((data) => (
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
