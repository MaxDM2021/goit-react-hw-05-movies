import axios from "axios";
const API_URL = 'https://api.themoviedb.org/3';
export const DEF_IMG = 'https://via.placeholder.com/200x150';
const API_KEY = 'a620a6416fb18e40f7d335c64c3f9e0e';
export const API_IMG = 'https://image.tmdb.org/t/p/w500';


axios.defaults.baseURL = API_URL;

export const fetchTrendDayMovies = () => {
  return axios.get(`/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      language: "en",
      page: 1,
    },
  }).then((response)=>response.data.results)
 
}


export const fetchMovieQuery = async (searchQuery) => {
  
  const response = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      language: "en",
      query: searchQuery,
      page: 1,
    },
  })
  return response.data.results
}


export const fetchMovieByID = (id) => {
  return axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: "en",
      
    },
  }).then((response)=>response.data)
}

export const fetchMovieByCredit = (id) => {

  return axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: "en",
    },
  }).then((response)=>response.data.cast)
}

export const fetchMovieByReviews = (id) => {
  return axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: "en",
    },
  }).then((response)=>response.data.results)
}













