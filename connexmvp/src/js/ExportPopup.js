import React from 'react';
import { useState, useEffect } from 'react';
import "../css/ManagePopup.css";
import { CSVLink } from 'react-csv';
const axios = require('axios');
  
const ExportPopup = (props, {handleClose, column, applicants}) => {
   const fileName = "ConnexData";
   const [userData, setUserData] = useState([]);
   const [loading, setLoading] = useState(false);

   const headings = [
    {label: "ID", key: "id"},
    {label: "First Name", key: "firstName"},
    {label: "Last Name", key: "lastName"},
    {label: "Name", key: "name"},
    {label: "Major", key: "major"},
    {label: "Year", key: "year"},
    {label: "Essay1", key: "essay1"},
    {label: "Essay2", key: "essay2"}
   ]

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        setLoading(true);
        axios.get('http://localhost:8000/applicants')
            .then((res) => {
                setUserData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("Error: ", err);
                setLoading(false);
            })
    }
    console.log(userData);

   return ( 
   <div className="popup-box">
    <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="title">Export Data</div>
        <div className="CSV Link"> 
        <button>
            <CSVLink> headers={headings}
                    data={userData}
                    filename={fileName}</CSVLink>
            Click me to Download</button>
        </div>
    </div>
    
    
</div>
    );
}

 
export default ExportPopup;
