import { useNavigate } from 'react-router-dom'

const IdentityDetails = ({identity}) => {
    const navigate = useNavigate()
    const handleClick = async (e) => {
        e.preventDefault()

        const response = await fetch (`/api/identities/${identity._id}`, {
            method: 'DELETE',
        })
        
        if (response.ok) {
            // Assuming your server returns some data upon successful deletion
            const json = await response.json();
            
            // Navigate to '/identities_dashboard'
            navigate('/');

        }
    }

    return(
        <div className="identity-details">
            <p><strong>Serial Number: </strong>{identity.serialNumber}</p>
            <p><strong>Name: </strong>{identity.name}</p>
            <p><strong>Email: </strong>{identity.email}</p>
            <p><strong>Morada: </strong>{identity.morada}</p>
            <p><strong>Telemovel: </strong>{identity.telemovel}</p>
            {<button onClick={handleClick}>Delete</button>}
        </div>
    )
}

export default IdentityDetails