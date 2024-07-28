import axios from 'axios';

export const apiUrl = 'https://catatan.sidak.co.id';

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const fetchApi = async (url, options = {}) => {
  try {
    const response = await instance({
      url,
      method: options.method || 'GET',
      data: options.data,
      headers: options.headers,
    });
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};
