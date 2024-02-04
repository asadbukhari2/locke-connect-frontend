import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { onlineUsersReducer } from './onlineUsersSlice';
import { messagesReducer } from './messageSlice';
import { roomReducer } from './roomSlice';

const rootReducer = combineReducers({
  onlineUsers: onlineUsersReducer,
  chat: messagesReducer,
  room: roomReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
