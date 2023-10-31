/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons';
import PropTypes, { number } from 'prop-types';

// eslint-disable-next-line import/no-cycle
import * as db from '../../data';
import * as h from '../helpers';
// import Error from '../Error';
import Wrapper from '../Wrapper';
import Button from '../Button';

import { StyledPickerWrapper, StyledHeader, StyledBody, StyledColGrid } from './DatePicker.styled';
import { formActions } from '../../features/formSlice';

const min = h.getToday();

function DatePicker({ minDate, fieldData }) {
    const dispatch = useDispatch();
    const { name, error, value } = fieldData;
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const nextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth((prev) => prev + 1);
        } else {
            setCurrentMonth(0);
            setCurrentYear((prev) => prev + 1);
        }
    };

    const prevMonth = () => {
        if (currentMonth > 0) {
            setCurrentMonth((prev) => prev - 1);
        } else {
            setCurrentMonth(11);
            setCurrentYear((prev) => prev - 1);
        }
    };

    const handleSelection = (event) => {
        event.preventDefault();
        if (event.target.id !== 'day') return;

        const dateFormatted = h.dateToISOString(
            new Date(currentYear, currentMonth, event.target.getAttribute('data-day')),
        );

        dispatch(formActions.setFormData({ name, value: dateFormatted }));
        dispatch(formActions.removeError({ name }));
    };

    const getTimeFromState = (day) => new Date(currentYear, currentMonth, day).getTime();
    const renderDayNames = () =>
        h.getSortedDays(currentYear, currentMonth, db.days).map((day) => (
            <h5 className="header-color" key={day}>
                {day}
            </h5>
        ));

    const renderDays = (stateDate) => {
        const numberOfDaysImMonth = h.getNumbersOfDaysInMonth(currentYear, currentMonth);
        return h.createNumberRangeArray(1, numberOfDaysImMonth).map((day) => {
            const selectedDateObj = new Date(stateDate);
            const dateToRenderObj = new Date(currentYear, currentMonth, day);
            const selected =
                selectedDateObj.getTime() === dateToRenderObj.getTime() - dateToRenderObj.getTimezoneOffset() * 60000;

            return (
                <button
                    key={day}
                    disabled={minDate?.getTime() < getTimeFromState(day)}
                    id="day"
                    data-day={day}
                    className={selected ? 'active' : ''}
                    type="button"
                >
                    {day}
                </button>
            );
        });
    };

    return (
        <Wrapper>
            <StyledPickerWrapper className="element">
                <StyledHeader>
                    <Button type="button" handleClick={prevMonth} variant="transparent" shape="circle">
                        <UilAngleLeft />
                    </Button>
                    <div className="date-wrapper">
                        <h3 className="month">{db.months[currentMonth]}</h3>
                        <h5>{currentYear}</h5>
                    </div>
                    <Button
                        type="button"
                        handleClick={nextMonth}
                        variant="transparent"
                        shape="circle"
                        disabled={currentMonth === new Date().getMonth()}
                    >
                        <UilAngleRight />
                    </Button>
                </StyledHeader>
                <div className="header-line" />
                <StyledBody>
                    <StyledColGrid $heading="true">{renderDayNames()}</StyledColGrid>

                    <StyledColGrid onClick={handleSelection}>{renderDays(value)}</StyledColGrid>
                </StyledBody>
            </StyledPickerWrapper>
            {/* <Error>{error}</Error> */}
        </Wrapper>
    );
}

DatePicker.defaultProps = {
    minDate: min,
};

DatePicker.propTypes = {
    fieldData: PropTypes.shape({
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        pattern: PropTypes.string,
        errorMessage: PropTypes.string.isRequired,
        // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    minDate: PropTypes.instanceOf(Date),
};

export default DatePicker;
