import React from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import "../css/ManagePopup.css";
  
const ExportPopup = ({data, column}) => {

    const csvFile = {
        filename: "File.csv",
        headers : column.heading,
        data : column.value
    };

    return (
        <div className="popup-box">
            <div className="box">
                
                <CSVLink {...csvFile}> Click to Download CSV</CSVLink>
            </div>
        </div>
    );
}

 
export default ExportPopup;