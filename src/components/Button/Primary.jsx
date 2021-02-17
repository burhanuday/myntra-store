import styled from "styled-components";
import BaseButton from "./Base";

const PrimaryButton = styled(BaseButton)`
  background-image: linear-gradient(
    to right,
    #da22ff 0%,
    #9733ee 51%,
    #da22ff 100%
  );

  color: white;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export default PrimaryButton;
