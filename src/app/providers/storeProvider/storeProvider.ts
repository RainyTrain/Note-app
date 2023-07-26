import { configureStore } from '@reduxjs/toolkit';
import { noteSliceReducer } from 'entities/Note/model/slice/noteSlice';

export const store = configureStore({
  reducer: { note: noteSliceReducer },
});

export type AppDispatch = (typeof store)['dispatch'];
