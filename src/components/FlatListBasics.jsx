import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const FlatListBasics = () => {
  return (
    <View style={{ width: width * 0.5 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Flat List Basics</Text>
      <FlatList
        data={[
          { key: "Severus" },
          { key: "Winnie" },
          { key: "Pochi" },
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
          { key: "Severus" },
          { key: "Winnie" },
          { key: "Pochi" },
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
          { key: "Severus" },
          { key: "Winnie" },
          { key: "Pochi" },
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;

const styles = StyleSheet.create({
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    textAlign: "center",
  },
});
