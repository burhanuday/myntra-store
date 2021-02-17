import { useState } from "react";
import styled from "styled-components";
import { useFilters } from "../../contexts/filters-context";

import bagIcon from "../../assets/icons/shopping-bag.svg";
import IconButton from "../Button/IconButton";
import { useBag } from "../../contexts/bag-modal-context";
import { Link } from "react-router-dom";

const Container = styled.header`
  padding: 1em 3em;
  box-shadow: 0px 0px 2px 0px #aaa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.h2`
  font-size: 1.2rem;
  color: black;
  text-decoration-style: none;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  display: flex;
  margin-top: 1em;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const SearchQueryInput = styled.input`
  border: 1px solid lightgray;
  padding: 0.5em 1em;
  border-radius: 4px;
`;

const Header = () => {
  const { setSearchQuery } = useFilters();
  const [inputValue, setInputValue] = useState("");

  const { setShowBagModal } = useBag();

  const handleBagClicked = () => setShowBagModal(true);
  const handleQueryChange = () => setSearchQuery(inputValue);
  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <Container>
      <Link to="/">
        <Logo>Myntra</Logo>
      </Link>
      <SearchContainer>
        <IconButton onClick={handleBagClicked} src={bagIcon} />
        <SearchQueryInput
          placeholder="Search products"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleQueryChange();
            }
          }}
        />
      </SearchContainer>
    </Container>
  );
};

export default Header;
