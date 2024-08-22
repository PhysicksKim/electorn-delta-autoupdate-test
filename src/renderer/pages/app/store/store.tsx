import { configureStore } from '@reduxjs/toolkit';
import fixtureListReducer from './slices/fixtureListSlice';
import leagueReducer from './slices/leagueSlice';
import footballSelectionReducer from './slices/footballSelectionSlice';
import ipcStatusReducer from './slices/ipc/ipcStatusSlice';
import fixtureLiveReducer from './slices/fixtureLiveSlice';
import fixtureLiveOptionReducer from './slices/fixtureLiveOptionSlice';

const store = configureStore({
  reducer: {
    fixtureList: fixtureListReducer,
    fixtureLive: fixtureLiveReducer,
    league: leagueReducer,
    selected: footballSelectionReducer,
    ipcStatus: ipcStatusReducer,
    fixtureLiveOption: fixtureLiveOptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
