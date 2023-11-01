import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { formActions } from '../features/formSlice';

function useSelect(optionsList, placeholder, value, name, changeHandler) {
    const checkInitialValue = value.length === 0 ? placeholder : value;
    const [selectedValue, setSelectedValue] = useState(checkInitialValue);
    const [optionsArr, setOptionsArr] = useState(optionsList);
    const [inputValue, setInputValue] = useState('');
    const [listVisible, setListVisible] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const optionRefs = useRef([]);
    const selectContainerRef = useRef(null);
    const dispatch = useDispatch();

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

        dispatch(formActions.setFormData({ name, value: selectedValue }));
        dispatch(formActions.removeError({ name }));
    }, [selectedValue]);

    useEffect(() => {
        if (listVisible) setHighlightedIndex(0);
    }, [listVisible]);

    useEffect(() => {
        if (value === '') {
            setSelectedValue(placeholder);
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
        setHighlightedIndex(index);
    };

    const handleClick = (e) => {
        if (e.target.tagName === 'INPUT') return;
        setListVisible((prevState) => !prevState);
    };

    const handleKeyDown = (e) => {
        const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
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
                if (newValue >= 0 && newValue < optionsArr.length) {
                    setHighlightedIndex(newValue);
                }
                break;
            case 'Enter':
                setSelectedValue(optionsArr[highlightedIndex]);
                setListVisible(false);
                break;
            case 'Escape':
                setListVisible(false);
                break;
            default:
        }
    };

    const selectOption = (e, nameValue) => {
        e.stopPropagation();
        setSelectedValue(nameValue);
        setListVisible(false);
    };

    const filterOptions = (query) => {
        const filteredOptions = optionsList.filter((item) => item.includes(query));
        setOptionsArr(filteredOptions);
    };

    const handleInputChange = (e) => {
        const query = e.target.value.toUpperCase();
        setInputValue(query);
        filterOptions(query);
    };

    const handleResetValue = (e) => {
        e.stopPropagation();
        setInputValue('');
        if (optionsArr.length !== optionsList.length) {
            setOptionsArr(optionsList);
        }
    };

    return {
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
    };
}

export default useSelect;
