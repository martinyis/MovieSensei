import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../axios.js";

export const fetchInfo = createAsyncThunk(
  "/auth/fetchInfo",
  async (formData, option) => {
    try {
      const response = await axios.post(
        `/app/movies/generateMovie/${option}`,
        formData
      );
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

const infoSlice = createSlice({
  name: "info",
  initialState: {
    formData: {},
    error: null,
    payload: null,
    loading: true,
  },
  reducers: {
    setAuthTrue: (state, action) => {
      state.isAuth = true;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.error = null;
        state.payload = action.payload;
        state.loading = false;
      })
      .addCase(fetchInfo.rejected, (state, action) => {
        state.error = action.error.message;
        state.payload = null;
        state.loading = false;
      });
  },
});

export const { setAuthTrue } = infoSlice.actions;

export const selectInfoError = (state) => state.info.error;
export const selectInfoPayload = (state) => state.info.payload;
export const selectInfoLoading = (state) => state.info.loading;
export const selectInfoPending = (state) => state.info.loading;
export const { setFormData } = infoSlice.actions;
export const selectFormData = (state) => state.info.formData;
export const infoReducer = infoSlice.reducer;
