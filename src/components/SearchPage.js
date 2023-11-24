import { View } from "react-native";
import AutocompleteInput from "./AutoCompleteInput";
import SearchHistory from "./SearchHistory";

const SearchPage = () => {
  return (
    <View>
      <AutocompleteInput />
      <SearchHistory />
    </View>
  );
};

export default SearchPage;
