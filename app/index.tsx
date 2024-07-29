import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Components Lists</Text>
      <Link
        style={styles.subtitle}
        href={{
          pathname: "/components/TextShow",
        }}
      >
        Text Field
      </Link>
      <Link
        style={styles.subtitle}
        href={{
          pathname: "/components/List",
        }}
      >
        List
      </Link>
      <Link
        style={styles.subtitle}
        href={{
          pathname: "/components/InputField",
        }}
      >
        Input Field
      </Link>
      <Link
        style={styles.subtitle}
        href={{
          pathname: "/components/Dropdown",
        }}
      >
        Dropdown
      </Link>
      <Link
        style={styles.subtitle}
        href={{
          pathname: "/components/AutoSuggestComponent",
        }}
      >
        AutoSuggest
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  subtitle: {
    color: "blue",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
