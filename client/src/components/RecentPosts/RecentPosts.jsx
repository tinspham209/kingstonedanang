import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./RecentPosts.elements";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const RecentPosts = ({ posts }) => {
  const classes = useStyles();

  return (
    <div className={classes.recentPosts}>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.headerText}>
          TIN TỨC GẦN ĐÂY
        </Typography>
      </div>
      {posts.map((post, index) => (
        <div key={index}>
          <Link to={"/blog/" + post.slug.current} className={classes.post}>
            <div className={classes.postImg}>
              <LazyLoadImage
                src={post.mainImage.asset.url}
                alt={post.mainImage.asset._id}
                className={classes.img}
                effect="blur"
              />
            </div>
            <div className={classes.content}>
              <p className={classes.title}>{post.title}</p>
              <div className={classes.date}>
                {new Date(post.publishedAt)
                  .toLocaleDateString("en-GB")
                  .split("/")
                  .join("/")}
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className={classes.footer}>
        <Typography variant="h4" className={classes.headerText}>
          LIÊN HỆ
        </Typography>
      </div>
      <div className={classes.social}>
        <a
          className={`${classes.socialLink}`}
          href="tel:0919772828"
          target="__blank"
          aria-label="Facebook"
        >
          Hotline: 0919 77 28 28 <br />
        </a>
        <a
          className={`${classes.socialLink}`}
          href="https://zalo.me/84919772828"
          target="__blank"
          aria-label="Instagram"
        >
          Zalo: 0919 77 28 28
        </a>
      </div>
    </div>
  );
};

export default RecentPosts;
