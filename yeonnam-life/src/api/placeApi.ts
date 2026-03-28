import api from "./index";

export const getPlaces = async () => {
  const { data } = await api.get("places");
  return data;
};
