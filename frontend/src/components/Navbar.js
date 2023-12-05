import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Control Access</h1>
        </Link>
        <Link to="/identities_dashboard">
          <h1>IdentitiesDashboard</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar