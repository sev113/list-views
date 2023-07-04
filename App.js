import { StyleSheet, Text, View, StatusBar } from "react-native";
import FlatListBasics from "./src/components/FlatListBasics";
import SectionListBasics from "./src/components/SectionListBasics";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30, textAlign: "center" }}>
        Hello World, This is about Flat List and Section List.
      </Text>
      <View style={styles.list_wrapper}>
        <FlatListBasics />
        <SectionListBasics />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
    marginBottom: 50,
  },
  list_wrapper: {
    flexDirection: "row",
  },
});
