import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";
import WeatherCard from "../../components/WeatherCard";

interface MainProps {}

const Main: FunctionComponent<MainProps> = ({}) => {
  const classes = useStyles();

  return (
    <main className={classes.mainContainer}>
      <WeatherCard />
    </main>
  );
};

export default Main;

const useStyles = createUseStyles({
  mainContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
});
