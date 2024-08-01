import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const linkArray = [
  {
    label: "Text Field",
    pathname: "/components/TextShow",
  },
  {
    label: "List",
    pathname: "/components/List",
  },
  {
    label: "Input Field",
    pathname: "/components/InputField",
  },
  {
    label: "Dropdown",
    pathname: "/components/Dropdown",
  },
  {
    label: "AutoSuggest",
    pathname: "/components/AutoSuggestComponent",
  },
  {
    label: "Alert Modal",
    pathname: "/components/AlertModal",
  },
  {
    label: "Table",
    pathname: "/components/TableView",
  },
  {
    label: "Calendar",
    pathname: "/components/Calendar",
  },
];

const Home = () => {
  return (
    <View className="flex justify-center items-center">
      <Text>Components Lists</Text>
      {linkArray.map((link) => (
        <Link
          key={link.pathname}
          className="text-blue-500 text-base py-2 px-4 my-2 border border-gray-200 rounded-lg"
          href={{
            pathname: link.pathname,
          }}
        >
          {link.label}
        </Link>
      ))}
    </View>
  );
};

export default Home;
