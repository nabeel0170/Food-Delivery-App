import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { categoriesMockData } from '@/constants/mockData';
import { createAppAsyncThunk } from '@/store/utils';

export type Category = {
  imageUrl: string;
  title: string;
  subtitle: string;
};

export interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAppAsyncThunk(
  'categories/fetchCategories',
  async () => {
    await new Promise((r) => setTimeout(r, 500));
    return [...categoriesMockData];
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.loading = false;
          state.categories = action.payload;
        },
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export default categoriesSlice;
