import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const selectKaderList = (state: RootState) => state.kader.list;

export const selectKaderByPosyandu = (posyanduId: number) =>
  createSelector([selectKaderList], (kaderList) =>
    kaderList.filter((kader) => kader.posyanduId === posyanduId)
  );
