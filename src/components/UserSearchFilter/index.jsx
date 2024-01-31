import React, { useEffect, useRef, useState } from "react";
import {
  FilterHeader,
  FilterOption,
  FilterOptionDetail,
  FilterOptionPropertyDetail,
  FilterOptionWrapper,
  UserFilterStyle,
} from "./UserSearchFilter.styles";
import { IoMdClose } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import ToggleSwitch from "./ToggleSwitch";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";
import Input from "../TextField";
import Button from "../Button";
import Select from "../DropDown/PropertyDropDown";
import { MaxSize, MinSize, YearFrom, YearTo } from "../Constants";

const detail = [
  {
    title: "Home Type",
    propertyType: [
      { type: "Home", qty: 150 },
      { type: "Townhouse", qty: 120 },
      { type: "Condo", qty: 45 },
      { type: "Multi - Family", qty: 6 },
      { type: "Land", qty: 75 },
      { type: "Panthouse", qty: 75 },
    ],
  },
  {
    title: "Beds",
    propertyType: [
      { type: "Any", qty: 150 },
      { type: "1+", qty: 120 },
      { type: "2+", qty: 45 },
      { type: "3+", qty: 6 },
      { type: "4+", qty: 75 },
      { type: "5+", qty: 75 },
    ],
  },
  {
    title: "Baths",
    propertyType: [
      { type: "Any", qty: 150 },
      { type: "1+", qty: 120 },
      { type: "2+", qty: 45 },
      { type: "3+", qty: 6 },
      { type: "4+", qty: 75 },
      { type: "5+", qty: 75 },
    ],
  },
];
const status = [
  {
    title: "Status",
    propertyType: [
      { type: "Available", qty: 150 },
      { type: "Pending", qty: 120 },
      { type: "Closed", qty: 45 },
    ],
  },
];

const UserSearchFilter = ({ setPopUp, width }) => {
  const [indValue, setIndValue] = useState(null);
  const [indValueTwo, setIndValueTwo] = useState(null);
  const [rangeValue, setRangeValue] = useState([250, 500]);
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
  const handleTipFormatter = (value) => {
    return <span className="tooltip">${value}k</span>;
  };
  const handleRangeChange = (val) => {
    setRangeValue(val);
  };
  const ref = useRef();
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setPopUp(false);
    }
  };
  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <UserFilterStyle $width={width} ref={ref}>
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
        <FilterOptionWrapper>
          <div className="price">
            <span>Price Range</span>
            <div className="priceWrapper">
              <span>
                Min:<span translate="no">${rangeValue[0]}</span>k
              </span>
              <span>
                Max :<span translate="no">${rangeValue[1]}</span>k
              </span>
            </div>
            <Slider.Range
              min={250}
              max={1000}
              value={rangeValue}
              onChange={handleRangeChange}
              tipFormatter={handleTipFormatter}
              className="rc-slide-customization"
              // tipProps={{
              //   placement: "bottom",
              //   visible: false,
              //   overlayClassName: "slider-tooltip",
              // }}
              // handle={(props) => {
              //   return (
              //     <Tooltip
              //       overlay={handleTipFormatter(props.value)}
              //       placement="bottom"
              //       key={props.index}
              //     >
              //       <Slider.Handle value={props.value} {...props} />
              //     </Tooltip>
              //   );
              // }}
            />
          </div>
          <div className="dropDown">
            <Input type="text" placeholder="Min Price" />
            <Input type="text" placeholder="Max Price" />
          </div>
        </FilterOptionWrapper>
        {detail.map((elem, ind) => (
          <FilterOptionWrapper key={ind}>
            <div className="title" onClick={() => handelIndexValue(ind)}>
              <span>{elem.title}</span>
              <div className="icon">
                {indValue == ind ? (
                  <AiOutlineMinus size="20" />
                ) : (
                  <BiPlus size="20" />
                )}
              </div>
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
        <div className="requirement">
          <span>Must Have Garage</span>
          <ToggleSwitch />
        </div>
        {status.map((elem, ind) => (
          <FilterOptionWrapper key={ind}>
            <div className="title" onClick={() => handelIndexValue(5)}>
              <span>{elem.title}</span>
              <div className="icon">
                {indValue == 5 ? (
                  <AiOutlineMinus size="20" />
                ) : (
                  <BiPlus size="20" />
                )}
              </div>
            </div>
            <FilterOptionDetail $height={indValue == 5 ? true : false}>
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
        <FilterOptionWrapper>
          <div className="title" onClick={() => handelIndexValue(6)}>
            <span>Property Details</span>
            <div className="icon">
              {indValue == 6 ? (
                <AiOutlineMinus size="20" />
              ) : (
                <BiPlus size="20" />
              )}
            </div>
          </div>
          <FilterOptionPropertyDetail $height={indValue == 6 ? true : false}>
            <li>
              <span className="span">Size</span>

              <div className="dropDown">
                <Select
                  title="No min"
                  onChange={(val) => console.log(val, "val")}
                  option={MinSize}
                />
                <Select
                  title="No max"
                  onChange={(val) => console.log(val, "val")}
                  option={MaxSize}
                />
              </div>
            </li>
            <li>
              <span className="span">Lot Size (Sq.Ft)</span>

              <div className="dropDown">
                <Select
                  title="No min"
                  onChange={(val) => console.log(val, "val")}
                  option={MinSize}
                />
                <Select
                  option={MaxSize}
                  title="No max"
                  onChange={(val) => console.log(val, "val")}
                />
              </div>
            </li>
            <li>
              <span className="span">Year Built</span>
              <div className="dropDown">
                <Select
                  option={YearFrom}
                  title="From"
                  onChange={(val) => console.log(val, "val")}
                />
                <Select
                  option={YearTo}
                  title="To"
                  onChange={(val) => console.log(val, "val")}
                />
              </div>
            </li>
          </FilterOptionPropertyDetail>
        </FilterOptionWrapper>
        <Button variant="danger">Reset</Button>
      </FilterOption>
    </UserFilterStyle>
  );
};

export default UserSearchFilter;
