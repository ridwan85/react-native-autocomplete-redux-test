import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

// @TODO: Should be moved and stored in a keystore
const apiKey = "ENTER YOU API KEY HERE";

export const fetchAutoCompleteRequest = createAction(
  "search/fetchAutoCompleteRequest"
);

export const fetchAutoCompleteInProgress = createAsyncThunk(
  "search/fetchAutoCompleteInProgress",
  async (query, thunkApi) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`
      );
      const data = await response.json();
      const possiblePlace = data.predictions.map((item) => {
        return item.description;
      });
      return possiblePlace;
    } catch (error) {
      // logs error
      console.error("Error fetching autocomplete data:", error);
    }
  }
);

const initialState = {
  autocompleteResults: [],
  autoCompleteRequest: null,
  loading: false,
  error: null,
};

const autoCompleteSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAutoCompleteRequest, (state, action) => {
      return {
        ...state,
        autoCompleteRequest: action.payload,
        loading: false,
        error: null,
      };
    })
    .addCase(fetchAutoCompleteInProgress.fulfilled, (state, action) => {
      return {
        ...state,
        autocompleteResults: action.payload,
        loading: false,
        error: null,
      };
    })
    .addCase(fetchAutoCompleteInProgress.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(fetchAutoCompleteInProgress.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    })

    .addDefaultCase((state, action) => {
      return state;
    });
});

export default autoCompleteSlice;
