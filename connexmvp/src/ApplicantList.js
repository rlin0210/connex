import "./ApplicantList.css";
import Table from './Table';

const ApplicantList = ({ applicants }) => {

  // maps the name to its values
  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Major', value: 'major' },
    { heading: 'Year', value: 'year' }
  ]

  return (
    <div className="applicant-list">
      <div className="above">
        <div className="tableButtons">
          <div className="filter">

          </div>
          <div className="manage">

          </div>
        </div>
        <div className="export">

        </div>
      </div>
      <Table data={applicants} column={column} />
    </div>
  );
}
 
export default ApplicantList;