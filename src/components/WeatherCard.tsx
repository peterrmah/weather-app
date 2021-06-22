import React, { FunctionComponent, useState, useEffect } from "react";
import { connect } from "react-redux";

import { AppState } from "../store/types";
import { LocationState, LOCATION_ACTION_TYPES } from "../store/reducers/location/actionTypes";
import { WeatherState, WEATHER_ACTION_TYPES } from "../store/reducers/weather/actionTypes";
import { useGetCityByNameLazyQuery } from "../graphql/generated/graphql";
import { CommonUtilsServices, LocationServices } from "../services";
import { createUseStyles } from "react-jss";

// const REFRESH_INTERVAL = Number(process.env.REACT_APP_REFRESH_INTERVAL) || 80000;

interface WeatherCardProps extends LocationState, WeatherState {
  onUpdateCity: (newCity: string) => void;
  onUpdateWeather: (newTemperature: number) => void;
}

const WeatherCard: FunctionComponent<WeatherCardProps> = (props: WeatherCardProps) => {
  const classes = useStyles();
  const [isLocateMeToggled, setIsLocateMeToggled] = useState(true);

  const [getCityByNameQueryLazy, { data, loading, error }] = useGetCityByNameLazyQuery({
    variables: {
      name: props.city,
    },
    // pollInterval: REFRESH_INTERVAL,
  });

  useEffect(() => {
    getCityByNameQueryLazy();
  }, [getCityByNameQueryLazy]);

  console.log("================================> START");
  console.log("props from weatherCard", props);
  console.log("data", data);

  useEffect(() => {
    const standardTemperature = data?.getCityByName?.weather?.temperature?.actual;
    if (standardTemperature) {
      console.log("updatedWeather", data?.getCityByName);
      const temperature = CommonUtilsServices.convertKelvinToCelsius(standardTemperature);
      props.onUpdateWeather(temperature);
    }
  }, [props, data]);

  useEffect(() => {
    if (isLocateMeToggled) {
      const getCityName = async () => {
        const city = await LocationServices.fetchCityName();
        props.onUpdateCity(city);
        setIsLocateMeToggled(!isLocateMeToggled);
      };
      getCityName();
    }
  }, [isLocateMeToggled, props]);

  if (loading) {
    console.log("loading");
    return <div>Loading...</div>;
  }
  if (error) {
    console.log("error");
    return <div>Error!!</div>;
  }

  console.log("<================================ END");
  console.log("props from weatherCard", props);
  console.log("data", data);

  return (
    <div className={classes.weatherContainer}>
      <h1>This is the weatherCard</h1>
      <p>city: {props.city}</p>
      <p>temperature: {props.temperature}</p>
      <button
        onClick={() => props.onUpdateCity(props.city === "Toronto" ? "Vancouver" : "Toronto")}
      >
        Toggle city
      </button>
      <button onClick={() => setIsLocateMeToggled(!isLocateMeToggled)}>Get location</button>
      <button onClick={() => getCityByNameQueryLazy()}>Refresh</button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  console.log("props from mapStateToProps", state);
  return {
    city: state.locationReducer.city,
    temperature: state.weatherReducer.temperature,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  console.log("props from mapDispatchToProps", dispatch);
  return {
    onUpdateCity: (newCity: string) =>
      dispatch({ type: LOCATION_ACTION_TYPES.UPDATE_CITY, newCity }),
    onUpdateWeather: (actualTemperature: number) =>
      dispatch({ type: WEATHER_ACTION_TYPES.UPDATE_WEATHER, actualTemperature }),
  };
};

const useStyles = createUseStyles({
  weatherContainer: {
    backgroundColor: "#fffefc",
    display: "flex",
    flexDirection: "column",
    width: "70%",
    minWidth: "65%",
    height: 400,
    minHeight: 300,
    margin: "50px 0 auto 0",
    padding: "15px 30px",
    borderRadius: 10,
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 5%), 0 6px 20px 0 rgb(0 0 0 / 5%)",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
