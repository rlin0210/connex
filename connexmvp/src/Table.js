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
    <tr>
      <Link to={`/blogs/${item.id}`}>
        {column.map((columnItem) => {
          console.log(columnItem)
          return <td>{item[`${columnItem.value}`]}</td>
        })}
      </Link>
    </tr>
  )
  
  export default Table