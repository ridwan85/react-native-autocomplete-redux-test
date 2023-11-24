import { StyleSheet, View, Text } from "react-native";
import SearchPage from "./src/components/SearchPage";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", padding: 30 }}>
          Autocomplete with places API
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Provider store={store}>
          <SearchPage />
        </Provider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 0,
    justifyContent: "flex-start",
  },
});
