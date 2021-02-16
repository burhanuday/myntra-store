import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const sliderSettings = {
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  style: {
    width: "100%",
  },
};

const Container = styled.div`
  padding: 1em;
  width: 300px;
`;

const ProductTitle = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.92rem;
`;

const AdditionalInfo = styled.p`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;

const CardContent = styled.div`
  padding: 1em;
  margin-top: 1em;
`;

const ProductTile = ({ product }) => {
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  const handleMouseEnter = () => setShouldAutoplay(true);

  const handleMouseLeave = () => setShouldAutoplay(false);

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Slider
        {...sliderSettings}
        autoplay={shouldAutoplay}
        dots={shouldAutoplay}
        arrows={false}
      >
        {product.images.map((image) => (
          <img src={image.src} alt={image.view} key={image.view} />
        ))}
      </Slider>
      <CardContent>
        <ProductTitle>{product.brand}</ProductTitle>
        <AdditionalInfo>{product.additionalInfo}</AdditionalInfo>
      </CardContent>
    </Container>
  );
};

export default ProductTile;
