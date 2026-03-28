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
  category: string;
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

type PartialPlace = Partial<Place>;

export type PlaceState = {
  place: PartialPlace | null; // 단일 장소
  places: PartialPlace[]; // 목록
  isLoading: boolean;
  error: string | null;
};

export type PlaceActions = {
  actions: {
    setPlace: (place: PartialPlace) => void;
    setPlaces: (courses: PartialPlace[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    reset: () => void;
  };
};
