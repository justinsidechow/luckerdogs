import React, { useEffect } from "react";
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
import { login } from "../login/LoginActions";
import { GameList } from "../utils/GameList";
import { PagePush } from "../utils/PagePush";

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
  const homeGrids = GameList;

  useEffect(() => {}, []);

  return (
    <div className={classes.backgroundColor}>
      <h1 className={classes.title}>How lucky are you?</h1>
      <Container maxWidth="md" component="main" className={classes.container}>
        <Grid container spacing={5} alignItems="flex" className={classes.grid}>
          {homeGrids.map((homeGrids) => {
            return (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={homeGrids} xs={10} md={4}>
                <div className="card-animation">
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="video"
                        src={process.env.PUBLIC_URL + homeGrids[2]}
                        title="video"
                        autoPlay
                        loop
                        muted
                        onClick={() => props.PagePush(homeGrids[3])}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h2"
                          className={classes.postTitle}
                        >
                          {homeGrids[0].substr(0, 50)}
                        </Typography>
                        <div className={classes.postText}>
                          <Typography
                            component="p"
                            color="textPrimary"
                          ></Typography>
                          <Typography variant="p" color="textSecondary">
                            {homeGrids[1].substr(0, 60)}
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
  PagePush,
})(HomePage);
