const BASE_URL = "https://dummyjson.com";

const getProducts = async (filters = {}) => {
  const { category } = filters;  // Extraer la categoría de los filtros
  
  let productsUrl = `${BASE_URL}/products`;

  if (category && category !== 'all') {
    productsUrl = `${BASE_URL}/products/category/${category}`;
  }

  const response = await fetch(productsUrl);
  const jsonResponse = await response.json();
  return jsonResponse.products;
};

const getProductById = async (id) => {
  const productUrl = `${BASE_URL}/products/${id}`;
  const response = await fetch(productUrl);
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const productsApiRepository = {
  getProducts,
  getProductById,
};
