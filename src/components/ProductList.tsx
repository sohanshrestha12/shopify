import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex gap-2 p-5 justify-center flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
