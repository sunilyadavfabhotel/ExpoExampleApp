import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const DropdownComponent = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const items = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemPress = (item: string) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  return (
    <View
      // className="p-4 w-full"
      style={{ padding: 16, width: "100%" }}
    >
      <TouchableOpacity
        // className="border border-gray-300 p-2 rounded-md bg-white"
        style={{
          borderWidth: 1,
          borderColor: "#d1d5db",
          padding: 8,
          borderRadius: 8,
          backgroundColor: "#fff",
        }}
        onPress={toggleDropdown}
      >
        <Text
          //  className="text-lg"
          style={{ fontSize: 16 }}
        >
          {selectedItem ? selectedItem : "Select an option"}
        </Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View
          //  className="border border-gray-300 mt-2 rounded-md bg-white"
          style={{
            borderWidth: 1,
            borderColor: "#d1d5db",
            marginTop: 8,
            borderRadius: 8,
            backgroundColor: "#fff",
          }}
        >
          <FlatList
            data={items}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                // className="p-2"
                style={{ padding: 8 }}
                onPress={() => handleItemPress(item)}
              >
                <Text
                  //  className="text-lg"
                  style={{ fontSize: 16 }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default DropdownComponent;
