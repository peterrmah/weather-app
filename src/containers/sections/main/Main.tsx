import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";
import WeatherContainer from "../../weatherContainer/WeatherContainer";

const Main: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <main className={classes.mainContainer}>
      <WeatherContainer />
    </main>
  );
};

const useStyles = createUseStyles({
  mainContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
});

export default Main;
