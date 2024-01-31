import React, { useEffect, useRef, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiMapPinBold } from "react-icons/pi";
import { SearchForm } from "./SearchLocation.styles";
import Suggestion from "../Suggestion";

function SearchLocation({
  open,
  child = (
    <>
      <GiSettingsKnobs size="20" />
    </>
  ),
  handelFilter,
}) {
  const [handelInputDrop, setHandelInputDrop] = useState(false);
  const [location, setLocation] = useState("");
  const InputRef = useRef(null);
  const handleClickOutsideInput = (event) => {
    if (InputRef.current && !InputRef.current.contains(event.target)) {
      setHandelInputDrop(false);
    }
  };
  useEffect(() => {
    // Attach the event listener when the component mounts

    document.addEventListener("mousedown", handleClickOutsideInput);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideInput);
    };
  }, []);
  return (
    <>
      <SearchForm $open={open}>
        <PiMapPinBold className="ico" size="20" />
        <div className="input-search" ref={InputRef}>
          <input
            type="search"
            placeholder="Search Location"
            onClick={() => setHandelInputDrop(true)}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {handelInputDrop && (
            <Suggestion
              onChange={(e) => setLocation(e)}
              setOpen={setHandelInputDrop}
            />
          )}
        </div>
        <button type="button" className="btn-search" onClick={handelFilter}>
          {child}
        </button>
      </SearchForm>
    </>
  );
}

export default SearchLocation;
