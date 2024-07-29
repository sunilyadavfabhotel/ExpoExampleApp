import React from "react";
import { View, Text, ScrollView } from "react-native";

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    city: "New York",
    job: "Engineer",
    company: "ABC Corp",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    country: "USA",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    city: "San Francisco",
    job: "Designer",
    company: "XYZ Inc",
    email: "jane@example.com",
    phone: "987-654-3210",
    address: "456 Oak St",
    country: "USA",
  },
  {
    id: 3,
    name: "Sam Green",
    age: 22,
    city: "Chicago",
    job: "Developer",
    company: "Tech Solutions",
    email: "sam@example.com",
    phone: "555-555-5555",
    address: "789 Pine St",
    country: "USA",
  },
  // Add more data as needed
];

const TableView = () => {
  return (
    <ScrollView
      //  className="p-4 flex-1"
      style={{ padding: 16, flex: 1 }}
    >
      <ScrollView
        horizontal
        // className="flex-1"
        style={{ flex: 1 }}
      >
        <View
          // className="min-w-full"
          style={{ minWidth: "100%" }}
        >
          <View
            // className="flex flex-row border-b-2 border-gray-300"
            style={{
              flexDirection: "row",
              borderBottomWidth: 2,
              borderColor: "#d1d5db",
            }}
          >
            <Text
              // className="p-2 font-bold flex-1 min-w-[100px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 100 }}
            >
              ID
            </Text>
            <Text
              // className="p-2 font-bold flex-1 min-w-[150px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 150 }}
            >
              Name
            </Text>
            <Text
              // className="p-2 font-bold flex-1 min-w-[80px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 80 }}
            >
              Age
            </Text>
            <Text
              // className="p-2 font-bold flex-1 min-w-[150px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 150 }}
            >
              City
            </Text>
            <Text
              // className="p-2 font-bold flex-1 min-w-[150px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 150 }}
            >
              Job
            </Text>
            <Text
              // className="p-2 font-bold flex-1 min-w-[200px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 200 }}
            >
              Company
            </Text>
            <Text
              // className="p-2 font-bold flex-1 min-w-[250px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 250 }}
            >
              Email
            </Text>
            <Text
              // className="p-2 font-bold flex-1 min-w-[150px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 150 }}
            >
              Phone
            </Text>
            <Text
              // className="p-2 font-bold flex-1 min-w-[200px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 200 }}
            >
              Address
            </Text>
            <Text
              // className="p-2 font-bold flex-1 min-w-[150px]"
              style={{ padding: 8, fontWeight: "bold", flex: 1, minWidth: 150 }}
            >
              Country
            </Text>
          </View>
          {data.map((item) => (
            <View
              key={item.id}
              // className="flex flex-row border-b border-gray-200"
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                borderColor: "#e5e7eb",
              }}
            >
              <Text
                // className="p-2 flex-1 min-w-[100px]"
                style={{ padding: 8, flex: 1, minWidth: 100 }}
              >
                {item.id}
              </Text>
              <Text
                // className="p-2 flex-1 min-w-[150px]"
                style={{ padding: 8, flex: 1, minWidth: 150 }}
              >
                {item.name}
              </Text>
              <Text
                // className="p-2 flex-1 min-w-[80px]"
                style={{ padding: 8, flex: 1, minWidth: 80 }}
              >
                {item.age}
              </Text>
              <Text
                // className="p-2 flex-1 min-w-[150px]"
                style={{ padding: 8, flex: 1, minWidth: 150 }}
              >
                {item.city}
              </Text>
              <Text
                // className="p-2 flex-1 min-w-[150px]"
                style={{ padding: 8, flex: 1, minWidth: 150 }}
              >
                {item.job}
              </Text>
              <Text
                // className="p-2 flex-1 min-w-[200px]"
                style={{ padding: 8, flex: 1, minWidth: 200 }}
              >
                {item.company}
              </Text>
              <Text
                // className="p-2 flex-1 min-w-[250px]"
                style={{ padding: 8, flex: 1, minWidth: 250 }}
              >
                {item.email}
              </Text>
              <Text
                // className="p-2 flex-1 min-w-[150px]"
                style={{ padding: 8, flex: 1, minWidth: 150 }}
              >
                {item.phone}
              </Text>
              <Text
                // className="p-2 flex-1 min-w-[200px]"
                style={{ padding: 8, flex: 1, minWidth: 200 }}
              >
                {item.address}
              </Text>
              <Text
                // className="p-2 flex-1 min-w-[150px]"
                style={{ padding: 8, flex: 1, minWidth: 150 }}
              >
                {item.country}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default TableView;
