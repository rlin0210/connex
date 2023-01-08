import React from 'react';
import "../css/ManagePopup.css";

  
const ExportPopup = (props, {handleClose, column, applicants}) => {

   function createCSV(){
    let data = props.applicants;
    let csvContent = "ID,First Name,Last Name,Name,Major,Year,Essay1,Essay2\n"
    data.forEach(element => {
        console.log(element);
        let row = element.id + "," + element.firstName + "," + element.lastName + "," + element.name + "," + element.major + "," + element.year  + "," + element.essay1  + "," + element.essay2 + "," + element.id + "\n"
        csvContent += row;
    });
    var saveThis = new Blob([csvContent], {type: 'text/csv'});
    console.log(saveThis);
    saveFile(saveThis, "ConnexData.csv")

   }


   function saveFile(blob, fileName){
       const url = window.URL.createObjectURL(blob);
       const a = document.createElement('a');
       a.href = url;
       a.download = fileName;
       a.click();
       setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
       }, 0)
   }
   

   


   return ( 
   <div className="popup-box">
    <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="title">Export Data</div>
        <div className="CSV Link"> 
        <form>
            <button onClick={createCSV()}> Click to Downlaod Data</button>
        </form>
        </div>
    </div>
    
    
</div>
    );
}

 
export default ExportPopup;
