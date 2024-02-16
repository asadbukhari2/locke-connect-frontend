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
  unreadNotification: null,
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
      state.unreadNotification = action.payload.some(notification => !notification.is_read);
    },
    RESET_STATE: () => initState,
  },
  extraReducers: builder => {
    builder
      .addCase(getNotifications.pending, (state, action) => {
        state.notificationsLoading = true;
        state.notificationsError = '';
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        if (action.payload && action.payload.items && Array.isArray(action.payload.items)) {
          state.notifications = [
            ...state.notifications,
            ...action.payload?.items.filter(
              newItem => !state.notifications.some(prevItem => prevItem.id === newItem?.id),
            ),
          ];
        }
        state.totalNotification = action.payload?.totalItems;
        state.hasNextPage = action.payload?.hasNextPage;
        state.lastPage = action.payload?.lastPage;
        state.nextPage = action.payload?.nextPage;
        state.currentPage = action.payload?.currentPage;
        state.unreadNotification = action.payload?.items.some(notification => notification.is_read === false);
        state.notificationsLoading = false;
        state.notificationsError = '';
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.notificationsLoading = false;
        state.notificationsError = 'Error';
      });
  },
});

export const { setNotifications, RESET_STATE } = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
export { getNotifications };
