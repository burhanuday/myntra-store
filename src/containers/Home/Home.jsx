import ProductGrid from "../../components/ProductGrid/ProductGrid";
import products from "../../assets/products.json";
import styled from "styled-components";
import Menu from "./Menu";

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
  return (
    <Container>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <ProductGridContainer>
        <ProductGrid products={products} />
      </ProductGridContainer>
    </Container>
  );
};

export default Home;
