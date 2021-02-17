import { useState } from "react";
import styled from "styled-components";
import { useFilters } from "../../contexts/filters-context";

const Container = styled.header`
  padding: 1em 3em;
  box-shadow: 0px 0px 2px 0px #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  font-size: 1.2rem;
`;

const SearchContainer = styled.div``;

const SearchQueryInput = styled.input`
  border: 1px solid lightgray;
  padding: 0.5em 1em;
  border-radius: 4px;
`;

const Header = () => {
  const { searchQuery, setSearchQuery } = useFilters();
  const [inputValue, setInputValue] = useState("");

  const handleQueryChange = () => setSearchQuery(inputValue);
  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <Container>
      <Logo>Myntra</Logo>
      <SearchContainer>
        <SearchQueryInput
          placeholder="Search products"
          value={inputValue || searchQuery}
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
