import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, fetchSingleProduct } from "../../api";
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
import { setProductsList, setProductSpecial } from "../../app/slice/fetchApi";
import { SingleProduct } from "../../components";

const SingleProductContainer = () => {
  const [singleProduct, setSingleProduct] = useState(null);

  const special = useSelector((state) => state.api.products.special);

  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!special) {
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
  }, [dispatch, special]);

  useEffect(() => {
    fetchSingleProduct(slug)
      .then((data) => {
        setSingleProduct(data[0]);
      })
      .catch((error) => console.log("error: ", error));
  }, [slug]);

  return (
    <>
      <SingleProduct product={singleProduct} special={special} />
    </>
  );
};

export default SingleProductContainer;
