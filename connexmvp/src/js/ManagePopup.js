import React from "react";
import "../css/ManagePopup.css";
import Toggle from "./Toggle";

function displayData(handleClose, data) {
    console.log(data)
    handleClose()
}

const ManagePopup = ({handleClose, data}) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                <div className="title">Manage Columns</div>
                <div>
                    {data.map((item) => <Toggle label={item.heading} data={data}/>)}
                </div>
                <button onClick={() => displayData(handleClose, data)}>
                    save changes
                </button>
            </div>
        </div>
    );
}
 
export default ManagePopup;