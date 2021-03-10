import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#83622A",
    color: "#fff",
    fontSize: "19px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "2px solid rgba(246,194,73, 1)",
    paddingTop: "20px",
    paddingBottom: "20px",

    [theme.breakpoints.down("md")]: {
      paddingTop: "30px",
      paddingBottom: "30px",
    },
  },
  footer__wrap: {
    margin: "5px auto",

    display: "flex",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  footer__logo: {
    height: "80px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "20px",

    display: "flex",
    justifySelf: "flex-start",
    alignItems: "center",

    cursor: "pointer",
  },

  footer__logoImg: {
    height: "60px",
    border: 0,

    padding: "10px",

    display: "inline-block",
    verticalAlign: "middle",
    objectFit: "contain",
  },

  footer__center: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "50%",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
    },
  },

  footer__centerText: {
    "&:nth-child(2)": {
      fontSize: "20px",
      fontWeight: "bold",
    },
  },

  footer__centerTins: {
    color: "#fff",

    "&:hover": {
      color: "#0467fb",
    },
  },

  footer__right: {
    display: "flex",
    width: "50%",

    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "20px",
    },
  },

  footer__rightLink: {
    cursor: "pointer",
    color: "#fff",
    fontSize: "32px",
    "&:nth-child(2)": {
      marginLeft: "15px",
    },
    "&:hover": {
      color: "rgba(246,194,73, 1)",
    },
  },
}));
