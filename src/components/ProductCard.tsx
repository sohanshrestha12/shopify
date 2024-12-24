import { Product } from "@/types/product";
import { Card } from "./ui/card";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);
  return (
    <Card className="flex flex-col items-center p-5 h-[400px] w-[300px]">
      <img
        className="h-[200px] rounded-xl text-center object-cover"
        src={product.image.src}
        alt={product.title}
      />
      <h3 className="text-xl">{product.title}</h3>
      <div className="flex-1 overflow-hidden text-justify">
        <p
          className="line-clamp-3  text-sm text-gray-500"
          dangerouslySetInnerHTML={{ __html: product.body_html }}
        />
      </div>
      <p>Price: ${product.variants[0].price}</p>
    </Card>
  );
};

export default ProductCard;
