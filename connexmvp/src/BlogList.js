import { Link } from 'react-router-dom';
import "./BlogList.css";
import Table from './Table';



const BlogList = ({ blogs }) => {

  // maps the name to its values
  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Major', value: 'major' },
    { heading: 'Year', value: 'year' }
  ]
  console.log(blogs);
  return (
    <div className="blog-list">
      <Table data={blogs} column={column} />
    </div>
  );
}
 
export default BlogList;