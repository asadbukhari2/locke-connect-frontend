import React from 'react';
import { StyledLanguageDropDown } from './LanguageDropDown.styles';
import Image from 'next/image';
const LanguageDropDown = ({ onClick, data = LanguageData }) => {
  return (
    <StyledLanguageDropDown>
      {data.map((elem, ind) => (
        <li
          key={ind}
          onClick={(e) => {
            // e.stopPropagation();
            onClick(elem);
          }}
        >
          {elem.img && (
            <span className='flag'>
              <Image src={elem.img} alt={elem.language} />
            </span>
          )}
          {elem.language}
        </li>
      ))}
    </StyledLanguageDropDown>
  );
};

export default LanguageDropDown;
