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

function Select({ optionsList, placeholder, handleChange, name, value }) {
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
    } = useSelect(optionsList, placeholder, value);

    // const [selectedValue, setSelectedValue] = useState(placeholder);
    // const [optionsArr, setOptionsArr] = useState(optionsList);
    // const [inputValue, setInputValue] = useState('');
    // const [listVisible, setListVisible] = useState(false);
    // const [highlightedIndex, setHeighlitedIndex] = useState(0);
    // const optionRefs = useRef([]);
    // const selectContainerRef = useRef(null);

    // useEffect(() => {
    //     const handleClickOutside = (e) => {
    //         if (selectContainerRef.current && !selectContainerRef.current.contains(e.target)) {
    //             setListVisible(false);
    //         }
    //     };

    //     document.addEventListener('click', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (selectedValue === placeholder) return;

    //     // handleChange(name, selectedValue);
    //     console.log(selectedValue);
    // }, [selectedValue]);

    // useEffect(() => {
    //     if (listVisible) setHeighlitedIndex(0);
    // }, [listVisible]);

    // useEffect(() => {
    //     if (value === '') {
    //         setSelectedValue(placeholder);
    //     }
    // }, [value]);

    // useEffect(() => {
    //     const scrollIntoView = () => {
    //         if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
    //             optionRefs.current[highlightedIndex].current.scrollIntoView({
    //                 behavior: 'auto',
    //                 block: 'nearest',
    //                 inline: 'nearest',
    //             });
    //         }
    //     };

    //     scrollIntoView();
    // }, [highlightedIndex]);

    // const handleOver = (index) => {
    //     setHeighlitedIndex(index);
    // };

    // const handleClick = (e) => {
    //     if (e.target.tagName === 'INPUT') return;
    //     setListVisible((prevState) => !prevState);
    // };

    // const handleKeyDown = (e) => {
    //     const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
    //     switch (e.code) {
    //         case 'Space':
    //             setListVisible((prevState) => !prevState);
    //             break;
    //         case 'ArrowUp':
    //         case 'ArrowDown':
    //             if (!listVisible) {
    //                 setListVisible(true);
    //                 break;
    //             }
    //             if (newValue >= 0 && newValue < optionsArr.length) {
    //                 setHeighlitedIndex(newValue);
    //             }
    //             break;
    //         case 'Enter':
    //             setSelectedValue(optionsArr[highlightedIndex]);
    //             setListVisible(false);
    //             break;
    //         case 'Escape':
    //             setListVisible(false);
    //             break;
    //         default:
    //     }
    // };

    // const selectOption = (e, nameValue) => {
    //     e.stopPropagation();
    //     setSelectedValue(nameValue);
    //     setListVisible(false);
    // };

    // const filterOptions = (query) => {
    //     const filteredOptions = optionsList.filter((item) => item.includes(query));
    //     setOptionsArr(filteredOptions);
    // };

    // const handleInputChange = (e) => {
    //     const query = e.target.value.toUpperCase();
    //     setInputValue(query);
    //     filterOptions(query);
    // };

    // const handleResetValue = (e) => {
    //     e.stopPropagation();
    //     setInputValue('');
    //     if (optionsArr.length !== optionsList.length) {
    //         setOptionsArr(optionsList);
    //     }
    // };

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
