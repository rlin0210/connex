import React from "react";
import "../css/ManagePopup.css";

const ManagePopup = (props) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                Contains the Manage Column Elements
            </div>
        </div>
    );
}
 
export default ManagePopup;