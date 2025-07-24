'use client';

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Kader {
  id: number;
  nama: string;
  nik: string;
  noHp: string;
  alamat: string;
  posyanduId: number;
}

interface KaderState {
  list: Kader[];
  loading: boolean;
  error: string | null;
}

// GET
export const fetchKader = createAsyncThunk('kader/fetchKader', async () => {
  const res = await fetch('/api/kader');
  if (!res.ok) throw new Error('Gagal mengambil data kader');
  return await res.json();
});


// POST
export const createKaderAsync = createAsyncThunk(
  'kader/create',
  async (kader: Omit<Kader, 'id'>) => {
    const res = await fetch('/api/kader', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(kader),
    });
    if (!res.ok) throw new Error('Gagal menambahkan kader');
    const data = await res.json();
    return data; // data = kader baru dari server
  }
);

// UPDATE
export const updateKaderAsync = createAsyncThunk(
  'kader/update',
  async ({ id, data }: { id: number; data: Partial<Kader> }) => {
    const response = await fetch(`/api/kader/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Gagal update kader');
    return await response.json();
  }
);

// DELETE
export const deleteKaderAsync = createAsyncThunk(
  'kader/delete',
  async (id: number) => {
    const res = await fetch(`/api/kader/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Gagal menghapus kader');
    return id;
  }
);

const initialState: KaderState = {
  list: [],
  loading: false,
  error: null,
};

const kaderSlice = createSlice({
  name: 'kader',
  initialState,
  reducers: {
    addKader: (state, action: PayloadAction<Kader>) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchKader.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchKader.fulfilled, (state, action: PayloadAction<Kader[]>) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchKader.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Gagal mengambil data';
      })
      .addCase(updateKaderAsync.fulfilled, (state, action) => {
      const index = state.list.findIndex((k) => k.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export const { addKader } = kaderSlice.actions;
export default kaderSlice.reducer;
