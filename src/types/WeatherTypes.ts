export interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
}

export interface WeatherState {
  city: string;
  location: GeolocationCoordinates;
}
