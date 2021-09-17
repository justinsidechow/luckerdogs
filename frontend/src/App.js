import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./App.css";
import home_grids from "./components/home_grids";

function App() {
  const useStyles = makeStyles((theme) => ({
    cardMedia: {},
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

  // Returns all the odds game within a Grid-Card display.
  // home_grids[0] = title
  // home_grids[1] = description
  // home_grids[2] = video-URL

  return (
    <div className="App">
      <React.Fragment>
        <h1 className="title">How lucky are you?</h1>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {home_grids.map((home_grids) => {
              return (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={home_grids} xs={12} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      component="video"
                      className={classes.cardMedia}
                      image={process.env.PUBLIC_URL + home_grids[2]}
                      title="Coin Spining"
                      autoPlay
                      loop
                    />
                    {console.log(home_grids[2])}
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        className={classes.postTitle}
                      >
                        {home_grids[0].substr(0, 50)}
                      </Typography>
                      <div className={classes.postText}>
                        <Typography
                          component="p"
                          color="textPrimary"
                        ></Typography>
                        <Typography variant="p" color="textSecondary">
                          {home_grids[1].substr(0, 60)}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}
export default App;

//{console.log(appState.cointoss)}

/*
class connectionExample extends React.Component {
  componentDidMount() {
    const apiURL = "http://127.0.0.1:8000/api/cointoss";
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div>Example Connection</div>;
  }
}

export default connectionExample;
*/
