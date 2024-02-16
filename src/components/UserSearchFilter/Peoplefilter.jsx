import React, { useEffect, useRef, useState } from 'react';
import {
  FilterHeader,
  FilterOption,
  FilterOptionDetail,
  FilterOptionWrapper,
  UserFilterStyle,
} from './PeopleSearchFilter.styles';
import { IoMdClose } from 'react-icons/io';
import { BiPlus } from 'react-icons/bi';
import { AiOutlineMinus } from 'react-icons/ai';
import ToggleSwitch from './ToggleSwitch';
import Button from '../Button';
const detail = [
  {
    title: 'People',
    propertyType: [
      { type: 'Relator', qty: 150 },
      { type: 'Real Estate Agent', qty: 120 },
      { type: 'Mortgage Loan Officer', qty: 45 },
      { type: 'Staging Company', qty: 6 },
      { type: 'Photographer', qty: 75 },
      { type: 'contractor', qty: 75 },
      { type: 'Handyman', qty: 75 },
    ],
  },
];
const language = [
  {
    title: 'Language',
    propertyType: [
      { type: 'Spanish', qty: 150 },
      { type: 'Chinese', qty: 120 },
      { type: 'Hindi', qty: 45 },
      { type: 'Tagalog', qty: 6 },
      { type: 'Vietnamese', qty: 75 },
      { type: 'Arabic', qty: 75 },
      { type: 'Korean', qty: 75 },
    ],
  },
];

const PeopleFilter = ({ setPopUp }) => {
  const [indValue, setIndValue] = useState(null);
  const [indValueTwo, setIndValueTwo] = useState(null);
  function handelIndexValue(ind) {
    if (ind == indValue) {
      setIndValue(null);
    } else {
      setIndValue(ind);
    }
  }
  function handelIndexValueTwo(ind) {
    if (ind == indValueTwo) {
      setIndValueTwo(null);
    } else {
      setIndValueTwo(ind);
    }
  }
  const ref = useRef();
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setPopUp(false);
    }
  };
  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <UserFilterStyle ref={ref}>
      <FilterHeader>
        <div className="closer" onClick={() => setPopUp(false)}>
          <IoMdClose size={20} />
        </div>
        <p>Preferences</p>
        <Button variant="primary" width="80px">
          Apply
        </Button>
      </FilterHeader>
      <FilterOption>
        <FilterOptionWrapper></FilterOptionWrapper>
        {detail.map((elem, ind) => (
          <FilterOptionWrapper key={ind}>
            <div className="title" onClick={() => handelIndexValue(ind)}>
              <span>{elem.title}</span>
              {/* <div className="icon">
                {indValue == ind ? (
                  <AiOutlineMinus size="20" />
                ) : (
                  <BiPlus size="20" />
                )}
              </div> */}
            </div>
            <FilterOptionDetail $height={indValue == ind ? true : false}>
              {elem.propertyType.map((item, index) => (
                <li key={index}>
                  <span className="customCheckbox">
                    <input type="checkbox" id={item.type} />
                    <label htmlFor={item.type}>{item.type}</label>
                  </span>
                  <span className="qty">{item.qty}</span>
                </li>
              ))}
            </FilterOptionDetail>
          </FilterOptionWrapper>
        ))}
        {/* <div className="requirement">
          <span>Must Have Garage</span>
          <ToggleSwitch />
        </div> */}
        {language.map((elem, ind) => (
          <>
            <FilterOptionWrapper key={ind}>
              <div className="title" onClick={() => handelIndexValueTwo(ind)}>
                <span>{elem.title}</span>
                {/* <div className="icon">
                {indValueTwo == ind ? (
                  <AiOutlineMinus size="20" />
                ) : (
                  <BiPlus size="20" />
                )}
              </div> */}
              </div>
              <FilterOptionDetail $height={indValueTwo == ind ? true : false}>
                {elem.propertyType.map((item, index) => (
                  <li key={index}>
                    <span className="customCheckbox">
                      <input type="checkbox" id={item.type} />
                      <label htmlFor={item.type}>{item.type}</label>
                    </span>
                    <span className="qty">{item.qty}</span>
                  </li>
                ))}
              </FilterOptionDetail>
            </FilterOptionWrapper>
            <Button variant="danger">Reset</Button>
          </>
        ))}
      </FilterOption>
    </UserFilterStyle>
  );
};

export default PeopleFilter;
