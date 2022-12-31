import ApplicantList from "./ApplicantList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: applicants } = useFetch('http://localhost:8000/applicants')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { applicants && <ApplicantList applicants={applicants} /> }
    </div>
  );
}
 
export default Home;
