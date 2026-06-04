import axios from "axios";

const API_KEY = "53845698-f250b2b7bdd1c371dc84d74dd";

axios.defaults.baseURL = "https://pixabay.com/api/";

const fetchImages = async (query, page = 1) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
  );

  return response.data.hits;
};

const api = {
  fetchImages,
};

export default api;
