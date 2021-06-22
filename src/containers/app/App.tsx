import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";

import Main from "../sections/main/Main";
import Header from "../sections/header/Header";

const App: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.contentContainer}>
        <Header headerText="Peter's Weather App" />
        <Main />
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  app: {
    width: "100vw",
    height: "100vh",
    overflowY: "auto",
    background:
      "linear-gradient(55.03deg, rgba(255, 122, 0, 0.2) 60.16%, rgba(255, 126, 7, 0) 79.23%), radial-gradient(50.29% 158.93% at 77.66% 11.85%, rgba(173, 145, 0, 0.2) 21.76%, rgba(191, 161, 3, 0) 100%), radial-gradient(70.65% 223.29% at -4.77% 128.43%, rgba(150, 3, 144, 0.83) 1.17%, rgba(150, 3, 144, 0) 100%)",
  },
  contentContainer: {
    width: "65%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default App;
