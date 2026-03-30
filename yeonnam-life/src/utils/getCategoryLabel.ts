import { EMOJI_MAP } from "@/constants/category";
import type { Category } from "@/types/Category";

const getCategoryLabel = (category: Category): string => {
  return EMOJI_MAP[category];
};

export default getCategoryLabel;
