import axios from 'axios'

import FilmIndex from '../components/films/FilmIndex'

const baseUrlDiscover = 'https://api.themoviedb.org/3'


export const getAllFilms = ( page ) => {
  return axios.get(`${baseUrlDiscover}/discover/movie?api_key=5adb5c242d8f7268a630ecc811e49a81&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=100&vote_average.gte=8`)
}

// export const getNextPage = () => {
//   return axios.get(`${baseUrlDiscover}/discover/movie?api_key=5adb5c242d8f7268a630ecc811e49a81&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=100&vote_average.gte=8`)
// }
// export const getPreviousPage = () => {
//   return axios.get(`${baseUrlDiscover}/discover/movie?api_key=5adb5c242d8f7268a630ecc811e49a81&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=100&vote_average.gte=8`)
// }


// Search Function (Base url discover+ parameters)
// Find out how many pages in object
// setState: Pages
// make buttons based on number of pages
// each button has value (1,2,3,4,5,6,7)
// If user clicks on button, re-render filmindex changing the getAllFilm function utilising the page number value

// export const searchFilms = ( page ) => {
//   return axios.get(`${baseUrlDiscover}/search/movie?api_key=5adb5c242d8f7268a630ecc811e49a81&query=${event.target.handle}`)
// }