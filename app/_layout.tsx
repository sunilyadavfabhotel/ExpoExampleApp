import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack initialRouteName="Home">
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="components/TextShow"
        options={{ title: "Text Field" }}
      />
      <Stack.Screen name="components/List" options={{ title: "List" }} />
      <Stack.Screen name="components/InputField" options={{ title: "Input" }} />
      <Stack.Screen
        name="components/Dropdown"
        options={{ title: "Dropdown" }}
      />
    </Stack>
  );
}
