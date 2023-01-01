import React from "react";
import "../css/FilterPopup.css";

const FilterPopup = (props) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                Contains the Filter Column Elements
            </div>
        </div>
    );
}
 
export default FilterPopup;