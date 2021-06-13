import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  modal: {
    width: "60vw",
    height: "75vh",
    backgroundColor: "#FFF",
    borderRadius: "20px",
    position: "absolute",
    top: "12%",
    left: "25%",
    padding: "50px",
    outline: "none",
    color: "#000",
    display: "flex",
    fontSize: "12px",
    flexDirection: "column",
    overflowY: "auto",

    "& h3": {
      width: "100%",
      textAlign: "center",
      color: "rgba(246,194,73, 1)",
      fontWeight: 600,

      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
      },
    },

    [theme.breakpoints.down("md")]: {
      width: "90vw",
      height: "80vh",
      top: "5%",
      left: "5%",
    },
  },
  label: {
    maxWidth: "100%",
    fontSize: "18px",
    lineHeight: "24px",
    margin: "10px 0",
  },
  error: {
    color: "red",
  },
  textarea: {
    fontSize: "18px",
  },

  button: {
    marginTop: "20px",
    borderRadius: "20px",
    fontSize: "20px",
    background: "rgba(246,194,73, 1)",
    color: "black",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      background: "rgba(246,194,73, 0.9)",
      color: "white",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  closeButton: {
    position: "absolute",
    fontSize: "30px",
    top: "14px",
    right: "14px",
    cursor: "pointer",

    "& svg": {
      backgroundColor: "#F2F2F2",
      borderRadius: "50%",
    },
  },
}));
