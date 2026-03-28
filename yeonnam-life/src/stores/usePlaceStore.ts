import { create } from "zustand";
import type { PlaceState, PlaceActions } from "@/types/Place";

const initialState = {
  place: null,
  places: [],
  isLoading: false,
  error: null,
};

export const usePlaceStore = create<PlaceState & PlaceActions>()((set) => ({
  ...initialState,

  actions: {
    setPlace: (place) => set({ place }),
    setPlaces: (places) => set({ places }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    reset: () => set(initialState),
  },
}));
