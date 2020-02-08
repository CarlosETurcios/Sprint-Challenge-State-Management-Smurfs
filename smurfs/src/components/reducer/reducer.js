
import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILED } from '../actions';

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false,
    addingSmurfs: false,

}

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case ADD_SMURF: {
            return {
                ...state,
                fetchingSmurfs: true
            }
        }

        case ADD_SMURF_SUCCESS: {
            return {
                ...state,
                fetchingSmurfs: false,
                error: null
            }
        }

        case ADD_SMURF_FAILED: {
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            }
        }
        case FETCH_SMURF_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_SMURF_SUCCESS:
            console.log("ct hello", {
                ...state,
                error: '',
                isFetching: true,
                smurfs: action.payload
            });
            return {
                ...state,
                error: '',
                isFetching: true,
                smurfs: action.payload
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }

        default:
            return state;
    }





}

export default reducer;