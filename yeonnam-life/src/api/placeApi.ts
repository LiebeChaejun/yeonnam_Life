import api from "./index";

export const getPlaces = async () => {
  const { data } = await api.get("places");
  return data;
};

export const getPlaceById = async (id: string) => {
  const { data } = await api.get(`places/${id}`);
  return data;
};
