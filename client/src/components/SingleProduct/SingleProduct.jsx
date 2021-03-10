import {
  CircularProgress,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./SingleProduct.elements";
import { FaAngellist } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlockContent from "@sanity/block-content-to-react";

const SingleProduct = ({ product, special }) => {
  const classes = useStyles();
  useEffect(() => {
    if (product) {
      document.title = `${product.title} - KINGSTONE Đà Nẵng`;
      const elDescription = document.querySelector("meta[name='description']");
      elDescription.setAttribute("content", product.title);
      const elOgTitle = document.querySelector("meta[property='og:title']");
      elOgTitle.setAttribute("content", product.title);
      const elOgImage = document.querySelector("meta[property='og:image']");
      elOgImage.setAttribute("content", product.mainImage.asset.url);
    }
  }, [product]);
  return (
    <div className={classes.singleProduct}>
      {!product ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.productComponent}>
          <Container maxWidth="lg">
            <div className={classes.product}>
              <div className={classes.breadcrumbs}>
                <Link to="/products">MENU </Link>
                <Link to="/products"> | {product.projectType} </Link>
                <p> | {product.title}</p>
              </div>
              <div className={classes.body}>
                <div className={classes.productImg}>
                  <img
                    src={product.mainImage.asset.url}
                    alt={product.mainImage.asset._id}
                    className={classes.img}
                  />
                </div>
                <div className={classes.content}>
                  <div className={classes.header}>
                    <Typography variant="h4" className={classes.headerText}>
                      {product.title}
                    </Typography>
                    {/* <p className={classes.price}>{product.price}.000 Đ</p> */}
                    <Link to="/stores/">
                      <Button
                        variant="contained"
                        className={`${classes.button}`}
                      >
                        LIÊN HỆ NGAY
                      </Button>
                    </Link>
                    <p className={classes.phone}> Liên hệ để nhận báo giá: </p>
                    <p className={classes.phone}>
                      {" "}
                      Hotline: <a href="tel:+84919772828">0919.77.28.28</a>
                    </p>
                    <p className={classes.phone}>
                      {" "}
                      Zalo:{" "}
                      <a href="https://zalo.me/84919772828">0919.77.28.28</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.blockContent}>
                <BlockContent
                  blocks={product.body}
                  projectId="1nauekv7"
                  dataset="production"
                />
              </div>
              <div className={classes.headerRecentPosts}>
                <Typography
                  variant="h5"
                  className={classes.headerRecentPostsText}
                >
                  CÓ THỂ BẠN THÍCH
                </Typography>
              </div>
              <div className={classes.listProduct}>
                {!special ? (
                  <div className={classes.spinner}>
                    <CircularProgress />
                  </div>
                ) : (
                  special.map((product, index) => (
                    <div className={classes.specialProduct} key={index}>
                      <div className={classes.productImage}>
                        <Link to={"/products/" + product.slug.current}>
                          <LazyLoadImage
                            src={product.mainImage.asset.url}
                            alt={product.mainImage.asset.alt}
                            className={`${classes.img} ${classes.imgSpecial}`}
                            effect="blur"
                          />
                          {product.new && (
                            <span className={classes.newLabel}>
                              new <FaAngellist />
                            </span>
                          )}
                          {product.bestSeller && (
                            <span className={classes.trendLabel}>
                              <AiOutlineLike /> Bán chạy nhất
                            </span>
                          )}
                        </Link>
                      </div>
                      <div className={classes.contentProduct}>
                        <p className={classes.title}>{product.title}</p>
                        {/* <p className={classes.price}>{product.price}.000Đ</p> */}
                        <Link to={"/products/" + product.slug.current}>
                          <Button
                            variant="contained"
                            className={`${classes.button} ${classes.buttonProduct}`}
                          >
                            TÌM HIỂU THÊM
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
