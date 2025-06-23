import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  PopularRestaurantsMockData,
  recentOrderItems,
  SpecialOffersMockData,
} from '@/constants/mockData';
import { createAppAsyncThunk } from '@/store/utils';
import { RecentOrderItem } from '@/types';

export type Restaurant = {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
};
export type DealItem = {
  id: string;
  restaurantName: string;
  itemName: string;
  image: string;
  currentPrice: string;
  originalPrice: string;
  discount: number;
};
export interface RestaurantsState {
  popularRestaurants: Restaurant[];
  specialOffers: DealItem[];
  recentOrders: RecentOrderItem[];
  loading: boolean;
  error: string | null;
}

const initialState: RestaurantsState = {
  popularRestaurants: [],
  specialOffers: [],
  recentOrders: [],
  loading: false,
  error: null,
};

export const fetchPopularRestaurants = createAppAsyncThunk(
  'restaurants/fetchPopularRestaurants',
  async () => {
    await new Promise((r) => setTimeout(r, 500));
    return [...PopularRestaurantsMockData];
  },
);

export const fetchSpecialOffers = createAppAsyncThunk(
  'restaurants/fetchSpecialOffers',
  async () => {
    await new Promise((r) => setTimeout(r, 500));
    return [...SpecialOffersMockData];
  },
);

export const fetchRecentOrders = createAppAsyncThunk(
  'restaurants/fetchRecentOrders',
  async () => {
    await new Promise((r) => setTimeout(r, 500));
    return [...recentOrderItems];
  },
);

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPopularRestaurants.fulfilled,
        (state, action: PayloadAction<Restaurant[]>) => {
          state.loading = false;
          state.popularRestaurants = action.payload;
        },
      )
      .addCase(fetchPopularRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch restaurants';
      });
    builder
      .addCase(fetchSpecialOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSpecialOffers.fulfilled,
        (state, action: PayloadAction<DealItem[]>) => {
          state.loading = false;
          state.specialOffers = action.payload;
        },
      )
      .addCase(fetchSpecialOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch restaurants';
      });
    builder
      .addCase(fetchRecentOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRecentOrders.fulfilled,
        (state, action: PayloadAction<RecentOrderItem[]>) => {
          state.loading = false;
          state.recentOrders = action.payload;
        },
      )
      .addCase(fetchRecentOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch restaurants';
      });
  },
});

export default restaurantsSlice;
