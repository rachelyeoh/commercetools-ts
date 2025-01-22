import { pocApiRoot } from '../middleware/client.js';

const fetchProducts = async () => {
  try {
    console.log(pocApiRoot);
    // pocApiRoot.get().execute().then(console.log('done'));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};

export { fetchProducts };
