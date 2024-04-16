
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserList } from "./UserListCrud";


// getAllUsers
export const getAllUsers = createAsyncThunk(
  "userDetailList/getAllUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await getAllUserList(payload);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const userDetailSlice = createSlice({
  name: "userDetailList",
  initialState: {
    isLoading: false,
    error: null,
    usersList: [],
   
  },
  reducers: {
    clearState: (state) => {
      state.isLoading = false;
      state.error = "";
    },
    },
  
 extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersList = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});


export const { clearState } = userDetailSlice.actions;
export default userDetailSlice.reducer;
