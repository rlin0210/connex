import { Link } from 'react-router-dom';
import "./BlogList.css";
import Table from './Table';



const BlogList = ({ blogs }) => {

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Major', value: 'major' },
    { heading: 'Year', value: 'year' }
  ]
  console.log(blogs);
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.firstName } { blog.lastName }</h2>
            <p>Major: { blog.major }</p>
            <p>Year: { blog.year }</p>
          </Link>
        </div>
      ))}
      <Table data={blogs} column={column} />
    </div>
  );
}
 
export default BlogList;