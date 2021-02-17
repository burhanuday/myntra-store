import styled from "styled-components";
import { brands } from "../../assets/brands";

const Container = styled.div`
  padding: 1em;
`;

const Filters = styled.div`
  margin-top: 0.6em;
`;

const FormControl = styled.div`
  margin-top: 0.2em;
`;

const FilterLabel = styled.h3`
  font-size: 1rem;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  margin-left: 0.8em;
  color: rgba(0, 0, 0, 0.7);
`;

const Menu = () => {
  return (
    <Container>
      <FilterLabel>BRAND</FilterLabel>
      <Filters>
        {brands.map((brand) => (
          <FormControl>
            <input type="checkbox" id={brand} name={brand} checked />
            <CheckboxLabel for={brand}>{brand}</CheckboxLabel>
          </FormControl>
        ))}
      </Filters>
    </Container>
  );
};

export default Menu;
