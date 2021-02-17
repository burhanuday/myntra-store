import styled from "styled-components";
import ProductTile from "./ProductTile";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1em;
  justify-items: center;
  padding: 1em;

  @media (min-width: 768px) {
    grid-template-columns: auto auto auto auto auto;
  }
`;

const ProductGrid = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => (
        <ProductTile key={product.url} product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid;
