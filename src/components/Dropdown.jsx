import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    //const dropdownRef = useRef(null);



    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        const handleClick = (e) => {
            console.log(e.target);
            console.log("A7A");

        };
        window.addEventListener("click", handleClick);
       /* return () => {
            window.removeEventListener("click", handleClick);
        }*/
    }, []);


    //console.log(dropdownRef.current);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onSelect(option);
        toggleDropdown();
    };

    return (
        <div className="dropdown" >
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption || 'Select an option'}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
