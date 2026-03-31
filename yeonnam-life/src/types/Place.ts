import type { Category } from "./Category";

interface Hours {
  weekday: string;
  weekend: string;
  closed: null;
}

interface Product {
  name: string;
  price: number;
}

export interface Place {
  id: string;
  name: string;
  category: Category;
  description: string;
  shortDescription: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  reviewCount: number;
  hours: Hours;
  phone: string;
  tags: string[];
  priceRange: string;
  images: string[];
  thumbnail: string;
  menu: Product[];
  facilities: string[];
  createdAt: string;
  updatedAt: string;
}

export type PlaceState = {
  place: Place | null; // 단일 장소
  places: Place[]; // 목록
  hotPlaces: Place[]; // (별점순) 인기 장소 목록
  isLoading: boolean;
  error: string | null;
};

export type PlaceActions = {
  actions: {
    setPlace: (place: Place) => void;
    setPlaces: (places: Place[]) => void;
    setHotPlaces: (hotPlaces: Place[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    reset: () => void;
  };
};

export interface PlaceCardProps {
  place: Place;
}
