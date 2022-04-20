import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function CoinToss(props) {
  const useStyles = makeStyles((theme) => ({
    container: {},
    backgroundColor: {
      backgroundColor: "#36454F",
    },
    title: {
      textAlign: "center",
      color: "white",
      padding: "1em",
      margin: "0",
    },
    grid: {
      justifyContent: "center",
      paddingBottom: "1em",
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[700],
    },
    postTitle: {
      fontSize: "1.5em",
      textAlign: "left",
    },
    postText: {
      display: "flex",
      justifyContent: "left",
      alignItems: "baseline",
      fontSize: "1em",
      textAlign: "left",
      marginBottom: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.backgroundColor}>
      <h1 className={classes.title}>Coin Toss</h1>
      <Container
        maxWidth="md"
        component="main"
        className={classes.container}
      ></Container>
    </div>
  );
}
export default CoinToss;
