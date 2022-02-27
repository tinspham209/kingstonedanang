import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoMaps.elements";
import { SiGooglemaps } from "react-icons/si";
import Maps from "./Maps/Maps";

const InfoMaps = () => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <Container maxWidth="lg">
        <div className={classes.infoRow}>
          <div className={classes.infoColumn}>
            <div className={classes.textWrapper}>
              <Typography variant="h4" className={classes.text}>
                KINGSTONE ĐÀ NẴNG
              </Typography>
              <div>
                <Typography variant="h6" className={classes.subTitle}>
                  Hotline: 0919 77 28 28
                </Typography>
                <Typography variant="h6" className={classes.subTitle}>
                  Zalo: 0919 77 28 28
                </Typography>
                <Typography variant="h6" className={classes.subTitle}>
                  Email: kingstonedanang@gmail.com
                </Typography>
                <Typography variant="h6" className={classes.subTitle}>
                  VPGD: 37 Phan Thúc Duyện, Q.Ngũ Hành Sơn, TP Đà Nẵng
                </Typography>
                <Typography variant="h6" className={classes.subTitle}>
                  Xưởng gia công: 364 Nguyễn Phước Lan, Hoà Xuân, Q.Cẩm Lệ, TP Đà Nẵng
                </Typography>
              </div>
              <a
                href="https://goo.gl/maps/k8Qhnfp2yLKEczNK7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" className={classes.button}>
                  <SiGooglemaps /> Chỉ dẫn đường
                </Button>
              </a>
            </div>
          </div>
          <div className={classes.infoColumn}>
            <div className={classes.imgWrapper}>
              <Maps />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoMaps;
