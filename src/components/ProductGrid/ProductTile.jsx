import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const sliderSettings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  style: {
    width: "100%",
  },
};

const Container = styled.div`
  padding: 1em;
  width: 200px;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 0px 12px 2px #efefef;
  }
`;

const ProductTitle = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  text-decoration: none;
  color: black;
`;

const AdditionalInfo = styled.p`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  margin-top: 0.4em;
`;

const CardContent = styled.div`
  padding: 0.5em;
  margin-top: 0.5em;
  text-decoration: none;
`;

const Price = styled.p`
  color: black;
  font-weight: bold;
  font-size: 0.8rem;
  margin-top: 0.4em;
`;

const ProductTile = ({ product }) => {
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  const handleMouseEnter = () => setShouldAutoplay(true);

  const handleMouseLeave = () => setShouldAutoplay(false);

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={product.url}>
        <Slider
          {...sliderSettings}
          autoplaySpeed={shouldAutoplay ? 1000 : 150000}
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
          <Price>{product.originalPrice}</Price>
        </CardContent>
      </Link>
    </Container>
  );
};

export default ProductTile;
