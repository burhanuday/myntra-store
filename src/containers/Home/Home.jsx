import ProductGrid from "../../components/ProductGrid/ProductGrid";
import allProducts from "../../assets/products.json";
import styled from "styled-components";
import Menu from "./Menu";
import { useMemo } from "react";
import { useFilters } from "../../contexts/filters-context";

const Container = styled.section`
  display: flex;
`;

const MenuContainer = styled.article`
  flex: 0.2;
`;

const ProductGridContainer = styled.article`
  flex: 0.8;
`;

const Home = () => {
  const { brandsFilter } = useFilters();

  const filteredProducts = useMemo(() => {
    let products = allProducts;
    if (brandsFilter.length) {
      products = products.filter((p) => {
        return brandsFilter.includes(p.brand);
      });
    }

    return products;
  }, [brandsFilter]);

  return (
    <Container>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <ProductGridContainer>
        <ProductGrid products={filteredProducts} />
      </ProductGridContainer>
    </Container>
  );
};

export default Home;
