/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef, createRef } from 'react';
import { UilSearch, UilDirection, UilTimesCircle } from '@iconscout/react-unicons';

import useSelect from '../../hooks/useSelect';

import {
    StyledCustomSelect,
    StyledValue,
    StyledSelectOptions,
    StyledOptionItem,
    StyledListContainer,
    StyledInput,
    StyledInputContainer,
} from './Select.styled';

function Select({ fieldData }) {
    const { optionsList, placeholder, onChange, name, value } = fieldData;
    const {
        selectedValue,
        optionsArr,
        inputValue,
        listVisible,
        highlightedIndex,
        optionRefs,
        handleOver,
        handleClick,
        handleKeyDown,
        selectOption,
        handleInputChange,
        handleResetValue,
        selectContainerRef,
    } = useSelect(optionsList, placeholder, value, name, onChange);

    const renderOptions = (itemsArr) =>
        itemsArr.map((item, index) => {
            const isOver = highlightedIndex === index;
            optionRefs.current[index] = optionRefs.current[index] || createRef();

            return (
                <StyledOptionItem
                    key={item}
                    ref={optionRefs.current[index]}
                    onMouseOver={() => handleOver(index)}
                    $isOver={isOver}
                    onClick={(e) => selectOption(e, item)}
                    className="bg-color-hover"
                >
                    {item}
                </StyledOptionItem>
            );
        });

    const renderInputIcon = (input) =>
        input === '' ? (
            <span className="search-icon">
                <UilSearch />
            </span>
        ) : (
            <span type="button" onClick={handleResetValue}>
                <UilTimesCircle />
            </span>
        );

    return (
        <StyledCustomSelect
            onClick={handleClick}
            tabIndex="0"
            ref={selectContainerRef}
            onKeyDown={handleKeyDown}
            $listVisible={listVisible}
            className="element"
        >
            <StyledValue>
                {selectedValue}
                <UilDirection className="options-icon" />
            </StyledValue>
            <StyledListContainer $listVisible={listVisible}>
                <StyledInputContainer>
                    <StyledInput
                        className="element-bg text-color"
                        tabIndex="0"
                        placeholder="search"
                        onChange={handleInputChange}
                        value={inputValue}
                    />
                    {renderInputIcon(inputValue)}
                </StyledInputContainer>
                <StyledSelectOptions className="element-bg" $listVisible={listVisible}>
                    {renderOptions(optionsArr)}
                </StyledSelectOptions>
            </StyledListContainer>
        </StyledCustomSelect>
    );
}

export default Select;
