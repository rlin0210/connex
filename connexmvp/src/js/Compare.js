import ApplicantCompare from "./ApplicantCompare";
// import useFetch from "./useFetch";
import data from "../data/db.json";

const Compare = () => {
  // const { error, isPending, data: applicants } = useFetch('http://localhost:8000/applicants')

  return (
    <div className="compare">
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } */}
      { data.applicants && <ApplicantCompare applicants={data.applicants} /> }
    </div>
  );
}
 
export default Compare;
