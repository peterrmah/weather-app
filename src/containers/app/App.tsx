import "./App.css";

import React, { FunctionComponent, useEffect, useState } from "react";

import WeatherCard from "../../components/WeatherCard";

interface AppProps {}

const App: FunctionComponent<AppProps> = ({}) => {
  return (
    <div className="App">
      <header>
        <h1>This is the page header</h1>
      </header>
      <main>
        <WeatherCard />
      </main>
    </div>
  );
};

export default App;
