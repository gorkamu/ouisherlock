import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsername, cleanServices } from '../../actions/data';

export const Form = () => {

    const dispatch = useDispatch();

    const { completed } = useSelector(state => state.data);    
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [ fields, handleInputChange ] = useForm({
        search: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDisabled(true);
        dispatch(cleanServices());
        dispatch(searchUsername(fields.search));
    }

    return (
        <div className="d-flex justify-content-center align-items-center container">
            <div className="row">
                <form className="form-inline" onSubmit={ handleSubmit }>
                    <div className="form-group mx-sm-3 mb-2">
                        <input 
                            type="text" 
                            className="form-control"                             
                            placeholder="Username"
                            name="search"
                            onChange={ handleInputChange }
                            disabled={ !completed && isDisabled }
                        />
                    </div>
                    <button className="btn btn-primary mb-2">
                        <i className="fas fa-search"></i> Search
                    </button>
                </form>
            </div>
        </div>
    )
}