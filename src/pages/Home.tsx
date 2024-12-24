import useProduct from "@/hooks/useProduct";
import ProductList from "@/components/ProductList";
import Pagination from "@/components/Pagination";

const Home = () => {
  const limit = 10;
  const { products, totalProducts, currentPage, handlePageChange } =
    useProduct(limit);

  return (
    <div>
      <h1 className="text-center text-5xl my-5">Product Listing</h1>
      <ProductList products={products} />
      <Pagination
        currentPage={currentPage}
        totalProducts={totalProducts}
        onPageChange={handlePageChange}
        limit={limit}
      />
    </div>
  );
};

export default Home;
