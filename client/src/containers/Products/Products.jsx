import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroBlog, fetchProduct } from "../../api";
import {
  BANBEP,
  BANGHIEUVACHDUNG,
  CAPSANHDON,
  CAUTHANG,
  LAVOBOBANQUAY,
  MATTIEN,
  NENBANGHEDA,
  TRUCOT,
} from "../../app/ItemTypes";
import {
  setProductSpecial,
  setHeroBlog,
  setProductsList,
} from "../../app/slice/fetchApi";
import { HeroPage, ProductsList } from "../../components";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.api.productsList);
  const heroBlog = useSelector((state) => state.api.heroBlog);

  useEffect(() => {
    if (!productsList) {
      fetchProduct()
        .then((products) => {
          const special = [];

          const cauthang = [];
          const capsanhdon = [];
          const lavobobanquay = [];
          const trucot = [];
          const banbep = [];
          const mattien = [];
          const banghieuvachdung = [];
          const nenbangheda = [];

          products.map((product, index) => {
            if (product.projectType === CAUTHANG) cauthang.push(product);
            else if (product.projectType === CAPSANHDON)
              capsanhdon.push(product);
            else if (product.projectType === LAVOBOBANQUAY)
              lavobobanquay.push(product);
            else if (product.projectType === TRUCOT) trucot.push(product);
            else if (product.projectType === BANBEP) banbep.push(product);
            else if (product.projectType === MATTIEN) mattien.push(product);
            else if (product.projectType === BANGHIEUVACHDUNG)
              banghieuvachdung.push(product);
            else if (product.projectType === NENBANGHEDA)
              nenbangheda.push(product);

            product.special && special.push(product);

            return null;
          });
          let action;
          const object = {
            special: special,
            cauthang: cauthang,
            capsanhdon: capsanhdon,
            lavobobanquay: lavobobanquay,
            trucot: trucot,
            banbep: banbep,
            mattien: mattien,
            banghieuvachdung: banghieuvachdung,
            nenbangheda: nenbangheda,
          };
          action = setProductsList(object);
          dispatch(action);
          action = setProductSpecial(special);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, productsList]);

  useEffect(() => {
    if (!heroBlog) {
      fetchHeroBlog()
        .then((data) => {
          const action = setHeroBlog(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, heroBlog]);

  return (
    <>
      <HeroPage slides={heroBlog} idScrollTo="productList" />
      <ProductsList products={productsList} />
    </>
  );
};

export default Products;
