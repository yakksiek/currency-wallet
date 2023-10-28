/* eslint-disable no-case-declarations */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef, createRef } from 'react';
import { UilSearch, UilDirection } from '@iconscout/react-unicons';

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
    const [selectedValue, setselectedValue] = useState(placeholder);
    const [optionsArr, setOptions] = useState(optionsList);
    const [inputValue, setInputValue] = useState('');
    const [listVisible, setListVisible] = useState(false);
    const [highlightedIndex, setHeighlitedIndex] = useState(0);
    const optionRefs = useRef([]);
    const selectContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (selectContainerRef.current && !selectContainerRef.current.contains(e.target)) {
                setListVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (selectedValue === placeholder) return;

        // handleChange(name, selectedValue);
        console.log(selectedValue);
    }, [selectedValue]);

    useEffect(() => {
        if (listVisible) setHeighlitedIndex(0);
    }, [listVisible]);

    useEffect(() => {
        if (value === '') {
            setselectedValue(placeholder);
        }
    }, [value]);

    useEffect(() => {
        const scrollIntoView = () => {
            if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
                optionRefs.current[highlightedIndex].current.scrollIntoView({
                    behavior: 'auto',
                    block: 'nearest',
                    inline: 'nearest',
                });
            }
        };

        scrollIntoView();
    }, [highlightedIndex]);

    const handleOver = (index) => {
        setHeighlitedIndex(index);
    };

    const handleClick = (e) => {
        if (e.target.tagName === 'INPUT') return;
        setListVisible((prevState) => !prevState);
    };

    const handleKeyDown = (e) => {
        switch (e.code) {
            case 'Space':
                setListVisible((prevState) => !prevState);
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                if (!listVisible) {
                    setListVisible(true);
                    break;
                }

                const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
                if (newValue >= 0 && newValue < optionsArr.length) {
                    setHeighlitedIndex(newValue);
                }
                break;
            case 'Enter':
                setselectedValue(optionsArr[highlightedIndex]);
                setListVisible(false);
                break;
            case 'Escape':
                setListVisible(false);
                break;
            default:
        }
    };

    const selectOption = (e, name) => {
        e.stopPropagation();
        setselectedValue(name);
        setListVisible(false);
    };

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
                >
                    {item}
                </StyledOptionItem>
            );
        });

    const filterOptions = (query) => {
        const filteredOptions = optionsList.filter((item) => item.includes(query));
        setOptions(filteredOptions);
    };

    const handleInputChange = (e) => {
        const query = e.target.value.toUpperCase();
        setInputValue(query);
        filterOptions(query);
    };

    return (
        <StyledCustomSelect
            onClick={handleClick}
            tabIndex="0"
            ref={selectContainerRef}
            onKeyDown={handleKeyDown}
            $listVisible={listVisible}
        >
            <StyledValue>
                {selectedValue}
                <UilDirection className="options-icon" />
            </StyledValue>
            <StyledListContainer $listVisible={listVisible}>
                <StyledInputContainer>
                    <StyledInput placeholder="search" onChange={handleInputChange} value={inputValue} />

                    <UilSearch />
                </StyledInputContainer>
                <StyledSelectOptions $listVisible={listVisible}>{renderOptions(optionsArr)}</StyledSelectOptions>
            </StyledListContainer>
        </StyledCustomSelect>
    );
}

export default Select;
