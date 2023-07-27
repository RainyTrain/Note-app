import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NoteSchema } from '../types/Note';

const initialState: NoteSchema = {
  data: [],
};

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState: initialState,
  reducers: {
    initializeData: (state) => {
      const data: Note[] = JSON.parse(localStorage.getItem('notes')!);
      if (data) {
        state.data = data;
      }
    },
    createNote: (state, action: PayloadAction<Note>) => {
      const newNote = { ...action.payload };
      state.data.push(newNote);
      localStorage.setItem('notes', JSON.stringify(state.data));
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const index = state.data.indexOf(
        state.data!.find((item) => item.name == action.payload.name)!,
      );

      state.data = [
        ...state.data.slice(0, index),
        { ...state.data[index], ...action.payload },
        ...state.data.slice(index + 1),
      ];
      localStorage.setItem('notes', JSON.stringify(state.data));
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.name != action.payload);
      localStorage.setItem('notes', JSON.stringify(state.data));
    },
  },
});

export const { actions: noteSliceAction } = noteSlice;
export const { reducer: noteSliceReducer } = noteSlice;
