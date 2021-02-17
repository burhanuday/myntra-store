import styled from "styled-components";
import BaseButton from "./Base";

const DefaultButton = styled(BaseButton)`
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.7);

  &:hover {
    background-position: right center;
    color: #000;
    text-decoration: none;
    border: 1px solid black;
  }
`;

export default DefaultButton;
