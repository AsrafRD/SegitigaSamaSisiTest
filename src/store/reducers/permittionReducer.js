import { createSlice } from '@reduxjs/toolkit';
import { fetchpermittion, createPermission, updatePermission, deletePermission, approvePermission } from '../actions/permittionActions.js';

const initialState = {
  permittion: [],
  loading: false,
  error: null,
};

const permittionlice = createSlice({
  name: 'permittion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchpermittion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchpermittion.fulfilled, (state, action) => {
        state.loading = false;
        state.permittion = action.payload;
      })
      .addCase(fetchpermittion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPermission.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPermission.fulfilled, (state, action) => {
        state.loading = false;
        state.permittion.push(action.payload);
      })
      .addCase(createPermission.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updatePermission.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePermission.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.permittion.findIndex(permission => permission.id === action.payload.id);
        if (index !== -1) {
          state.permittion[index] = action.payload;
        }
      })
      .addCase(updatePermission.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePermission.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePermission.fulfilled, (state, action) => {
        state.loading = false;
        state.permittion = state.permittion.filter(permission => permission.id !== action.meta.arg);
      })
      .addCase(deletePermission.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(approvePermission.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(approvePermission.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.permittion.findIndex(permission => permission.id === action.payload.permissionId);
        if (index !== -1) {
          state.permittion[index] = { ...state.permittion[index], ...action.payload };
        }
      })
      .addCase(approvePermission.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default permittionlice.reducer;