import { StyleSheet, Text, View, Dimensions, SectionList } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const SectionListBasics = () => {
  return (
    <View style={{ width: width * 0.5 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Section List Basics
      </Text>
      <SectionList
        sections={[
          {
            title: "Coffee",
            data: [
              "Americano",
              "Latte",
              "Mocha",
              "Espresso",
              "Cappuccino",
              "Flat White",
            ],
          },
          {
            title: "Juice",
            data: [
              "Apple Juice",
              "Orange Juice",
              "Carrot Juice",
              "Banana Juice",
              "Lime Juice",
              "Apple Honey Juice",
            ],
          },
          {
            title: "Snacks",
            data: [
              "Chicken Burger",
              "Beef Burger",
              "Vegan Burger",
              "Cheese Burger",
              "Tuna Sandwich",
            ],
          },
          {
            title: "Coffee",
            data: [
              "Americano",
              "Latte",
              "Mocha",
              "Espresso",
              "Cappuccino",
              "Flat White",
            ],
          },
          {
            title: "Juice",
            data: [
              "Apple Juice",
              "Orange Juice",
              "Carrot Juice",
              "Banana Juice",
              "Lime Juice",
              "Apple Honey Juice",
            ],
          },
          {
            title: "Snacks",
            data: [
              "Chicken Burger",
              "Beef Burger",
              "Vegan Burger",
              "Cheese Burger",
              "Tuna Sandwich",
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionListBasics;

const styles = StyleSheet.create({
  item: {
    padding: 5,
    width: width * 0.5,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    textAlign: "center",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
});
