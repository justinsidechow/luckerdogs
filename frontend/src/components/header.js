import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import jwt, { token, isExpired } from "jsonwebtoken";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("refresh_token") ? true : false
  );

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("refresh_token") ? true : false);
  });

  console.log(isLoggedIn);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              component={NavLink}
              to="/"
              underline="none"
              color="textPrimary"
            >
              Luckerdogs
            </Link>
          </Typography>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/register"
          >
            Register
          </Button>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/login"
          >
            Login
          </Button>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/logout"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

// function Header() {
//   const classes = useStyles();

//   function AuthButtons() {
//     //const access_token = localStorage.getItem("access_token");
//     const refresh_token = localStorage.getItem("refresh_token");

//     //console.log(access_token);
//     console.log(refresh_token);

//     if (refresh_token != null) {
//       return (
//         <Button
//           href="#"
//           color="primary"
//           variant="outlined"
//           className={classes.link}
//           component={NavLink}
//           to="/logout"
//         >
//           Logout
//         </Button>
//       );
//     } else {
//       return (
//         <div>
//           <Button
//             href="#"
//             color="primary"
//             variant="outlined"
//             className={classes.link}
//             component={NavLink}
//             to="/register"
//           >
//             Register
//           </Button>
//           <Button
//             href="#"
//             color="primary"
//             variant="outlined"
//             className={classes.link}
//             component={NavLink}
//             to="/login"
//           >
//             Login
//           </Button>
//         </div>
//       );
//     }
//   }

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar
//         position="static"
//         color="default"
//         elevation={0}
//         className={classes.appBar}
//       >
//         <Toolbar className={classes.toolbar}>
//           <Typography
//             variant="h6"
//             color="inherit"
//             noWrap
//             className={classes.toolbarTitle}
//           >
//             <Link
//               component={NavLink}
//               to="/"
//               underline="none"
//               color="textPrimary"
//             >
//               Luckerdogs
//             </Link>
//           </Typography>
//           {AuthButtons()}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// }

export default Header;
