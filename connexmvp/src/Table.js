import { Link } from 'react-router-dom';
import './Table.css';

const Table = ({ data, column }) => {
    return (
      <table>
        <thead>
          <tr>
            {column.map((item) => <TableHeadItem item={item} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => <TableRow item={item} column={column} />)}
        </tbody>
      </table>
    )
  }
  
  const TableHeadItem = ({ item }) => <th>{item.heading}</th>
  const TableRow = ({ item, column }) => (
    <tr className='applicant'>
      {column.map((columnItem) => {
        console.log(columnItem)
        // Checks for name and if it is then it makes it the link
        if(columnItem.heading == 'Name') {
            return <td><Link to={`/blogs/${item.id}`}>{item[`${columnItem.value}`]}</Link></td>
        }
        return <td>{item[`${columnItem.value}`]}</td>
      })}
    </tr>
  )
  
  export default Table