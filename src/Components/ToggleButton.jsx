/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ToggleButton.css";

export default function ToggleButton({ toggleTheme }) {
  const [checkedValue, setCheckedValue] = useState(false);


  const handleChange = () => {
    setCheckedValue((prev) => !prev);
    toggleTheme();
  };

  return (
    <div>
      <label className="switch" >
        <input type="checkbox" checked={checkedValue}  onChange={handleChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
