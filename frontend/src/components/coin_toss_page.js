import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({}));

const CoinToss = (props) => {
  let { cointoss } = props;
  console.log(cointoss);
  const classes = useStyles();
  if (!cointoss || cointoss.length === 0) {
    return <p>Can not find any posts, sorry</p>;
  }
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <h1>Coin Toss</h1>
        {cointoss.map((cointoss) => {
          return (
            <div>
              <h1>{cointoss.user_name}</h1>
              <h1>{cointoss.heads_lucky}</h1>
              <h1>{cointoss.heads_unlucky}</h1>
              <h1>{cointoss.tails_lucky}</h1>
              <h1>{cointoss.tails_unlucky}</h1>
            </div>
          );
        })}
      </Container>
    </React.Fragment>
  );
};
export default CoinToss;
