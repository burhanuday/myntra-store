import styled from "styled-components";
import { brands, priceRanges } from "../../assets/filters";
import { useFilters } from "../../contexts/filters-context";

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
  margin-top: 1em;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  margin-left: 0.8em;
  color: rgba(0, 0, 0, 0.7);
`;

const Menu = () => {
  const {
    brandsFilter,
    setBrandsFilter,
    priceFilters,
    setPriceFilters,
  } = useFilters();

  const handleBrandFilterToggle = (brand, value) => {
    if (value) {
      setBrandsFilter((brands) => [...brands, brand]);
    } else {
      const brandsClone = brandsFilter.filter((b) => b !== brand);
      setBrandsFilter(brandsClone);
    }
  };

  const handlePriceFilterToggle = (priceId, value) => {
    if (value) {
      setPriceFilters((prices) => [...prices, priceId]);
    } else {
      const pricesClone = priceFilters.filter((p) => p !== priceId);
      setPriceFilters(pricesClone);
    }
  };

  return (
    <Container>
      <FilterLabel>BRAND</FilterLabel>
      <Filters>
        {brands.map((brand) => {
          return (
            <FormControl key={brand}>
              <input
                type="checkbox"
                id={brand}
                name={brand}
                onChange={(e) =>
                  handleBrandFilterToggle(e.target.name, e.target.checked)
                }
                checked={
                  brandsFilter.find((b) => b === brand) === undefined
                    ? false
                    : true
                }
              />
              <CheckboxLabel htmlFor={brand}>{brand}</CheckboxLabel>
            </FormControl>
          );
        })}
      </Filters>

      <FilterLabel>PRICE</FilterLabel>
      <Filters>
        {priceRanges.map((range) => {
          return (
            <FormControl key={range.id}>
              <input
                type="checkbox"
                id={range.id}
                name={range.id}
                onChange={(e) =>
                  handlePriceFilterToggle(e.target.name, e.target.checked)
                }
                checked={
                  priceFilters.find((p) => p === range.id) === undefined
                    ? false
                    : true
                }
              />
              <CheckboxLabel htmlFor={range.id}>{range.id}</CheckboxLabel>
            </FormControl>
          );
        })}
      </Filters>
    </Container>
  );
};

export default Menu;
