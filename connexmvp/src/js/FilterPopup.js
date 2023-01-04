import React from "react";
import "../css/FilterPopup.css";
import Toggle from "./Toggle";
import { useLayoutEffect } from "react";


const FilterPopup = ({handleClose, column, applicants}) => {

    Array.prototype.alphaSort = function (sortParameter) {
        function compare(a, b) {
            function isNumeric(num){
                return !isNaN(num)
            }

            // convert string to numbers if necessary:
            // http://stackoverflow.com/questions/175739/is-there-a-built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
            var left = (isNumeric(a[sortParameter])) ? +a[sortParameter] : a[sortParameter];
            var right = (isNumeric(b[sortParameter])) ? +b[sortParameter] : b[sortParameter];

            if (left < right)
                return -1;
            if (left > right) 
                return 1;
            return 0;
        }
        this.sort(compare);
    }

    // This will update the data when the correct toggles are selected
    function updateData(handleClose, column, applicants) {
        const titles = column.map(col => col.heading);
        for (var i=0; i<titles.length; i++) {
            const title = titles[i];
            const pageCol = document.getElementById(title);
            const varCol = column.find(element => element.heading === title);
            if (pageCol.checked === varCol.filter) {
                varCol.filter = !varCol.filter;
            }
            if (varCol.filter) {
                applicants.alphaSort(varCol.value);
            }
        }
        handleClose();
    }

     // The function that sets the toggle buttons to the correct states
     function manageToggle() {
        const titles = column.map(col => col.heading);
        for (var i=0; i<titles.length; i++) {
            const title = titles[i];
            const pageCol = document.getElementById(title);
            const varCol = column.find(element => element.heading === title);
            if (varCol.filter === false) {
                pageCol.click();
            }
        }
    }

    // This finds if a toggle button was checked previously and sets it to the correct state
    useLayoutEffect (() => {
        manageToggle()
    })

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                    {column.map((item) => <Toggle label={item.heading} key={item.key}/>)}
                    {/* {data.map((item) =>
                        <div className={item.heading}> 
                            <div className="title">
                                {item.heading}
                            </div>
                            <Toggle label={"A to Z"}/>
                            <Toggle label={"Z to A"}/>
                        </div>
                    )} */}
                <button onClick={() => updateData(handleClose, column, applicants)}>
                    save changes
                </button>
            </div>
        </div>
    );
}
 
export default FilterPopup;