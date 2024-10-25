import React, { useEffect, useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { CartProvider } from "./context/cart";
import { productsApiRepository } from "./core/infrastructure/ProductsApi";

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterByPrice = (products) => {
    return products.filter((product) => product.price >= filters.minPrice);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await productsApiRepository.getProducts({
          category: filters.category,
        });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [filters.category]);

  const filteredProducts = filterByPrice(products);

  return (
    <CartProvider>
      <Header filters={filters} changeFilters={setFilters} />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
