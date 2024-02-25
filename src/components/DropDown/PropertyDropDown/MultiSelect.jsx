import React, { useEffect, useRef, useState } from 'react';
import { ItemWrapper, StyledPropertySelectWrapper } from './PropertySelect.styles';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const MultiSelect = ({ className, name = '', title = 'Select...', options, placeholder, onChange, isMulti, value }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const closeRef = useRef();

  useEffect(() => {
    if (value?.length) {
      setSelectedOptions(value);
    }
  }, [value]);
  function handleToggleOption(option) {
    if (isMulti) {
      const isSelected = selectedOptions.some(selected => selected.value === option.value);
      if (isSelected) {
        setSelectedOptions(selectedOptions.filter(selected => selected.value !== option.value));
        onChange({
          target: { label: name, value: selectedOptions.filter(selected => selected.value !== option.value) },
        });
      } else {
        setSelectedOptions([...selectedOptions, option]);
        onChange({ target: { label: name, value: [...selectedOptions, option] } });
      }
    } else {
      setSelectedOptions([option]);
      setDropDown(false);
    }
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
        {selectedOptions.length > 0 ? (
          <span>{selectedOptions.map(option => option.label).join(', ')}</span>
        ) : (
          <span>{title}</span>
        )}
        <div className="iconWrap">
          <MdOutlineKeyboardArrowDown size="22" color="var(--gray-400)" />
        </div>
      </div>
      <ItemWrapper $height={dropDown}>
        {options?.map((option, index) => (
          <li key={index} onClick={() => handleToggleOption(option)}>
            {option.label}
          </li>
        ))}
      </ItemWrapper>
    </StyledPropertySelectWrapper>
  );
};

export default MultiSelect;
