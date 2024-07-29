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
    </Stack>
  );
}
