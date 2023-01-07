import ApplicantCompare from "./ApplicantCompare";
import useFetch from "./useFetch";

const Compare = () => {
  const { error, isPending, data: applicants } = useFetch('http://localhost:8000/applicants')

  return (
    <div className="compare">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { applicants && <ApplicantCompare applicants={applicants} /> }
    </div>
  );
}
 
export default Compare;
