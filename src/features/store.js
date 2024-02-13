import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { onlineUsersReducer } from './onlineUsersSlice';
import { messagesReducer } from './messageSlice';
import { roomReducer } from './roomSlice';
import { commonReducer } from './commonSlice';

const rootReducer = combineReducers({
  room: roomReducer,
  chat: messagesReducer,
  common: commonReducer,
  onlineUsers: onlineUsersReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
