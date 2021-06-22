/**
 * @enum {string} Supported actions in the location reducer.
 *
 * @property {string} UPDATE_CITY - updates location city.
 */
export enum LOCATION_ACTION_TYPES {
  UPDATE_CITY = "UPDATE_CITY",
}

/**
 * Location state.
 */
export interface LocationState {
  city: string;
}
