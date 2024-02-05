import React from 'react';
import { RecentSearch } from './Suggestion.styles';
const location = [
  'New York ,US',
  'New York State, US',
  'New York Harbor, US',
  'New York Square, US',
  'New Yorvikk Square, Uk',
  'New York Temple, Japan',
  'New York State, US',
  'New York Harbor, US',
  'New York Square, US',
];
import { PiMapPinBold } from 'react-icons/pi';

const Suggestion = ({ onChange, setOpen }) => {
  return (
    <RecentSearch onClick={e => e.stopPropagation()}>
      <div className="title">
        <p>Previous searches</p>
        <ul>
          {location.map((elem, ind) => (
            <li
              key={ind}
              onClick={e => {
                setOpen(false);
                e.stopPropagation();
                onChange(elem);
              }}>
              <PiMapPinBold size="20" />

              {elem}
            </li>
          ))}
        </ul>
      </div>
    </RecentSearch>
  );
};

export default Suggestion;
