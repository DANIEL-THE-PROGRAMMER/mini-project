import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface Credentials {
  username: string;
  password: string;
}

export const authorizeUser = createAsyncThunk(
  "auth/authorizeUser",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const formData = new URLSearchParams();
      formData.append("username", credentials.username);
      formData.append("password", credentials.password);

      const response = await axios.post(
        "https://gps.autotracker.group/api/session",
        formData, 
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        return true;
      }
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);

export const deleteData = createAsyncThunk(
  "devices/deleteDevice",
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`https://gps.autotracker.group/api/devices/${id}`);
      return id;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);

export const postData = createAsyncThunk(
  "devices/postDevice",
  async (data: unknown, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://gps.autotracker.group/api/devices",
        data
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);

export const fetchData = createAsyncThunk(
  "devices/fetchDevices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://gps.autotracker.group/api/devices"
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);
