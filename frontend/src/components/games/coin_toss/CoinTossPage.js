import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function CoinToss(props) {
  const useStyles = makeStyles((theme) => ({}));
  return (
    <Container maxWidth="md" component="main">
      <h1>Coin Toss</h1>
    </Container>
  );
}
export default CoinToss;
