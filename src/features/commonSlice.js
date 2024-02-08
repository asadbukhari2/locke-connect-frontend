import peoplesService from '@/services/peoples';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getNotifications = createAsyncThunk('messages/getNotifications', async searchQuery => {
  try {
    const response = await peoplesService.getNotifications(searchQuery);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const initState = {
  notifications: [],
  totalNotification: null,
  hasNextPage: null,
  lastPage: null,
  nextPage: null,
  currentPage: null,
  notificationsLoading: false,
  notificationsError: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState: initState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNotifications.pending, (state, action) => {
        state.notificationsLoading = true;
        state.notificationsError = '';
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload?.items;
        state.totalNotification = action.payload.totalItems;
        state.hasNextPage = action.payload.hasNextPage;
        state.lastPage = action.payload.lastPage;
        state.nextPage = action.payload.nextPage;
        state.currentPage = action.payload.currentPage;
        state.notificationsLoading = false;
        state.notificationsError = '';
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.notificationsLoading = false;
        state.notificationsError = 'Error';
      });
  },
});

export const { setNotifications } = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
export { getNotifications };
