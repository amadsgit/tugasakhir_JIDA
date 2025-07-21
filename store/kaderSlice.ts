'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Kader {
  id?: number;
  nama: string;
  nik: string;
  noHp: string;
  alamat: string;
  posyanduId: number;
}

interface KaderState {
  list: Kader[];
}

const initialState: KaderState = {
  list: [],
};

const kaderSlice = createSlice({
  name: 'kader',
  initialState,
  reducers: {
    addKader: (state, action: PayloadAction<Kader>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addKader } = kaderSlice.actions;
export default kaderSlice.reducer;
