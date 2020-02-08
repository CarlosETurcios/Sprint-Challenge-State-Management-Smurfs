import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from './actions'


export const SmurfsList = (props) => {

    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurfs();
    }
    console.log("ct hello", props)
    return (
        <div className="smurfs-card">
            <h1>Smurfs list!</h1>
            <div>
                {props.smurfs.map((smurfs, index) => (
                    <h4 key={index}>{smurfs.name.age.hight}</h4>
                ))}
                {props.error && <p className="error">{props.error}</p>}
                <button onClick={fetchSmurf}>Fetch Smurf</button>
            </div>



        </div>



    )




}
const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
})
export default connect(mapStateToProps, { getSmurfs })(SmurfsList);