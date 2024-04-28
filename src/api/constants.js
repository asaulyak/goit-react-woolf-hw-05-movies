import axios from 'axios';

export const API_KEY = 'a3d070f6a895e16a6e956685fb71c212';
export const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2QwNzBmNmE4OTVlMTZhNmU5NTY2ODVmYjcxYzIxMiIsInN1YiI6IjY2MmJmMWQzNmMxOWVhMDEyNTFlMDVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uj2n1P6i22qFCO2ip7SKlzcjZ3BW0zSo71cxJBkmNbg';
export const API_BASE_URL = 'https://api.themoviedb.org/3';

export const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    authorization: `Bearer ${API_TOKEN}`,
    accept: 'application/json',
  },
});
