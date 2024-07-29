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
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 8,
            margin: 8,
            backgroundColor: "#eeeeee",
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 16 }}>{item.text}</Text>
          <Pressable
            onPress={() => {
              console.log("item.id", item.id);
              changeItemContent(item.id);
            }}
            style={{
              backgroundColor: "#3498db",
              padding: 8,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#ffffff" }}>{item.btnText}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default ListComponent;
