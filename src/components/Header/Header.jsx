import styled from "styled-components";
import { useFilters } from "../../contexts/filters-context";

const Container = styled.header`
  padding: 1em 3em;
  box-shadow: 0px 0px 2px 0px #aaa;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-size: 1.2rem;
`;

const SearchContainer = styled.div``;

const SearchQueryInput = styled.input``;

const Header = () => {
  const { searchQuery, setSearchQuery } = useFilters();

  const handleQueryChange = (e) => setSearchQuery(e.target.value);

  return (
    <Container>
      <Logo>Myntra</Logo>
      <SearchContainer>
        <SearchQueryInput value={searchQuery} onChange={handleQueryChange} />
      </SearchContainer>
    </Container>
  );
};

export default Header;
