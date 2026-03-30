import api from "./index";

// places 목록 api
export const getPlaces = async () => {
  const { data } = await api.get("places");
  return data;
};

// place 세부정보 api
export const getPlaceById = async (id: string) => {
  const { data } = await api.get(`places/${id}`);
  return data;
};

// (별점순) place 상위 5개 불러오는 api
export const getHotPlace = async () => {
  const { data } = await api.get("hotPlaces");
  return data;
};
