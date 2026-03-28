import type { Place } from "./Place";

export const CATEGORY_EMOJI: Record<string, string> = {
  bakery: "🥐",
  cafe: "☕️",
  restaurant: "🍽️",
};

export interface PlaceCardType {
  isHome: boolean;
  place: Place;
}
