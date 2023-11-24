import React, { useState } from "react";
import { TextInput, View, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { fetchAutoCompleteRequest } from "../reducers/autoCompleteReducer";

const width = Dimensions.get("window").width;

const AutocompleteInput = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleQueryChange = (text) => {
    setQuery(text);
    dispatch(fetchAutoCompleteRequest(text));
  };
  return (
    <View style={{ alignContent: "center" }}>
      <TextInput
        style={{
          borderBottomWidth: 1,
          padding: 10,
          width: width,
        }}
        value={query}
        onChangeText={handleQueryChange}
        placeholder="Search for places..."
      />
    </View>
  );
};

export default AutocompleteInput;
