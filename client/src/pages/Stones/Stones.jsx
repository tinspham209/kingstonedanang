import React, { useEffect } from "react";
import StonesContainer from "../../containers/Stones/Stones";
const Stones = () => {
  useEffect(() => {
    document.title = "DANH MỤC ĐÁ - KINGSTONE ĐÀ NẴNG";
  }, []);

  return (
    <>
      <StonesContainer />
    </>
  );
};

export default Stones;
