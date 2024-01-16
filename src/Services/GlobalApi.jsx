// api we are fetching from wesite 
//https://www.themoviedb.org/
import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_API_KEY;

const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;
const trendingVideosURL = `${movieBaseUrl}/trending/all/day?api_key=${api_key}`;

const getTrendingVideos = axios.get(trendingVideosURL);
const getMovieByGenreId = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
