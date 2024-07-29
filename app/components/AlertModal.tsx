import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

const AlertModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View
      // className="flex-1 justify-center items-center"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity
        // className="bg-blue-500 p-3 rounded-md"
        style={{ backgroundColor: "#3b82f6", padding: 12, borderRadius: 8 }}
        onPress={showModal}
      >
        <Text
          // className="text-white text-lg"
          style={{ color: "#fff", fontSize: 16 }}
        >
          Show Alert
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View
          // className="flex-1 justify-center items-center bg-black bg-opacity-50"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            // className="bg-white p-5 rounded-md w-3/4"
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 8,
              width: "75%",
            }}
          >
            <Text
              // className="text-lg mb-4"
              style={{ fontSize: 16, marginBottom: 16 }}
            >
              This is an alert message!
            </Text>
            <TouchableOpacity
              // className="bg-red-500 p-3 rounded-md"
              style={{
                backgroundColor: "#ef4444",
                padding: 12,
                borderRadius: 8,
              }}
              onPress={hideModal}
            >
              <Text
                // className="text-white text-lg text-center"
                style={{ color: "#fff", fontSize: 16, textAlign: "center" }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AlertModal;
