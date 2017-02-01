import { FETCH_WEATHER } from '../actions/index';

// never mutate state object!
export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    return [ action.payload.data, ...state ];
  }

  return state;
}
