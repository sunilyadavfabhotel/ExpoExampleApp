import React from "react";
import { View } from "react-native";
import { Stack, Link, usePathname } from "expo-router";

import "../global.css";

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

const baseStyle = "my-1 text-lg text-[#41348d] no-underline px-1 py-1";
const activeStyle = "text-[#f0f0f0] bg-[#41348d] px-1 py-1 rounded";

export default function Layout() {
  const pathname = usePathname();

  return (
    <View className="flex flex-row h-screen">
      <View className="w-52 bg-gray-200 p-5">
        {screens.map((data) => (
          <Link
            key={data.path}
            className={`${baseStyle} ${
              pathname === data.path ? activeStyle : ""
            }`}
            href={data.path}
          >
            {data.name}
          </Link>
        ))}
      </View>
      <View className="w-4/5 bg-gray-100 p-5">
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
