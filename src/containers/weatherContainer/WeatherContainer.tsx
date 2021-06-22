import React, { FunctionComponent, useState, useEffect } from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";

import { AppState } from "../../store/types";
import { LocationState, LOCATION_ACTION_TYPES } from "../../store/reducers/location/actionTypes";
import { WeatherState, WEATHER_ACTION_TYPES } from "../../store/reducers/weather/actionTypes";
import { useGetCityByNameQuery } from "../../graphql/generated/graphql";
import { CommonUtilsServices, LocationServices } from "../../services";
import Button from "../../components/button/Button";
import DropPin from "../../assets/droppin.png";
import Refresh from "../../assets/refresh.png";
import Surprise from "../../assets/surprise.png";
import WeatherData from "../weatherData/WeatherData";

const REFRESH_INTERVAL = Number(process.env.REACT_APP_REFRESH_INTERVAL) || 30000;

interface WeatherContainerProps extends LocationState, WeatherState {
  onUpdateCity: Function;
  onUpdateWeather: Function;
}

const WeatherContainer: FunctionComponent<WeatherContainerProps> = ({
  city,
  temperature,
  onUpdateCity,
  onUpdateWeather,
}) => {
  const classes = useStyles();
  const [isLocateMeToggled, setIsLocateMeToggled] = useState(true);

  const { data, refetch } = useGetCityByNameQuery({
    variables: {
      name: city,
    },
    pollInterval: REFRESH_INTERVAL,
  });

  useEffect(() => {
    const standardTemperature = data?.getCityByName?.weather?.temperature?.actual;
    if (standardTemperature) {
      const temperature = CommonUtilsServices.convertKelvinToCelsius(standardTemperature);
      onUpdateWeather(temperature);
    }
  }, [onUpdateWeather, data]);

  useEffect(() => {
    if (isLocateMeToggled) {
      const getCityName = async () => {
        const city = await LocationServices.fetchCityName();
        onUpdateCity(city);
        setIsLocateMeToggled(!isLocateMeToggled);
      };
      getCityName();
    }
  }, [isLocateMeToggled, onUpdateCity]);

  const surpriseMeButtonHandler = () => {
    onUpdateCity(CommonUtilsServices.getRandomCityName());
  };

  const refreshButtonHandler = () => {
    refetch();
  };

  const locateMeButtonHandler = () => {
    setIsLocateMeToggled(!isLocateMeToggled);
  };

  return (
    <div className={classes.weatherContainer}>
      <div className={classes.cardHeader}>
        <h1>Weather</h1>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.surpriseMeButton}>
          <Button
            clickHandler={surpriseMeButtonHandler}
            buttonLabel="Surprise Me"
            iconPath={Surprise}
            iconName="surprise-me-icon"
          />
        </div>
        <div className={classes.refreshButton}>
          <Button
            clickHandler={refreshButtonHandler}
            buttonLabel="Refresh"
            iconPath={Refresh}
            iconName="refresh-icon"
          />
        </div>
        <div className={classes.locateMeButton}>
          <Button
            clickHandler={locateMeButtonHandler}
            buttonLabel="Locate Me"
            iconPath={DropPin}
            iconName="droppin-icon"
          />
        </div>
        <div className={classes.weatherDataContainer}>
          <WeatherData city={city} isLoading={!data} temperature={temperature} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    city: state.locationReducer.city,
    temperature: state.weatherReducer.temperature,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onUpdateCity: (newCity: string) =>
      dispatch({ type: LOCATION_ACTION_TYPES.UPDATE_CITY, newCity }),
    onUpdateWeather: (actualTemperature: string) =>
      dispatch({ type: WEATHER_ACTION_TYPES.UPDATE_WEATHER, actualTemperature }),
  };
};

const useStyles = createUseStyles({
  weatherContainer: {
    backgroundColor: "#fffefc61",
    display: "flex",
    flexDirection: "column",
    width: "70%",
    minWidth: "70%",
    height: "auto",
    margin: "35px 0 auto 0",
    padding: "15px 30px",
    borderRadius: 10,
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 5%), 0 6px 20px 0 rgb(0 0 0 / 5%)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Josefin Sans, sans-serif",
    color: "#202020",
    height: 80,
  },
  mainContent: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "0px 0px",
  },
  surpriseMeButton: {
    gridArea: "1 / 1 / 2 / 2",
    padding: "10px 10px 15px 10px",
  },
  refreshButton: {
    gridArea: "1 / 2 / 2 / 3",
    padding: "10px 10px 15px 10px",
  },
  locateMeButton: {
    gridArea: "2 / 1 / 3 / 3",
    padding: "15px 10px 15px 10px",
  },
  weatherDataContainer: {
    gridArea: "1 / 3 / 3 / 4",
    padding: "10px 10px 15px 10px",
  },
  "@media screen and (max-width: 780px)": {
    mainContent: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr 1fr",
      gap: "0px 0px",
    },
    weatherDataContainer: {
      gridArea: "1 / 1 / 3 / 3",
      padding: "10px 10px 15px 10px",
    },
    surpriseMeButton: {
      gridArea: "4 / 1 / 5 / 3",
      padding: "10px 10px 15px 10px",
    },
    refreshButton: {
      gridArea: "3 / 1 / 4 / 2",
      padding: "10px 10px 15px 10px",
    },
    locateMeButton: {
      gridArea: "3 / 2 / 4 / 3",
      padding: "15px 10px 15px 10px",
    },
    weatherContainer: {
      width: "90%",
      minWidth: "90%",
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
