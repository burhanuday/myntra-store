import ProductGrid from "../../components/ProductGrid/ProductGrid";
import allProducts from "../../assets/products.json";
import styled from "styled-components";
import Menu from "./Menu";
import { useMemo } from "react";
import { useFilters } from "../../contexts/filters-context";
import { priceRanges } from "../../assets/filters";

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
  const { brandsFilter, priceFilters, searchQuery } = useFilters();

  const filteredProducts = useMemo(() => {
    let products = allProducts;
    if (brandsFilter.length) {
      products = products.filter((p) => {
        return brandsFilter.includes(p.brand);
      });
    }

    if (priceFilters.length) {
      products = products.filter((product) => {
        let result = false;

        priceFilters.forEach((filterId) => {
          const filter = priceRanges.find((f) => f.id === filterId);
          if (
            filter &&
            product.originalPrice >= filter.start &&
            product.originalPrice <= filter.end
          ) {
            result = true;
          }
        });

        return result;
      });
    }

    if (searchQuery) {
      products = products.filter((p) => {
        console.log(p.product.toLowerCase(), searchQuery.toLowerCase());
        return (
          p.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.additionalInfo.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }

    return products;
  }, [brandsFilter, priceFilters, searchQuery]);

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
