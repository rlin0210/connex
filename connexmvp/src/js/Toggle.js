import React from "react";
import "../css/Toggle.css";
  
function changeColumns(label, data) {
    for (const col of data) {
        if (col.heading === label) {
          col.display = !col.display
          break
        }
    }
}

const Toggle = ( {label, data} ) => {
  return (
    <div className="container">
      <div className="name">
        {label}
      </div>
      <div className="toggle">
        <input type="checkbox" className="checkbox" name={label} id={label} onClick={() => changeColumns(label, data)}/>
        <label className="label" htmlFor={label}>
          <span className="inner"/>
          <span className="switch"/>
        </label>
      </div>
    </div>
  );
};
  
export default Toggle;