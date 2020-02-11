import axios from 'axios'

export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED'



export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';





export const addSmurf = (name, age, height) => dispatch => {
    console.log("adding smurf", name, age, height)

    dispatch({ type: ADD_SMURF })

    axios.post('http://localhost:3333/smurfs', { name, age, height })
        .then((response) => {
            console.log("api response ")
            dispatch({ type: ADD_SMURF_SUCCESS, payload: { name, age, height } })
        })
        .catch((err) => {
            console.log("api error", err.response)
            const payload = err.response ? err.response.data : err
            dispatch({ type: ADD_SMURF_FAILED, payload })
        })

}





export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('this is the res ', res.data)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SMURF_FAILURE, payload: err })
        })



}

export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: DELETE_START });
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({ type: DELETE_SUCCESS, payload: { id } })

        })

        .catch(err => {
            console.log(err)
            dispatch({ type: DELETE_FAILURE, payload: err })
        })

};