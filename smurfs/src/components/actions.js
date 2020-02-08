import axios from 'axios'

export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED'



export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";



export function addSmurf(name, age, height) {
    return (dispatch) => {
        dispatch({ type: ADD_SMURF })

        return axios.post('http://localhost:3333/smurfs', { name, age, height })
            .then(() => {
                dispatch({ type: ADD_SMURF_SUCCESS })
            })
            .catch((err) => {
                const payload = err.response ? err.response.data : err
                dispatch({ type: ADD_SMURF_FAILED, payload })
            })
    }
}





export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('this is the res ', res.data.smurfs)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SMURF_FAILURE, payload: err })
        })



}