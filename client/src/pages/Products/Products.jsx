import React, { useEffect } from "react";
import ProductsContainer from "../../containers/Products/Products";
const Products = () => {
  useEffect(() => {
    document.title = "SẢN PHẨM - KINGSTONE ĐÀ NẴNG";
  }, []);

  return (
    <>
      <ProductsContainer />
    </>
  );
};

export default Products;
