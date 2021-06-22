import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";
import SunnyIcon from "../../assets/sunny.png";
import CloudyIcon from "../../assets/cloudy.png";
import ColdIcon from "../../assets/cold.png";
import LoadingIcon from "../../assets/loading.png";

interface WeatherDataProps {
  city: string;
  isLoading: boolean;
  temperature?: string;
}

const WeatherData: FunctionComponent<WeatherDataProps> = ({
  city,
  isLoading = false,
  temperature,
}) => {
  const classes = useStyles();

  let Icon = LoadingIcon;
  if (!isLoading) {
    const tempAsNumber = Number(temperature);
    if (tempAsNumber >= 20) {
      Icon = SunnyIcon;
    } else if (tempAsNumber < 20 && tempAsNumber >= 0) {
      Icon = CloudyIcon;
    } else {
      Icon = ColdIcon;
    }
  }

  return (
    <div className={classes.weatherDataContainer}>
      <p>{city}</p>
      <img className={classes.weatherIcon} src={Icon} alt="weather-icon" />
      {!isLoading ? <p>{temperature}&#8451;</p> : <p>Loading...</p>}
    </div>
  );
};

const useStyles = createUseStyles({
  weatherDataContainer: {
    background: "#f7f7f7",
    borderRadius: 10,
    height: "100%",
    padding: 5,
    color: "#202020",
    textAlign: "center",
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 16%), 0 6px 20px 0 rgb(0 0 0 / 10%)",
  },
  weatherIcon: {
    width: 100,
  },
});

export default WeatherData;
