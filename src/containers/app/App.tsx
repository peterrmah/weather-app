import "./App.css";

import { useGetCityByNameQuery } from "../../graphql/generated/graphql";

const App = () => {
  const { data, loading, error } = useGetCityByNameQuery({
    variables: {
      name: "Gothenburg", // value for 'name'
    },
  });
  let content;
  if (loading) {
    content = <div>Loading...</div>;
  } else if (data) {
    content = <div>{data?.getCityByName?.id}</div>;
  }

  return <div className="App">{content}</div>;
};

export default App;
