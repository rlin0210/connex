import { Link } from 'react-router-dom';
import React from 'react';

const ApplicationList = ({ applications }) => {
  return (
    <div className="application-list">
      {applications.map(application => (
        <div className="application-preview" key={application.id} >
          <Link to={`/applications/${application.id}`}>
            <h2>{ application.firstName } { application.lastName }</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ApplicationList;