import { variousCityNames } from "../utils/variousCityNames";

/**
 * Absolute temperature in Standard units (i.e. Kelvin)
 */
const ABSOLUTE_TEMPERATURE = 273.15;

/**
 * Converts a temperature from Standard units (i.e. Kelvin) to Metric (i.e. Celsius).
 *
 * @param {number} standardTemperature - temperature to convert from Standard to Metric units.
 * @returns {string} the temperature in degrees Celsius.
 */
export const convertKelvinToCelsius = (standardTemperature: number): string => {
  return (standardTemperature - ABSOLUTE_TEMPERATURE).toFixed(1);
};

/**
 * Gets a random city name from a predefined list of cities in Canada.
 *
 * @returns {string} - a random city name in Canada.
 */
export const getRandomCityName = () => {
  const index = generateRandomNumber(0, variousCityNames.length - 1);
  return variousCityNames[index];
};

/**
 * Generates a pseudo-random number within the given range (inclusive).
 *
 * @param {number} startRange - lower range.
 * @param {number} endRange - upper range.
 * @returns {number} - a pseudo-random number within range.
 */
const generateRandomNumber = (startRange: number, endRange: number) => {
  const min = Math.ceil(startRange);
  const max = Math.floor(endRange);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
