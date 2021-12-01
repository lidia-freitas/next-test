import axios from 'axios';
import Item from 'models/Item';

const fetchService = () => {
  const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000
  });

  const getItems = async (params) => {
    let data = undefined;
    let error = '';

    try {
      const response = await api.get(`/items`, { params });
      data = response.data;
    } catch (err) {
      error = err;
    }

    return {
      props: { data, error }
    };
  };

  const getItem = async (id) => {
    let data = {};
    let error = '';

    try {
      const response = await api.get(`/items/${id}`);
      data = response.data;
    } catch (err) {
      error = err;
    }

    return {
      props: { data, error }
    };
  };

  return {
    getItem,
    getItems
  };
};

export default fetchService;
