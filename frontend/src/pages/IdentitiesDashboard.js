import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// components
import IdentityDetails from "../components/IdentityDetails"

const IdentitiesDashboard = () => {
  const [identities, setIdentities] = useState(null)
  const navigate = useNavigate();

  useEffect (() => {
    const fetchIdentities = async () => {
      const response = await fetch('/api/identities')
      const json = await response.json()
      if (response.ok) {
        setIdentities(json)
      }
    }
    fetchIdentities()
  }, []);

  const handleAddIdentity = () => {
    // Redirect to '/identities_add' when the button is clicked
    navigate('/identities_add');
  };
  
  return (
    <div className="IdentitiesDashboard">
      <div>
        <button onClick={handleAddIdentity}>Add Identity</button>
      </div>
      <div className="identities">
      {identities && identities.map(identity => (
          <IdentityDetails identity={identity} key={identity._id} />
        ))}
      </div>
    </div>
  )
}
  
export default IdentitiesDashboard