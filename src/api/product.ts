import { productUrl } from "@/config/Axios";
import { Product } from "@/types/product";

interface FetchProductsResponse {
  products: Product[];
  linkHeader: string;
}

export const fetchProducts = async (
  page_info: string | null = null,
  limit: number = 10
): Promise<FetchProductsResponse> => {
  const response = await productUrl.get(`/products`, {
    params: {
      page_info,
      limit,
    },
  });

  return {
    products: response.data.products,
    linkHeader: response.data.linkHeader,
  };
};
