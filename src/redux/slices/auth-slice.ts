import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface authState {
  username: string;
  role: string;
}

const initialState: authState = {
  username: "",
  role: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = authSlice.actions;
export const useAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
