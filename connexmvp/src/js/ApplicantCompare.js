import "../css/ApplicantList.css";
import TableRotated from './TableRotated';
import { useState } from "react";
import ManagePopup from "./ManagePopup";
import ExportPopup from "./ExportPopup";

const ApplicantList = ({ applicants }) => {

  // maps the name to its values
  const [column, setColumn] = useState([
    { heading: 'Name', value: 'name', display: true, key: 1},
    { heading: 'Major', value: 'major', display: true, key: 2},
    { heading: 'Year', value: 'year', display: true, key: 3}
  ])

  // Contains information to show the Manage Columns Popup
  const [manageOpen, setManageOpen] = useState(false);
  const toggleManage = () => {
    setManageOpen(!manageOpen);
  }

  // Contains information to show the Export Columns Popup
  const [exportOpen, setExportOpen] = useState(false);
  const toggleExport = () => {
    setExportOpen(!exportOpen);
  }

  return (
    <div className="applicant-list">
      <div className="above">
        <div className="tableButtons">
          <button className="manage" onClick={toggleManage}>
            Manage Rows
          </button>
        </div>
        <button className="export" onClick={toggleExport}>
            Export Files
        </button>
      </div>
      <TableRotated data={applicants} column={column} />
      {/* Holds the popups */}
      {manageOpen && <ManagePopup handleClose={toggleManage} data={column}/>}
      {exportOpen && <ExportPopup handleClose={toggleExport}/>}
    </div>
  );
}
 
export default ApplicantList;