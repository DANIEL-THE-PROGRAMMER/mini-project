import { createSlice } from "@reduxjs/toolkit";
import { fetchData, postData, deleteData } from "../apis";

interface datas {
  uniqueId: number;
  status: boolean;
  lastupdate: string ;
  positionId: string ;
  groupId: string;
  phone: number;
  model: string ;
  contact: string;
  category: string ;
  id: string;
  name: string;
}

export interface DataState {
  datas: datas[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}


const initialState: DataState = {
  datas: [],
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
        state.datas = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.datas.push(action.payload);
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.datas = state.datas.filter(
          (device) => device.id !== action.payload
        );
      });
  },
});


export const SelectDatas = (state: DataState) => state.datas;


export default dataSlice.reducer;
