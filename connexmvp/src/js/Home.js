import ApplicantList from "./ApplicantList";
// import useFetch from "./useFetch";
import applicants from "../data/db.json";

const Home = () => {
  // const { error, isPending, data: applicants } = useFetch('db.json')

  return (
    <div className="home">
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } */}
      { applicants.applicants && <ApplicantList applicants={applicants.applicants} /> }
    </div>
  );
}
 
export default Home;
