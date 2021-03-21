import { Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Footer.elements";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.footer__wrap}>
          <div className={classes.footer__center}>
            <div className={classes.footer__centerText}>
              CÔNG TY TNHH TRANG TRÍ NỘI - NGOẠI THẤT
            </div>
            <div className={classes.footer__centerText}>
              KINGSTONE Co., LTD - KINGSTONE ĐÀ NẴNG
            </div>
            <div className={classes.footer__centerText}>
              VPGD:{" "}
              <a
                href="https://goo.gl/maps/k8Qhnfp2yLKEczNK7"
                target="__blank"
                aria-label="Facebook"
                className={classes.footer__centerTins}
              >
                37 Phan Thúc Duyện, Q.Ngũ Hành Sơn, TP Đà Nẵng
              </a>
            </div>
            <div className={classes.footer__centerText}>
              Xưởng gia công: Lô 3 Nguyễn Đức Thuận, Q.Ngũ Hành Sơn, TP Đà Nẵng
            </div>
          </div>
          <div className={classes.footer__right}>
            <div className={classes.footer__centerText}>LIÊN HỆ</div>
            <div className={classes.footer__centerText}>
              Hotline:{" "}
              <a
                href="tel:0919772828"
                target="__blank"
                aria-label="Facebook"
                className={classes.footer__centerTins}
              >
                0919 77 28 28
              </a>
            </div>
            <div className={classes.footer__centerText}>
              Zalo:{" "}
              <a
                href="https://zalo.me/84919772828"
                target="__blank"
                aria-label="Facebook"
                className={classes.footer__centerTins}
              >
                0919 77 28 28, KingStone Đà Nẵng
              </a>
            </div>
            <div className={classes.footer__centerText}>
              Email:
              <a
                href="mailto:kingstonedanang@gmail.com"
                target="__blank"
                aria-label="Facebook"
                className={classes.footer__centerTins}
              >
                kingstonedanang@gmail.com
              </a>{" "}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
