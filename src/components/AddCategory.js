import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( { setCategories } ) => {

    const [ inputValue, setInputValue ] = useState("");

    const handleChange = ( e ) => {

        setInputValue( e.target.value )

    }

    const handleSubmit = ( e ) => {

        if ( inputValue.trim().length) {
            setCategories( cats => [inputValue,...cats] );
            setInputValue("");
        }

        e.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleChange }
                placeholder="Search GIFs "
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}