/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-cycle
import * as db from '../../data';
import * as h from '../helpers';
// import Error from '../Error';
import Wrapper from '../Wrapper';
import Button from '../Button';

import { StyledPickerWrapper, StyledHeader, StyledBody, StyledColGrid } from './DatePicker.styled';
import { formActions } from '../../features/formSlice';

// const min = h.getYesterday();
// console.log(min);

function DatePicker({ fieldData }) {
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

        const date = new Date(currentYear, currentMonth, event.target.getAttribute('data-day'));

        const dateString = date.toISOString();
        console.log(dateString);
        dispatch(formActions.setFormData({ name, value: dateString }));
        dispatch(formActions.removeError({ name }));
    };

    const getTimeFromState = (day) => new Date(currentYear, currentMonth, day).getTime();
    const renderDayNames = () =>
        h.getSortedDays(currentYear, currentMonth, db.days).map((day) => <h5 key={day}>{day}</h5>);

    const renderDays = () => {
        return h.range(1, h.getNumbersOfDaysInMonth(currentYear, currentMonth, db.days) + 1).map((day) => {
            const valueDateObject = new Date(value);
            const selected = valueDateObject?.getTime() === new Date(currentYear, currentMonth, day).getTime();

            return (
                <button
                    key={day}
                    // disabled={minDate?.getTime() > getTimeFromState(day)}
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
            <StyledPickerWrapper>
                <StyledHeader>
                    <Button
                        type="button"
                        handleClick={prevMonth}
                        variant="transparent"
                        shape="circle"
                        // disabled={minDate?.getTime() > getTimeFromState(1)}
                    >
                        <UilAngleLeft />
                    </Button>
                    <div className="date-wrapper">
                        <h3 className="month">{db.months[currentMonth]}</h3>
                        <h5>{currentYear}</h5>
                    </div>
                    <Button type="button" handleClick={nextMonth} variant="transparent" shape="circle">
                        <UilAngleRight />
                    </Button>
                </StyledHeader>
                <div className="header-line" />
                <StyledBody>
                    <StyledColGrid $heading="true">{renderDayNames()}</StyledColGrid>

                    <StyledColGrid onClick={handleSelection}>{renderDays()}</StyledColGrid>
                </StyledBody>
            </StyledPickerWrapper>
            {/* <Error>{error}</Error> */}
        </Wrapper>
    );
}

// DatePicker.defaultProps = {
//     // minDate: min,
// };

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
    // minDate: PropTypes.instanceOf(Date),
};

export default DatePicker;
