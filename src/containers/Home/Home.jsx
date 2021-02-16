import ProductGrid from "../../components/ProductGrid/ProductGrid";
import products from "../../assets/products.json";

const Home = () => {
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default Home;
