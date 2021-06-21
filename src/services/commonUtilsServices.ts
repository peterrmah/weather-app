/**
 * Absolute temperature in Standard units (i.e. Kelvin)
 */
const ABSOLUTE_TEMPERATURE = 273.15;

/**
 * Converts a temperature from Standard units (i.e. Kelvin) to Metric (i.e. Celsius).
 *
 * @param {number} standardTemperature - temperature to convert from Standard to Metric units.
 * @returns {number} the temperature in degrees Celsius.
 */
export const convertKelvinToCelsius = (standardTemperature: number): number => {
  return Number((standardTemperature - ABSOLUTE_TEMPERATURE).toFixed(1));
};
