import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f6d5c65e481e4dc88e5b144d0e0dabe7",
  },
});
