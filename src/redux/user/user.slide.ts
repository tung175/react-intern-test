import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllUser } from "../../services/userService";
import { IStateInit } from "../../interfaces/users.type";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUser",
  async (page: number) => {
    const res = await fetchAllUser(page);
    return res;
  }
);

const initialState: IStateInit = {
  results: [],
  isLoading: false,
  isError: false,
  totalPages: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.results = action.payload;
        state.totalPages = action.payload.info.page;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = userSlice.actions;

export default userSlice.reducer;
