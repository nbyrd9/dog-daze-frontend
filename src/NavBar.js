import {Link} from 'react-router-dom'


export default function NavBar(props) {
  // debugger
  return (
      <>
          <Link to="/dogs">Lists</Link>
          <Link to="/dogs/new">New List</Link>
      </>
  )

}