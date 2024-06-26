import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface Credentials {
  email: string;
  password: string;
}

const user = import.meta.env.VITE_USER
const password = import.meta.env.VITE_PASSWORD;


export const authorizeUser = createAsyncThunk(
  "auth/authorizeUser",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const headers = new Headers();

      headers.set("Content-Type", "application/x-www-form-urlencoded");
      const formData = new URLSearchParams();
      formData.append("email", credentials.email);
      formData.append("password", credentials.password);

      const response = await fetch(
        "https://gps.autotracker.group/api/session",
        {
          method: "POST",
          headers: headers,
          body: formData,
        }
      );

      if (response.ok) {
        return response.json();
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
        data,
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
        "https://gps.autotracker.group/api/devices/",
        {
          headers: {
            Authorization: "Basic " + btoa(`${user}:${password}`),
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data);
    }
  }
);
