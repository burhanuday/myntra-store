import styled from "styled-components";

const IconButton = styled.img`
  height: ${({ size }) => size || "28px"};
  width: ${({ size }) => size || "28px"};
  cursor: pointer;
  margin: 0px 8px;
`;

export default IconButton;
