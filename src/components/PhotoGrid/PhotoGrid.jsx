import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const PhotoGrid = ({ images }) => {
  return (
    <Container>
      {images.map((image) => (
        <Image src={image.src} alt={image.view} key={image.view} />
      ))}
    </Container>
  );
};

export default PhotoGrid;
