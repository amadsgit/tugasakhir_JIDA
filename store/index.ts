// store/index.ts
'use client';

import { configureStore } from '@reduxjs/toolkit';
import kaderReducer from './kaderSlice.ts';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    kader: kaderReducer,
  },
});

// Type support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
