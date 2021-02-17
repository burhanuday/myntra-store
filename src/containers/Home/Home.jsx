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

const Row = styled.div`
  display: flex;
  margin-top: 1em;
  justify-content: flex-end;
  padding-right: 2em;
`;

const Home = () => {
  const {
    brandsFilter,
    priceFilters,
    searchQuery,
    sort,
    setSort,
  } = useFilters();

  const handleSortChange = (e) => setSort(e.target.value);

  // Filter products based on brands, price and search query
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

    if (sort) {
      if (sort === "low-to-high") {
        products.sort((a, b) => a.originalPrice - b.originalPrice);
      } else if (sort === "high-to-low") {
        products.sort((b, a) => a.originalPrice - b.originalPrice);
      }
    }

    return products;
  }, [brandsFilter, priceFilters, searchQuery, sort]);

  return (
    <Container>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <ProductGridContainer>
        <Row>
          <select onChange={handleSortChange} value={sort}>
            <option value="">Sort by price</option>
            <option value="low-to-high">Price: low to high</option>
            <option value="high-to-low">Price: high to low</option>
          </select>
        </Row>
        <ProductGrid products={filteredProducts} />
      </ProductGridContainer>
    </Container>
  );
};

export default Home;
