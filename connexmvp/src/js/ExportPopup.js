import React from "react";
import "../css/ManagePopup.css";

const ExportPopup = (props) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                Contains the Export Column Elements
            </div>
        </div>
    );
}
 
export default ExportPopup;