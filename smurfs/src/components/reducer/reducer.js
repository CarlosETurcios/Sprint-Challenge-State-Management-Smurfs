
import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILED, DELETE_START, DELETE_SUCCESS, DELETE_FAILURE } from '../actions';

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false,

}
const addInitialState = {
    age: '',
    height: '',
    name: '',
}

export const addReducer = (state = addInitialState, action) => {
    switch (action.type) {
        case ADD_SMURF: {
            return {
                ...state,
                isFetching: true

            }
        }

        case ADD_SMURF_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                age: action.payload.age,
                height: action.payload.height,
                name: action.payload.name,
            }
        }
        case ADD_SMURF_FAILED: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }
        case DELETE_START: {
            return {
                ...state,
                isFetching: false,

            }
        }

        case DELETE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                age: action.payload.age,
                height: action.payload.height,
                name: action.payload.name,
            }
        }

        case DELETE_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }
        default:
            return state
    }


}



function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
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