import axios from 'axios';
import { external } from '../config.json';

const { backendAPI } = external;

const getHeaders = () => {
  return { caller_name: 'joaquin', caller_lastname: 'tornello' };
};

export const getSearchResults = async query => {
  const url = `${backendAPI.baseURL}/items?q=${query}`;

  const result = await axios.get(url, { headers: getHeaders() });

  return result.data;
};

export const getProductDetail = async id => {
  const url = `${backendAPI.baseURL}/items/${id}`;

  const result = await axios.get(url, { headers: getHeaders() });

  return result.data;
};
