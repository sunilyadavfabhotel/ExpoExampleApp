import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const WebCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <Pressable
        // className="border-2 p-2 rounded-lg border-lime-900"
        style={{
          borderWidth: 2,
          padding: 2,
          borderRadius: 8,
          borderColor: "lime",
        }}
        onPress={() => setShowModal((prev) => !prev)}
      >
        <Text>{value?.toLocaleString()}</Text>
      </Pressable>
      {showModal && (
        <View
          //  className="w-96"
          style={{ width: 300 }}
        >
          <Calendar
            onChange={(_date) => {
              setShowModal(false);
              onChange(_date);
              console.log("onChange", _date);
            }}
            value={value}
          />
        </View>
      )}
    </View>
  );
};

export default WebCalendar;
