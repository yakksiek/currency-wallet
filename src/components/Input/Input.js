/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { formActions } from '../../features/formSlice';

import Wrapper from '../Wrapper';
// import Label from '../Label';
// import Error from '../Error';

import {
    StyledFieldWrapper,
    StyledInputWrapper,
    StyledInput,
    StyledLabel,
    StyledDefaultList,
    StyledDefaultItem,
} from './Input.styled';

function Input({ fieldData }) {
    const dispatch = useDispatch();
    const { name, type, value: inputValue, error, label, onChange, min, placeholder, defaultValues } = fieldData;

    useEffect(() => {
        console.log('rerendered');
    }, []);

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
        onChange(name, value);
    };

    const handleClick = (value) => {
        console.log(value);
        dispatch(formActions.setFormData({ name, value }));
    };

    const renderDefaults = (defaultsArr) => {
        const defaults = defaultsArr.map((el, i) => (
            <StyledDefaultItem key={i} onClick={() => handleClick(el)}>
                {el}
            </StyledDefaultItem>
        ));

        return <StyledDefaultList>{defaults}</StyledDefaultList>;
    };

    return (
        <div>
            <StyledFieldWrapper>
                <StyledLabel htmlFor={name}>{label}: </StyledLabel>
                <StyledInputWrapper>
                    <StyledInput
                        className="element"
                        id={name}
                        name={name}
                        type={type}
                        onChange={handleChange}
                        value={inputValue}
                        min={min}
                        placeholder={placeholder}
                    />
                    {defaultValues && renderDefaults(defaultValues)}
                </StyledInputWrapper>
            </StyledFieldWrapper>
            {/* <Error>{error}</Error> */}
        </div>
    );
}

// Input.propTypes = {
//     fieldData: PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         type: PropTypes.string.isRequired,
//         placeholder: PropTypes.string,
//         required: PropTypes.bool,
//         pattern: PropTypes.string,
//         errorMessage: PropTypes.string.isRequired,
//         group: PropTypes.number.isRequired,
//         value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     }),
// };

export default Input;
