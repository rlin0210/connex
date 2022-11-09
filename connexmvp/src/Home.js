import ApplicationList from "./ApplicationList";
import useFetch from "./useFetch";
import React from 'react';

const Home = () => {
  const {data: applications, isPending, error} = useFetch("http://localhost:8000/applications");


  return (
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div> }
      { applications && <ApplicationList applications={applications} title="Applications"/>}
    </div>
  );
}
 
export default Home;