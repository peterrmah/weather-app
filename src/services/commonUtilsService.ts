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
export const convertKelvinToMetric = (standardTemperature: number): number => {
  return Math.floor((standardTemperature - ABSOLUTE_TEMPERATURE) * 100) / 100;
};
