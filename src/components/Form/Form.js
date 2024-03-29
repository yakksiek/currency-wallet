/* eslint-disable react/no-array-index-key */
import React from 'react';

import Button from '../Button';
import * as db from '../../data';
import useForm from '../../hooks/useForm';

import { StyledHeader, StyledForm, StyledFieldGroup, StyledErrorMessage } from './Form.styled';

function Form() {
    const {
        formData,
        formErrors,
        loading,
        fetchError,
        handleCustomInputSelection,
        handleSubmit,
        handleFetchErrorReset,
        handleFieldChange,
        handleFocus,
        handleBlur,
    } = useForm();

    const renderInputs = (fields) => {
        const groupedFields = {};
        fields.forEach((field) => {
            const group = field.group || 'default';
            if (!groupedFields[group]) {
                groupedFields[group] = [];
            }

            groupedFields[group].push(field);
        });

        const inputGroups = Object.values(groupedFields).map((fieldSet, index) => (
            <StyledFieldGroup key={index} id={`item${index + 1}`}>
                {fieldSet.map((field) => {
                    const { name, element } = field;
                    const error = formErrors[name];
                    const value = formData[name];
                    const fieldData = {
                        ...field,
                        onChange: handleFieldChange,
                        value,
                        loading,
                        error,
                        handleCustomSelection: handleCustomInputSelection,
                        handleFocus,
                        handleBlur,
                    };
                    const TagEl = element;

                    return <TagEl key={name} fieldData={fieldData} />;
                })}
            </StyledFieldGroup>
        ));

        return inputGroups;
    };

    if (fetchError) {
        return (
            <StyledErrorMessage className="background">
                <h2>{fetchError}</h2>
                <hr />
                <p>Problem getting the data. Try again or enter value manually</p>
                <Button handleClick={handleFetchErrorReset} type="button">
                    OK!
                </Button>
            </StyledErrorMessage>
        );
    }

    return (
        <div className="background">
            <StyledHeader>
                <h2>Add new transaction</h2>
                <h4 className="header-color">Pick date and currency to load the price</h4>
            </StyledHeader>
            <StyledForm action="" onSubmit={handleSubmit}>
                {renderInputs(db.formFields)}
                <input className="btn-submit text-color" type="submit" value="Add transaction" />
            </StyledForm>
        </div>
    );
}

export default Form;
