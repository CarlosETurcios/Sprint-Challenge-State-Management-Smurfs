import React, { useState } from 'react';
import { addSmurf } from './actions'
import { connect } from 'react-redux'
import { deleteSmurf } from './actions';
import axios from 'axios';

export const SmurfForm = (props) => {
    const [form, setForm] = useState({})
    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log("form ct ", form)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("sending this data form", form)
        props.addSmurf(form.name, form.age, form.height);
        setForm({ name: "", age: "", height: "", })
    }
    const handleDelete = id => {

        axios.delete(`http://localhost:3333/smurfs/${id}`)
            .then(res => props.setForm(form.filter(item => item.id !== id)))


    }

    return (
        <div className="smurf-form">
            <input
                type="text"
                name='name'
                placeholder='name'
                value={form.name}
                onChange={handleChange}
            />

            <input
                type="text"
                name="height"
                placeholder="height"
                value={form.height}
                onChange={handleChange}

            />
            <input
                type="text"
                name="age"
                placeholder="age"
                value={form.age}
                onChange={handleChange}

            />
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.height}</p>

            <button onClick={handleSubmit}>Add Smurf</button>
            <button onClick={handleDelete(props.id)}>Delete</button>
        </div >

    )




}

const mapStateToProps = (state) => {
    // age = state.age
    // name = state.name
    // height = state.height


}
export default connect(mapStateToProps, { addSmurf, deleteSmurf })(SmurfForm)