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
      <Stack.Screen
        name="components/AutoSuggestComponent"
        options={{ title: "AutoSuggest" }}
      />
      <Stack.Screen
        name="components/AlertModal"
        options={{ title: "Alert Modal" }}
      />
      <Stack.Screen name="components/TableView" options={{ title: "Table" }} />
    </Stack>
  );
}
