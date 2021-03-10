import React, { useEffect } from "react";
import { InfoMaps } from "../../components";
const Stores = () => {
  useEffect(() => {
    document.title = "CỬA HÀNG - KINGSTONE ĐÀ NẴNG";
  }, []);

  return (
    <>
      <InfoMaps />
    </>
  );
};

export default Stores;
