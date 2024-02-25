import React, { useEffect, useRef, useState } from 'react';
import { ItemWrapper, StyledPropertySelectWrapper } from './PropertySelect.styles';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Select = ({ className, title = 'Select...', option, placeholder, onChange,isMulti }) => {
  const [value, setValue] = useState(title);
  const [dropDown, setDropDown] = useState(false);
  const closeRef = useRef();

  function handelChange(elem) {
    setValue(elem);
    setDropDown(!dropDown);
    onChange(elem, title);
  }
  const handleClickOutside = event => {
    if (closeRef.current && !closeRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <StyledPropertySelectWrapper className={className} $icon={dropDown} ref={closeRef} placeholder={placeholder}>
      <div className="textFilter" onClick={() => setDropDown(!dropDown)}>
        {value.label ? <span>{value.label}</span> : <span>{title}</span>}
        <div className="iconWrap">
          <MdOutlineKeyboardArrowDown size="22" color="var(--gray-400)" />
        </div>
      </div>
      <ItemWrapper $height={dropDown}>
        {option?.map((elem, ind) => (
          <li key={ind} onClick={() => handelChange(elem)}>
            {elem.label}
          </li>
        ))}
      </ItemWrapper>
    </StyledPropertySelectWrapper>
  );
};

export default Select;
