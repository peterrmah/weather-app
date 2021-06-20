import React, { FunctionComponent, useState, useEffect } from "react";
import { connect } from "react-redux";

import { AppState, WeatherState } from "../types/StateTypes";
import { WEATHER_ACTIONS } from "../store/weatherActions";
import { useGetCityByNameQuery } from "../graphql/generated/graphql";
import { CommonUtilsService } from "../services";

// const REFRESH_INTERVAL = Number(process.env.REACT_APP_REFRESH_INTERVAL) || 80000;

interface WeatherCardProps extends WeatherState {
  onUpdateCity: (newCity: string) => void;
}

const WeatherCard: FunctionComponent<WeatherCardProps> = (props: WeatherCardProps) => {
  const [temperature, setTemperature] = useState<number | null>(null);

  console.log("temperature", temperature);

  const { data, loading, error } = useGetCityByNameQuery({
    variables: {
      name: props.city, // value for 'name',
    },
    // pollInterval: REFRESH_INTERVAL,
  });
  console.log("================================> START");
  console.log("props from weatherCard", props);
  console.log("data", data);

  useEffect(() => {}, []);

  useEffect(() => {
    const standardTemperature = data?.getCityByName?.weather?.temperature?.actual;
    if (standardTemperature) {
      const temperature = CommonUtilsService.convertKelvinToMetric(standardTemperature);
      setTemperature(temperature);
    }
  }, [props.city, data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!</div>;

  console.log("<================================ END");
  console.log("props from weatherCard", props);
  console.log("data", data);

  return (
    <div>
      <h1>This is the weatherCard</h1>
      <p>city: {props?.city}</p>
      <p>temperature: {temperature}</p>
      <button
        onClick={() => props.onUpdateCity(props.city === "Toronto" ? "Vancouver" : "Toronto")}
      >
        Toggle city
      </button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  console.log("props from mapStateToProps", state);
  return {
    city: state.wtr.city,
    location: state.wtr.location,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  console.log("props from mapDispatchToProps", dispatch);
  return {
    onUpdateCity: (newCity: string) => dispatch({ type: WEATHER_ACTIONS.UPDATE_CITY, newCity }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
