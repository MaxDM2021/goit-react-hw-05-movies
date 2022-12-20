import axios from "axios";
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a620a6416fb18e40f7d335c64c3f9e0e';



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
  
  const response = await axios.get(`/search/movie/`, {
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
  }).then((response)=>response.data.results)
}

export const fetchMovieByCredit = (id) => {
  return axios.get(`/movie/${id}/credit`, {
    params: {
      api_key: API_KEY,
      language: "en",
    },
  }).then((response)=>response.data.results)
}

export const fetchMovieByReviews = (id) => {
  return axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: "en",
    },
  }).then((response)=>response.data.results)
}


// export const getTrendDayMovies = () => {
//   return Promise.resolve(fetchTrendDayMovies());
// };

// export const getMovieQuery = () => {
//   return Promise.resolve(fetchMovieQuery());
// };


// export const gethMovieByID = id => {
//   return Promise.resolve(fetchMovieByID.find(movie => movie.id === id));
// };

// export const gethMovieByCredit = () => {
//   return Promise.resolve(fetchMovieByCredit());
// };


// export const getMovieByReviews = () => {
//   return Promise.resolve(fetchMovieByReviews());
// };
















// function handlerGenres ({results, ...other}, genres) {
//   for (const object of results) {
//     object.genre_str = object.genre_ids.map(elem => genres.find(genre =>  genre.id === elem).name);
//   }
//   return ({...other, results})
// }

// class MoviesApi {

//   static genres = null;
//   static async fetchGendresMovie() {
//       const response = await axios.get("/genre/movie/list", {
//         params: {
//           api_key: API_KEY,
//         },
//       });
//       this.genres = response.data.genres;
//     }


//   #searchQuery;
//   #currentPage;

//   constructor () {
//       this.#searchQuery = null;
//       this.#currentPage = 1;

//       this.constructor.fetchGendresMovie();
//   }


//   async fetchTrendDayMovies() {
//     const response = await axios.get(`/trending/movie/day`, {
//       params: {
//         api_key: API_KEY,
//         language: "en",
//         page: this.#currentPage,
//       },
//     });
//     return handlerGenres(response.data, MoviesApi.genres);
//   }

//   async fetchMovieByID(id) {
//     const response = await axios.get(`/movie/${id}`, {
//       params: {
//         api_key: API_KEY,
//         language: "en",
//       },
//     });
//     return response.data;
//   }

//   async fetchMovieQuery () {
//     const response = await axios.get(`/search/movie/`, {
//       params: {
//         api_key: API_KEY,
//         language: "en",
//         query: this.#searchQuery,
//         page: this.#currentPage,
//       },
//     });
//     return handlerGenres(response.data, MoviesApi.genres);
//   }

// async fetchMovieByCredit(id) {
//   const response = await axios.get(`/movie/${id}/credit`, {
//     params: {
//       api_key: API_KEY,
//       language: "en",
//     },
//   });
//   return response.data;
// }

// async fetchMovieByReviews(id) {
//   const response = await axios.get(`/movie/${id}/reviews`, {
//     params: {
//       api_key: API_KEY,
//       language: "en",
//     },
//   });
//   return response.data;
// }

//   get query() {
//     return this.#searchQuery
//   }

//   set query(newSearhQuery) {
//     this.#searchQuery = newSearhQuery;
//     this.#currentPage = 1;
//   }

//   nextPage() {
//     this.#currentPage += 1;
//   }

//   previousPage() {
//     if (!(this.#currentPage - 1)){
//       return
//     }
    
//     this.#currentPage -= 1;
//   }

//   get currentpage() {
//     return this.#currentPage
//   }

//   set currentpage(newPage) {
//     this.#currentPage = newPage;
//   }

//   get genres() {
//     return MoviesApi.genres;
//   }

//   set genres (genre) {
//       return
//   }

  
// }

// export default MoviesApi;


// ====================================================


// import axios from "axios";
// const API_URL = 'https://api.themoviedb.org/3';
// const API_KEY = 'a620a6416fb18e40f7d335c64c3f9e0e';

// const searchQuery = null;
// const currentPage = 1;

// axios.defaults.baseURL = API_URL;


// // function handlerGenres ({results, ...other}, genres) {
// //   for (const object of results) {
// //     object.genre_str = object.genre_ids.map(elem => genres.find(genre =>  genre.id === elem).name);
// //   }
// //   return ({...other, results})
// // }

// function  fetchTrendDayMovies() {
//   const response = axios.get(`/trending/movie/day`, {
//     params: {
//       api_key: API_KEY,
//       language: "en",
//       page: currentPage,
//     },
//   });
//   return response.data;
// }

// function fetchMovieQuery () {
//   const response =  axios.get(`/search/movie/`, {
//     params: {
//       api_key: API_KEY,
//       language: "en",
//       query: searchQuery,
//       page: currentPage,
//     },
//   });
//   return response.data;
// }


// function fetchMovieByID(id) {
//   const response =  axios.get(`/movie/${id}`, {
//     params: {
//       api_key: API_KEY,
//       language: "en",
//     },
//   });
//   return response.data;
// }

// function fetchMovieByCredit(id) {
//   const response = axios.get(`/movie/${id}/credit`, {
//     params: {
//       api_key: API_KEY,
//       language: "en",
//     },
//   });
//   return response.data;
// }

// function fetchMovieByReviews(id) {
//   const response = axios.get(`/movie/${id}/reviews`, {
//     params: {
//       api_key: API_KEY,
//       language: "en",
//     },
//   });
//   return response.data;
// }


// export const getTrendDayMovies = () => {
//   return Promise.resolve(fetchTrendDayMovies());
// };

// export const getMovieQuery = () => {
//   return Promise.resolve(fetchMovieQuery());
// };


// export const gethMovieByID = id => {
//   return Promise.resolve(fetchMovieByID.find(movie => movie.id === id));
// };

// export const gethMovieByCredit = () => {
//   return Promise.resolve(fetchMovieByCredit());
// };


// export const getMovieByReviews = () => {
//   return Promise.resolve(fetchMovieByReviews());
// };





// =====================================================

// const db = {
//     invoices: [
//       {
//         id: '172987',
//         recipient: 'Jacob Mercer',
//         account: 20138714,
//         total: 8000,
//         date: {
//           created: '2011-10-05T14:48:00.000Z',
//           due: '2011-10-12T00:00:00.000Z',
//         },
//       },
//       {
//         id: '173851',
//         recipient: 'Adrian Cross',
//         account: 30986127,
//         total: 11000,
//         date: {
//           created: '2017-07-01T12:18:00.000Z',
//           due: '2017-08-14T00:00:00.000Z',
//         },
//       },
//       {
//         id: '186541',
//         recipient: 'Solomon Fokes',
//         account: 78615230,
//         total: 82000,
//         date: {
//           created: '2019-03-17T10:12:00.000Z',
//           due: '2019-04-02T00:00:00.000Z',
//         },
//       },
//       {
//         id: '185744',
//         recipient: 'Artemis Tau',
//         account: 82719051,
//         total: 17000,
//         date: {
//           created: '2022-09-28T10:57:00.000Z',
//           due: '2022-11-02T00:00:00.000Z',
//         },
//       },
//     ],

//     customers: [
//       { id: 1, name: 'Mischa Hopkins' },
//       { id: 2, name: 'Anis Cresswell' },
//       { id: 3, name: 'Milla Wagner' },
//       { id: 4, name: 'Faizan Gillespie' },
//       { id: 5, name: 'Roy Mays' },
//       { id: 6, name: 'Leanne Knott' },
//       { id: 7, name: 'Debbie Fitzgerald' },
//       { id: 8, name: 'Phebe Reyes' },
//       { id: 9, name: 'Lola-Mae Kouma' },
//       { id: 10, name: 'Krish Marsh' },
//       { id: 11, name: 'Sienna Rodgers' },
//       { id: 12, name: 'Harper-Rose Schroeder' },
//       { id: 13, name: 'Pippa Gill' },
//       { id: 14, name: 'Effie Shaffer' },
//       { id: 15, name: 'Eshal Nixon' },
//       { id: 16, name: 'Phyllis Dunlop' },
//       { id: 17, name: 'Efe Valenzuela' },
//       { id: 18, name: 'Roman Mcleod' },
//       { id: 19, name: 'Mikayla Ibarra' },
//       { id: 20, name: 'Fatma Yu' },
//     ],
//   };
  
//   export const getInvoices = () => {
//     return Promise.resolve(db.invoices);
//   };
  
//   export const getInvoiceById = invoiceId => {
//     return Promise.resolve(db.invoices.find(invoice => invoice.id === invoiceId));
//   };


//   export const getCustomers = () => {
//     return Promise.resolve(db.customers);
//   };
  
//   export const getCustomerById = id => {
//     return Promise.resolve(db.customers.find(customer => customer.id === id));
//   };

  