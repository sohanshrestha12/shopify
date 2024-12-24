import { useEffect, useState } from "react";
import { fetchProducts } from "../api/product";
import { Product } from "@/types/product";

const useProduct = (limit: number = 10) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [nextPageInfo, setNextPageInfo] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalProducts = 60;

  useEffect(() => {
    const loadProducts = async () => {
      const { products, linkHeader } = await fetchProducts(nextPageInfo, limit);
      setProducts(products);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const links = linkHeader.split(",").reduce((acc: any, link: string) => {
        const match = link.match(/<([^>]+)>; rel="([^"]+)"/);
        if (match) {
          acc[match[2]] = match[1];
        }
        return acc;
      }, {});

      setNextPageInfo(links.next || null);
    };

    loadProducts();
  }, [currentPage, limit]);

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;

    setCurrentPage(page);
  };

  return { products, totalProducts, currentPage, handlePageChange };
};

export default useProduct;
