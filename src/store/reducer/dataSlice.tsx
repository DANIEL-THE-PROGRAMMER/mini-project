import { createSlice } from "@reduxjs/toolkit";
import { fetchData, postData, deleteData } from "../apis";

interface Device {
  id: string;
  name: string;
}

interface DataState {
  devices: Device[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}


const initialState: DataState = {
  devices: [],
  status: "idle",
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.devices = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.devices.push(action.payload);
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.devices = state.devices.filter(
          (device) => device.id !== action.payload
        );
      });
  },
});

export default dataSlice.reducer;
