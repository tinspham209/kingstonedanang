import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { useStyles } from "./Navbar.elements";

import logoImg from "../../assets/img/logoMain.webp";
import { AppBar, Container } from "@material-ui/core";
import ZaloIcon from "../../assets/img/icon-zalo.png";
import baogiaIcon from "../../assets/img/baogia.webp";
import { setModalBaoGia } from "../../app/slice/fetchApi";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleModalBaoGia = () => {
    const action = setModalBaoGia(true);
    dispatch(action);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={classes.nav}>
          <AppBar position="fixed" style={{ background: "#83622A" }}>
            <Container maxWidth="lg">
              <div className={classes.appBar}>
                <NavLink to="/" className={classes.nav__logo}>
                  <img
                    src={logoImg}
                    alt="logoImg"
                    className={classes.nav__logoImg}
                    onClick={closeMobileMenu}
                  />
                </NavLink>
                <div className={classes.nav__mobileIcon} onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul
                  className={classes.nav__menu}
                  onClick={handleClick}
                  style={{ left: `${click ? 0 : "-100%"}` }}
                >
                  <li className={classes.nav__item}>
                    <NavLink to="/" className={classes.nav__link}>
                      Trang Chủ
                    </NavLink>
                  </li>
                  <li className={classes.nav__item}>
                    <NavLink
                      to="/products"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                      Sản phẩm
                    </NavLink>
                  </li>
                  <li className={classes.nav__item}>
                    <NavLink
                      to="/stone"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                      Danh mục đá
                    </NavLink>
                  </li>
                  <li className={classes.nav__item}>
                    <NavLink
                      to="/blog"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                      Tin tức
                    </NavLink>
                  </li>

                  <li className={classes.nav__item}>
                    <NavLink
                      to="/stores"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                      Liên hệ
                    </NavLink>
                  </li>
                  <li className={classes.nav__item}>
                    <NavLink
                      to="/about"
                      className={classes.nav__link}
                      activeClassName={classes.activeClass}
                    >
                      Về chúng tôi
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Container>
          </AppBar>
          <div className={classes.contact}>
            <div className={classes.contactItem}>
              <div
                href="/"
                target="__blank"
                aria-label="phone"
                className={classes.iconLink}
                onClick={handleModalBaoGia}
              >
                <img
                  src={baogiaIcon}
                  alt="baogia"
                  className={`${classes.icon} ${classes.iconBaogia}`}
                />
              </div>
              <div className="tooltip">
                <span className="tooltiptext">
                  Số điện thoại: 0919.77.28.28{" "}
                </span>
              </div>
            </div>
            <div className={classes.contactItem}>
              <a
                href="tel:0919772828"
                target="__blank"
                aria-label="phone"
                className={classes.iconLink}
              >
                <FiPhone className={classes.icon1} />
              </a>
              <div className="tooltip tooltip1">
                <span className="tooltiptext">
                  Số điện thoại: 0919.77.28.28{" "}
                </span>
              </div>
            </div>
            <div className={classes.contactItem}>
              <a
                href="https://zalo.me/84919772828"
                target="__blank"
                aria-label="zalo"
                className={classes.iconLink}
              >
                <img src={ZaloIcon} alt="zalo" className={classes.icon} />
              </a>
              <div className="tooltip tooltip2">
                <span className="tooltiptext">Zalo: 0919.77.28.28 </span>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
