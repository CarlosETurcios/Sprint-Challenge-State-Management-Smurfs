import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from './actions'

export const SmurfsList = (props) => {

    const fetchSmurf = (e) => {
        e.preventDefault();
        props.getSmurfs();

    }
    console.log("ct hello", props)
    return (
        <div className="smurfs-card">
            <h1>Smurfs list!</h1>
            <div>
                {props.smurfs.map(smurfs => (
                    <Smurfs key={smurfs.id} smurfs={smurfs} />
                ))}
                {props.error && <p className="error">{props.error}</p>}
                <button onClick={fetchSmurf}>update smurf</button>

            </div>



        </div>



    )




}
const Smurfs = ({ smurfs }) => {
    const { name, age, height } = smurfs;
    return (
        <div>
            <h1>{name} Smurf</h1>
            <p>Age: {age} years old</p>
            <p>Height: {height} feet tall</p>
        </div>)
};
const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
})
export default connect(mapStateToProps, { getSmurfs })(SmurfsList);