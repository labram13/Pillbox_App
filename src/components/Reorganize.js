import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Reorganize(props) {
    const userPrescription = props.userPrescription;
    const navigate = useNavigate();

    let names = {};
    userPrescription.forEach(function (pillObj) {
        names[pillObj.pillName] = false;
    });

    // Have user select which pill to adjust days
    const [selectedPill, setSelectedPill] = useState(null); // Add selectedPill state
    const [reorgPill, setReorgPill] = useState(names);

    const handlePillChange = (event) => {
        const { name } = event.target;
        setSelectedPill(name); // Update the selected pill
        setReorgPill((prevReorgPill) => ({
            ...prevReorgPill,
            [name]: !prevReorgPill[name]
        }));
    };

    // Have user select days
    const [isChecked, setIsChecked] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    });

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        setIsChecked((prevIsChecked) => ({
            ...prevIsChecked,
            [name]: !prevIsChecked[name]
        }));
    };

    // Re-assign/replace days with user's chosen days
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!selectedPill) {
            // Handle case where no pill is selected
            return;
        }

        const daysArray = Object.keys(isChecked).filter(day => isChecked[day]);

        const newPrescription = userPrescription.map(pillObj => {
            if (pillObj.pillName === selectedPill) {
                return {
                    ...pillObj,
                    days: [...daysArray]
                };
            }
            return pillObj;
        });

        props.handleSetUserPrescriptions(newPrescription);
        const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };
        newPrescription.forEach(pillObj => {
            pillObj.days.forEach(day => {
                weeklyPills[day].push(pillObj)
            });
        });
        props.handleSetOrganizedPillbox(weeklyPills);
        event.target.reset();
        navigate('/mypillbox');
    };

    return (
        <div>
            <h1 className='mt-5' style={{ fontFamily: 'Verdana, sans-serif', fontSize: '35px', fontWeight: 'bold' }}>
                Select the pill you'd like to reorganize:
            </h1>
            <p>
                Note: please select only one pill at a time!
            </p>
            <form onSubmit={handleSubmit}>
                <PillCheckBoxes reorgPill={reorgPill} handlePillChange={handlePillChange} />
                <DaysCheckBox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
                <button className="btn btn-primary mb-5">Reorganize</button>
            </form>
        </div>
    );
}

function PillCheckBoxes({ reorgPill, handlePillChange }) {
    return (
        <div className='mb-5 mt-5'>
            {Object.keys(reorgPill).map(pillName => (
                <div key={pillName} className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name={pillName}
                        checked={reorgPill[pillName]}
                        onChange={handlePillChange}
                    />
                    <label htmlFor={pillName} className="form-check-label">
                        {pillName}
                    </label>
                </div>
            ))}
        </div>
    );
}

function DaysCheckBox({ isChecked, handleCheckboxChange }) {
    const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    return (
        <div className='mb-5'>
            {daysOfTheWeek.map(day => (
                <div key={day} className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name={day}
                        checked={isChecked[day]}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor={day} className="form-check-label">
                        {day}
                    </label>
                </div>
            ))}
        </div>
    );
}
