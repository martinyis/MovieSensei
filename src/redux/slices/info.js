import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../axios.js";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    error: null,
    payload: null,
    loading: true,
  },
});
