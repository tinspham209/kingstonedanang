import React, { useEffect } from "react";
import {
  FullPage,
  HighlightPosts,
  InfoMaps,
  InfoSection,
  Products,
} from "../../components";
import {
  setAboutData,
  setHero,
  setPosts,
  setStoneList,
  setStoneSpecial,
  setProductSpecial,
  setProductsList,
} from "../../app/slice/fetchApi";
import { useDispatch } from "react-redux";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
  fetchAboutData,
  fetchBlogData,
  fetchHeroData,
  fetchProduct,
  fetchStone,
} from "../../api";
import {
  BANBEP,
  BANGHIEUVACHDUNG,
  CAPSANHDON,
  CAUTHANG,
  GRANITE,
  LAVOBOBANQUAY,
  MARBLE,
  MATTIEN,
  NENBANGHEDA,
  TRUCOT,
} from "../../app/ItemTypes";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";

const Home = () => {
  const dispatch = useDispatch();

  const productSpecial = useSelector((state) => state.api.products.special);
  const stoneSpecial = useSelector((state) => state.api.stone.special);
  const posts = useSelector((state) => state.api.posts);
  const hero = useSelector((state) => state.api.hero);
  const about = useSelector((state) => state.api.about);

  useEffect(() => {
    document.title = "KingStone Đà Nẵng - Đá Granite, Marble tại Đà Nẵng";
  }, []);

  useEffect(() => {
    if (!hero) {
      fetchHeroData()
        .then((data) => {
          const action = setHero(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, hero]);

  useEffect(() => {
    if (!about) {
      fetchAboutData()
        .then((data) => {
          const action = setAboutData(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, about]);

  useEffect(() => {
    if (!posts) {
      fetchBlogData()
        .then((posts) => {
          let postSort = [];
          postSort = posts.slice().sort((value1, value2) => {
            const dateValue1 = new Date(value1.publishedAt).getTime();
            const dateValue2 = new Date(value2.publishedAt).getTime();
            return dateValue1 < dateValue2 ? 1 : -1;
          });
          const action = setPosts(postSort);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, posts]);

  useEffect(() => {
    if (!productSpecial) {
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
  }, [dispatch, productSpecial]);

  useEffect(() => {
    if (!stoneSpecial) {
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
  }, [dispatch, stoneSpecial]);

  return (
    <>
      <Modal />
      <FullPage />
      <LazyLoadComponent>
        <InfoSection />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Products
          products={productSpecial}
          title="Sản Phẩm"
          redirect="products"
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Products
          products={stoneSpecial}
          title="Danh mục Đá"
          redirect="stone"
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <HighlightPosts />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <InfoMaps />
      </LazyLoadComponent>
    </>
  );
};

export default Home;
