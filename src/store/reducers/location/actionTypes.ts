/**
 * @enum {string} Supported actions in the location reducer.
 *
 * @property {string} UPDATE_CITY - updates location city.
 * @property {string} RESET - reset store to default values.
 */
export enum LOCATION_ACTION_TYPES {
  UPDATE_CITY = "UPDATE_CITY",
  RESET = "RESET",
}

/**
 * Location state.
 */
export interface LocationState {
  city: string;
}
