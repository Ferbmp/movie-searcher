// src/common/api.ts
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDAwMGNlOGZhZWEyZmFiM2RhZmI3ZDNhM2RmMjFiZCIsInN1YiI6IjY1ODgyOTM5ZWE3YjBlNWY0OThmYmM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wrklGQ-KUPrYlU1t6bSd3waD_D2Mg0ZcvlO92_1E8pE';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
