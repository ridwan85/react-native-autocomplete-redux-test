import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchAutoCompleteInProgress } from "../reducers/autoCompleteReducer";

const RenderAutoCompleteList = ({ searchResult }) => {
  return searchResult.map((item) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            height: 30,
            paddingTop: 10,
            paddingLeft: 10,
          }}
        >
          <Text>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  });
};

const SearchHistory = () => {
  const searchQuery = useSelector((state) => state.search.autoCompleteRequest);
  const searchResult = useSelector((state) => state.search.autocompleteResults);
  const loader = useSelector((state) => state.search.loading);
  const errorMessage = useSelector((state) => state.search.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchAutoCompleteInProgress(searchQuery));
    }
  }, [searchQuery, dispatch]);
  return (
    <View>
      {loader ? (
        <Text>Loading...</Text>
      ) : errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <RenderAutoCompleteList searchResult={searchResult} />
      )}
      {<Text></Text>}
    </View>
  );
};

export default SearchHistory;
