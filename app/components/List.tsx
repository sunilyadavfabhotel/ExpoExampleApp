import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

const ListComponent = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1", btnText: "Update" },
    { id: 2, text: "Item 2", btnText: "Update" },
    { id: 3, text: "Item 3", btnText: "Update" },
  ]);

  const changeItemContent = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? item.btnText === "Update"
            ? {
                ...item,
                btnText: "Revert",
                text: `${item.text} (Updated)`,
              }
            : {
                ...item,
                btnText: "Update",
                text: `${item.text}`.replaceAll(" (Updated)", ""),
              }
          : item
      )
    );
  };

  return (
    <View style={{ padding: 16 }}>
      {items.map((item) => (
        <View
          key={item.id}
          className="flex flex-row justify-between items-center p-2 m-2 bg-gray-200 rounded-lg"
        >
          <Text className="text-lg">{item.text}</Text>
          <Pressable
            onPress={() => {
              changeItemContent(item.id);
            }}
            className="bg-blue-500 p-2 rounded-md"
          >
            <Text className="text-white">{item.btnText}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default ListComponent;
