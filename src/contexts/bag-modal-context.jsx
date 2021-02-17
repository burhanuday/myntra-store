/* 
  Context provider to keep track of wishlists
*/

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import IconButton from "../components/Button/IconButton";
import ProductTile from "../components/ProductGrid/ProductTile";

import closeIcon from "../assets/icons/close.svg";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BagContext = React.createContext();

const BAG_STORAGE_KEY = "@myntra-store/bag";

const BagProvider = ({ children }) => {
  const [products, setProducts] = useLocalStorage(BAG_STORAGE_KEY, []);
  const [showBag, setShowBagModal] = useState(false);

  const handleClosePressed = () => setShowBagModal(false);

  const handleProductRemoved = (url) => {
    const newProducts = products.filter((p) => p.url !== url);
    setProducts(newProducts);
  };

  // useEffect(() => {
  //   if (products.length) {
  //     localStorage.setItem(BAG_STORAGE_KEY, JSON.stringify(products));
  //   }
  // }, [products]);

  // useEffect(() => {
  //   const products = JSON.parse(localStorage.getItem(BAG_STORAGE_KEY) || "[]");
  //   setProducts(products);
  // }, []);

  return (
    <BagContext.Provider
      value={{
        products,
        setProducts,
        setShowBagModal,
      }}
    >
      {children}

      <Modal
        isOpen={showBag}
        onRequestClose={handleClosePressed}
        contentLabel="Bag"
      >
        <Header>
          <h2>Bag</h2>
          <IconButton
            size="18px"
            src={closeIcon}
            onClick={handleClosePressed}
          />
        </Header>
        <ProductRow>
          {products.map((product) => (
            <ProductTile
              key={product.url}
              product={product}
              showRemoveButton
              onRemoveClicked={handleProductRemoved}
            />
          ))}
        </ProductRow>
      </Modal>
    </BagContext.Provider>
  );
};

const useBag = () => {
  const context = React.useContext(BagContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export { BagProvider, useBag };
