import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../axios.js";

//getCredits
export const fetchCredits = createAsyncThunk(
  "/credits/fetchCredits",
  async () => {
    try {
      const response = await axios.get("/app/users/credits");
      console.log(response);
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw error.response.data.message;
      } else {
        throw error;
      }
    }
  }
);

//const decrese credits
export const decreaseCredits = createAsyncThunk(
  "/credits/decreaseCredits",
  async (data) => {
    try {
      const response = await axios.patch("/app/users/credits", data);
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw error.response.data.message;
      } else {
        throw error;
      }
    }
  }
);

//slice
const creditsSlice = createSlice({
  name: "credits",
  initialState: {
    credits: 0,
    error: null,
    loading: true,
  },
  reducers: {
    //setCredits
    setCredits: (state, action) => {
      state.credits = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCredits.fulfilled, (state, action) => {
        state.credits = action.payload.credits;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchCredits.rejected, (state, action) => {
        state.credits = 0;
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(decreaseCredits.fulfilled, (state, action) => {
        state.credits = action.payload.credits;
        state.error = null;
        state.loading = false;
      })
      .addCase(decreaseCredits.rejected, (state, action) => {
        state.credits = 0;
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

//export

export const { setCredits } = creditsSlice.actions;
export const selectCredits = (state) => state.credits.credits;
export const creditsReducer = creditsSlice.reducer;
