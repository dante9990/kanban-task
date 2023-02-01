import React, {useState} from "react";
import './FormSubmit.css'

function FormSubmit(props) {

    const [values, setValues] = useState({
		name: '',
		description: ''
	})

	const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

    const handleSubmit = e => {
		e.preventDefault()
		if (values.name) {
			props.formSubmit(values.name, values.description)
		}
	}

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__item">
                <label htmlFor="name" className="label">Name:</label>
                <input type='text' name="name" id="name" className="input" onChange={handleChange} />
            </div>
            <div className="form__item">
                <label htmlFor="description" className="label">Description:</label>
                <input type="text" name="description" id="description" className="input" onChange={handleChange} />
            </div>
            <button className="btn__submit" type='submit'>
                Submit
            </button>
        </form>
    )
}

export default FormSubmit