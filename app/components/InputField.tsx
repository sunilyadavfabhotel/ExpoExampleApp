import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

const InputComponent = () => {
  const [text, setText] = useState("");

  return (
    <View
      // className="p-4"
      style={{ padding: 16 }}
    >
      <TextInput
        // className="border border-gray-300 p-2 rounded-md"
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          padding: 8,
          borderRadius: 8,
        }}
        placeholder="Type here"
        value={text}
        onChangeText={setText}
      />
      <Text
        // className="mt-2 text-lg"
        style={{ marginTop: 8, fontSize: 16 }}
      >
        You entered: {text}
      </Text>
    </View>
  );
};

export default InputComponent;
