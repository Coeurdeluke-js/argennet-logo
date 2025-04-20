export const API_URL = 'http://localhost:5000/api';

export const config = {
  api: {
    products: {
      featured: `${API_URL}/products/featured`,
      list: `${API_URL}/products`,
      detail: (id: string) => `${API_URL}/products/${id}`,
    },
    orders: {
      list: `${API_URL}/orders`,
      create: `${API_URL}/orders`,
      detail: (id: string) => `${API_URL}/orders/${id}`,
      cancel: (id: string) => `${API_URL}/orders/${id}/cancel`,
    },
  },
}; 