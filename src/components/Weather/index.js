import React from "react";

var city = String(window.location.pathname);
var urlArray = city.split('/');

const API_WEATHER = `http://localhost:8888/weather-service/weathers?cityName=${urlArray[2]}`;
console.log(API_WEATHER);

class index extends React.Component{
  state = {
      weather : [],
      weatherdescription : [],
      temp : [],
  };

  componentDidMount() {
    const { weather } = this.state;

    const weatherData = fetch(API_WEATHER)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weather : data.weather[0].main,
          weatherdescription : data.weather[0].description,
          temp : data.main.temp,
        });
      });
  }

render() {
  const { cityName } = this.props.match.params;
  const { weather } = this.state;
  const { weatherdescription } = this.state;
  const { temp } = this.state;
  
  return (
  <>
  <h2>{cityName}</h2>
  {weather && <h3>{JSON.stringify(weather)}</h3>}
  {weatherdescription && <h3>{JSON.stringify(weatherdescription)}</h3>}
  {temp && <h3>{JSON.stringify(temp)}</h3>}
  </>
  );
}
}

export default index;