import React, { useEffect } from "react";
import BlogContainer from "../../containers/Blog/Blog";
const Blog = () => {
  useEffect(() => {
    document.title = "TIN TỨC - KINGSTONE ĐÀ NẴNG";
  }, []);

  return (
    <div>
      <BlogContainer />
    </div>
  );
};

export default Blog;
