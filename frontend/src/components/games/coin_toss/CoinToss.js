import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@mui/material/Button";
import { getCoinToss, updateCoinToss } from "./CoinTossAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function CoinToss(props) {
  const useStyles = makeStyles((theme) => ({
    container: { paddingBottom: "2em" },
    backgroundColor: {
      backgroundColor: "#36454F",
    },
    title: {
      textAlign: "center",
      color: "white",
      paddingTop: "1em",
      paddingBottom: "1em",
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
    buttonTitle: { textAlign: "center", color: "white" },
    buttonGroup: {
      justifyContent: "center !important",
      textAlign: "center",
    },
    buttons: {
      backgroundColor: "#85bb65 !important",
      padding: "1em",
      margin: "1em !important",
      textAlign: "center",
    },
    text: {
      textAlign: "center",
      color: "white",
    },
    green: {
      color: "#00FF00",
    },
    red: {
      color: "#FF0000",
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    props.getCoinToss();
  }, []);

  // display heads results with color scheme
  const headsResults = (result) => {
    if (props.coinToss["coinToss"][0] && result === "true") {
      const trueHeads = props.coinToss["coinToss"][0]["trueHeads"];
      return (
        <h3 className={classes.text}>
          {trueHeads} <span className={classes.green}>correct</span>
        </h3>
      );
    } else if (props.coinToss["coinToss"][0] && result === "false") {
      const falseHeads = props.coinToss["coinToss"][0]["falseHeads"];
      return (
        <h3 className={classes.text}>
          {falseHeads} <span className={classes.red}>wrong</span>
        </h3>
      );
    } else {
      return <h3 className={classes.text}>No values</h3>;
    }
  };

  // display tails results with color scheme
  const tailsResults = (result) => {
    if (props.coinToss["coinToss"][0] && result === "true") {
      const trueTails = props.coinToss["coinToss"][0]["trueTails"];
      return (
        <h3 className={classes.text}>
          {trueTails} <span className={classes.green}>correct</span>
        </h3>
      );
    } else if (props.coinToss["coinToss"][0] && result === "false") {
      const falseTails = props.coinToss["coinToss"][0]["falseTails"];
      return (
        <h3 className={classes.text}>
          {falseTails} <span className={classes.red}>wrong</span>
        </h3>
      );
    } else {
      return <h3 className={classes.text}>No values</h3>;
    }
  };

  // calculate how luck our current user is with their coin toss coints
  const correctFactor = (coinSide) => {
    if (props.coinToss["coinToss"][0] && coinSide === "heads") {
      let headsFactor =
        props.coinToss["coinToss"][0]["trueHeads"] /
        (props.coinToss["coinToss"][0]["falseHeads"] +
          props.coinToss["coinToss"][0]["trueHeads"]);
      headsFactor = headsFactor.toFixed(5);
      return (
        <h3 className={classes.text}>
          {headsFactor}% <span className={classes.green}>correct</span>
        </h3>
      );
    } else if (props.coinToss["coinToss"][0] && coinSide === "tails") {
      let tailsFactor =
        props.coinToss["coinToss"][0]["trueTails"] /
        (props.coinToss["coinToss"][0]["falseTails"] +
          props.coinToss["coinToss"][0]["trueTails"]);
      tailsFactor = tailsFactor.toFixed(5);
      return (
        <h3 className={classes.text}>
          {tailsFactor}% <span className={classes.green}>correct</span>
        </h3>
      );
    }
  };

  return (
    <div className={classes.backgroundColor}>
      <h1 className={classes.title}>Coin Toss</h1>
      <Container maxWidth="md" component="main" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            {" "}
          </Grid>
          <Grid item xs={6}>
            <h2 className={classes.buttonTitle}>
              Which side will the coin land on?
            </h2>
            <div className={classes.buttonGroup}>
              <Button className={classes.buttons} variant="contained">
                Heads
              </Button>
              <Button className={classes.buttons} variant="contained">
                Tails
              </Button>
            </div>
          </Grid>
        </Grid>
        <h2 className={classes.text}>Results</h2>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <h2 className={classes.text}>Heads</h2>
            {headsResults("true")}
            {headsResults("false")}
            {correctFactor("heads")}
          </Grid>
          <Grid item xs={6}>
            <h2 className={classes.text}>Tails</h2>
            {tailsResults("true")}
            {tailsResults("false")}
            {correctFactor("tails")}
            <div className={classes.buttonGroup}></div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

CoinToss.propTypes = {
  getCoinToss: PropTypes.func.isRequired,
  coinToss: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  coinToss: state.coinToss,
});

export default connect(mapStateToProps, { getCoinToss, updateCoinToss })(
  CoinToss
);
