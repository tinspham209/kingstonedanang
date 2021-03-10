import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroBlog, fetchStone } from "../../api";
import { GRANITE, MARBLE } from "../../app/ItemTypes";
import {
  setHeroBlog,
  setStoneList,
  setStoneSpecial,
} from "../../app/slice/fetchApi";
import { HeroPage, StonesList } from "../../components";

const Stones = () => {
  const dispatch = useDispatch();
  const stoneList = useSelector((state) => state.api.stoneList);
  const heroBlog = useSelector((state) => state.api.heroBlog);

  useEffect(() => {
    if (!stoneList) {
      fetchStone()
        .then((products) => {
          const special = [];
          const granite = [];
          const marble = [];

          products.map((product, index) => {
            if (product.projectType === GRANITE) granite.push(product);
            else if (product.projectType === MARBLE) marble.push(product);
            product.special && special.push(product);

            return null;
          });
          let action;
          const object = {
            special: special,
            granite: granite,
            marble: marble,
          };
          action = setStoneList(object);
          dispatch(action);
          action = setStoneSpecial(special);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, stoneList]);

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
      <StonesList products={stoneList} />
    </>
  );
};

export default Stones;
