import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import products from "../../assets/products.json";
import PrimaryButton from "../../components/Button/Primary";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import { useBag } from "../../contexts/bag-modal-context";

const Container = styled.div`
  display: flex;
  padding: 1em;

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PhotoGridContainer = styled.div`
  flex: 0.6;
  margin: 1em;
`;

const Details = styled.div`
  flex: 0.4;
  margin: 1em;
`;

const ProductTitle = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
`;

const AdditionalInfo = styled.p`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  margin-top: 0.4em;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 1em;
`;

const Price = styled.p`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 0.4em;
`;

const Row = styled.div`
  display: flex;
  margin-top: 1em;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { products: bagProducts, setProducts: setBagProducts } = useBag();

  const handleAddToBagPressed = () => {
    const newBagProducts = Array.from(new Set([...bagProducts, product]));
    setBagProducts(newBagProducts);
  };

  // Memoise if product is added to bag or not
  const isProductInBag = useMemo(() => {
    return bagProducts.find((p) => p.url === product?.url) ? true : false;
  }, [product, bagProducts]);

  useEffect(() => {
    const productTitle = id;

    const product = products.find((product) => product.title === productTitle);

    if (product) {
      setProduct(product);
    }
  }, [id]);

  return (
    <Container>
      <PhotoGridContainer>
        <PhotoGrid images={product?.images.slice(0, 4) || []} />
      </PhotoGridContainer>

      <Details>
        <ProductTitle>{product?.brand}</ProductTitle>
        <AdditionalInfo>{product?.additionalInfo}</AdditionalInfo>
        <Price>Rs. {product?.originalPrice}</Price>

        <Row>
          <PrimaryButton
            disabled={isProductInBag}
            onClick={handleAddToBagPressed}
          >
            {isProductInBag ? "Added to bag" : "Add to bag"}
          </PrimaryButton>
          {/* <DefaultButton>Add to wishlist</DefaultButton> */}
        </Row>
      </Details>
    </Container>
  );
};

export default ProductDetail;
