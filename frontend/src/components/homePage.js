import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./homePage.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "./login/LoginActions";

function HomePage(props) {
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

  useEffect(() => {}, []);

  const home_grids = [
    ["Coin Toss", "Feeling lucky punk?", "/spinning_coin.mp4", "/coin-toss"],
    ["Lottery", "This is how you lose money!", "/lottery.mp4", "/lottery"],
  ];

  // Returns all the odds-game within a Grid-Card display.
  // home_grids[0] = title
  // home_grids[1] = description
  // home_grids[2] = video-URL
  // home_grids[3] = URL-link-to-odds-game

  // https://coverr.co/videos/head-or-tails-0FW9yIS3na

  // https://www.pexels.com/video/a-close-up-shot-of-a-pile-of-money-5466776/
  // Video by olia danilevich from Pexels

  return (
    <React.Fragment>
      <div className={classes.backgroundColor}>
        <h1 className={classes.title}>How lucky are you?</h1>
        <Container maxWidth="md" component="main" className={classes.container}>
          <Grid
            container
            spacing={5}
            alignItems="flex"
            className={classes.grid}
          >
            {home_grids.map((home_grids) => {
              return (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={home_grids} xs={10} md={4}>
                  <div className="card-animation">
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="video"
                          image={process.env.PUBLIC_URL + home_grids[2]}
                          title="Coin Spining"
                          autoPlay
                          loop
                        />
                        <CardContent>
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
                      </CardActionArea>
                    </Card>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  login,
})(HomePage);
