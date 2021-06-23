import {apiKey} from './components/constants/constants';

export const Netflix = `discover/tv?with_network=213&api_key=${apiKey}`;
export const Horror = `/discover/movie?api_key=${apiKey}&with_genres=27`;
export const Fantasy = `/discover/movie?api_key=${apiKey}&with_genres=14`;
export const Mystery = `/discover/movie?api_key=${apiKey}&with_genres=9648`;
export const Comedy = `/discover/movie?api_key=${apiKey}&with_genres=35`;

