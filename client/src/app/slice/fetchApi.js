import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";

const fetchApi = createSlice({
  name: API,
  initialState: {
    about: null,
    products: {
      special: null,
      cauthang: null,
      capsanhdon: null,
      lavobobanquay: null,
      trucot: null,
      banbep: null,
      mattien: null,
      banghieuvachdung: null,
      nenbangheda: null,
    },
    stone: {
      special: null,
      granite: null,
      marble: null,
    },
    productsList: null,
    stoneList: null,
    posts: null,
    hero: null,
    heroBlog: null,
  },
  reducers: {
    setAboutData: (state, action) => {
      state.about = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setHero: (state, action) => {
      state.hero = action.payload;
    },
    setProductSpecial: (state, action) => {
      state.products.special = action.payload;
    },
    setProductcauthang: (state, action) => {
      state.products.cauthang = action.payload;
    },
    setProductcapsanhdon: (state, action) => {
      state.products.capsanhdon = action.payload;
    },
    setProductlavobobanquay: (state, action) => {
      state.products.lavobobanquay = action.payload;
    },
    setProducttrucot: (state, action) => {
      state.products.trucot = action.payload;
    },
    setProductbanbep: (state, action) => {
      state.products.banbep = action.payload;
    },
    setProductmattien: (state, action) => {
      state.products.mattien = action.payload;
    },
    setProductbanghieuvachdung: (state, action) => {
      state.products.banghieuvachdung = action.payload;
    },
    setProductnenbangheda: (state, action) => {
      state.products.nenbangheda = action.payload;
    },
    setStoneSpecial: (state, action) => {
      state.stone.special = action.payload;
    },
    setStoneGranite: (state, action) => {
      state.stone.granite = action.payload;
    },
    setStoneMarble: (state, action) => {
      state.stone.marble = action.payload;
    },
    setProductsList: (state, action) => {
      state.productsList = action.payload;
    },
    setStoneList: (state, action) => {
      state.stoneList = action.payload;
    },
    setHeroBlog: (state, action) => {
      state.heroBlog = action.payload;
    },
  },
});

const { reducer, actions } = fetchApi;

export const {
  setAboutData,
  setPosts,
  setHero,
  setProductSpecial,
  setProductcauthang,
  setProductcapsanhdon,
  setProductlavobobanquay,
  setProducttrucot,
  setProductbanbep,
  setProductmattien,
  setProductbanghieuvachdung,
  setProductnenbangheda,
  setProductsList,
  setHeroBlog,
  setStoneSpecial,
  setStoneGranite,
  setStoneMarble,
  setStoneList,
} = actions;

export default reducer;
