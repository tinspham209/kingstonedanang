import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  nav: {
    background: "#83622A",
    height: "80px",
  },

  appBar: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
  },

  nav__logo: {
    height: "80px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "20px",

    display: "flex",
    justifySelf: "flex-start",
    alignItems: "center",

    border: "none",
    outline: "none",

    cursor: "pointer",
  },

  nav__logoImg: {
    height: "100%",
    border: "none",
    outline: "none",

    padding: "10px",

    display: "block",
    verticalAlign: "middle",
  },

  nav__mobileIcon: {
    display: "none",

    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      display: "block",

      position: "absolute",
      top: 0,
      right: 0,

      transform: "translate(-100%, 60%)",

      cursor: "pointer",
    },
  },

  nav__menu: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    zIndex: 999,

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "calc(100vh - 80px)",
      background: "#83622A",
      display: "flex",
      flexDirection: "column",

      position: "absolute",
      top: "80px",

      opacity: 1,

      transition: "all 0.5s ease",
    },
  },

  nav__item: {
    height: "80px",
    borderBottom: "5px solid transparent",

    "&:hover": {
      borderBottom: "5px solid #f5f5f5",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      "&:hover": {
        border: "none",
      },
    },
  },

  nav__link: {
    height: "100%",
    textDecoration: "none",
    textTransform: "uppercase",

    color: "#fff",
    padding: "5px 10px",

    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "20px",
      textAlign: "center",
      display: "table",

      "&:hover": {
        color: "#f5f5f5",
        transition: "all 0.3s ease",
      },
    },
  },

  activeClass: {
    borderBottom: "5px solid #f5f5f5",
    [theme.breakpoints.down("md")]: {
      borderBottom: "none",
      fontSize: "25px",
    },
  },

  contact: {
    position: "fixed",
    left: "20px",

    bottom: "50px",
    zIndex: "999",

    [theme.breakpoints.down("md")]: {
      bottom: "50px",
    },
  },

  contactItem: {
    "& .tooltip .tooltiptext": {
      visibility: "hidden",
      width: "130px",
      backgroundColor: "#00aff2",
      color: "#fff",
      textAlign: "center",
      padding: "5px 0",
      borderRadius: "10px",

      position: "absolute",
      zIndex: "999",
      left: "70px",
      top: "25px",
    },

    "& .tooltip1 .tooltiptext": {
      top: "100px",
    },

    "& .tooltip2 .tooltiptext": {
      top: "190px",
    },

    "&:hover .tooltip .tooltiptext": {
      visibility: "visible",
    },
  },

  iconLink: {
    width: "60px",
    height: "60px",
    fontSize: "40px",
    backgroundColor: "#00aff2",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: "20px",
    cursor: "pointer",
  },
  icon: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
  },
  iconBaogia: {
    width: "60px",
    height: "60px",
  },
}));
