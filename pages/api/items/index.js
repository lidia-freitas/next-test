import axios from 'axios';
import Item from 'models/Item';

export default async function handler(req, res) {
  const api = axios.create({
    baseURL: 'https://api.mercadolibre.com'
  });

  try {
    const params = { q: req.query };
    const response = await api.get(`/sites/MLA/search`, { params });

    const item = response.data.results.map(i => new Item(i));

    res.status(200).json(item);
  } catch (error) {
    console.error(error);

    return res.status(400).json({ code: 'Bad Request' });
  }
}


