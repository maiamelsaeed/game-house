import useData from "./useData";

export interface Genre {
  id: 0;
  name: "string";
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
