import "./App.css";

import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";

import backgroundImage from "../../assets/background.png";
import Main from "../main/Main";
import Header from "../header/Header";

interface AppProps {}

const App: FunctionComponent<AppProps> = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.contentContainer}>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;

const useStyles = createUseStyles({
  app: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  contentContainer: {
    width: "65%",
    height: "100vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
});
