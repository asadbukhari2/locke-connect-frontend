import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // Helps with state reconciliation

import { onlineUsersReducer } from './onlineUsersSlice';
import { messagesReducer } from './messageSlice';
import { roomReducer } from './roomSlice';
import { commonReducer } from './commonSlice';

// Define persistConfig for all reducers
const persistConfig = {
  key: 'root', // key for the root state in storage
  storage, // storage engine (e.g., localStorage)
  stateReconciler: autoMergeLevel2,
  whitelist: ['room', 'chat', 'onlineUsers', 'common'], // reducers to persist
};

// Combine reducers
const rootReducer = combineReducers({
  room: roomReducer,
  chat: messagesReducer,
  onlineUsers: onlineUsersReducer,
  common: commonReducer,
});

// Wrap rootReducer with persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
