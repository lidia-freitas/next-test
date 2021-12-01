import axios from 'axios';
import Item from 'models/Item';

export default async function handler(req, res) {
  const api = axios.create({
    baseURL: 'https://api.mercadolibre.com'
  });

  try {
    const { id } = req.query;
    const result = await api.get(`/items/${id}`);
    const details = await api.get(`/items/${id}/description`);

    const item = new Item(result.data, details.data);

    res.status(200).json(item);
  } catch (error) {
    console.error(error);

    return res.status(400).json({ code: 'Bad Request' });
  }
}

