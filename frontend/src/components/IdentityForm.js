/*import { useState } from "react"

const IdentityForm = () => {
    const [serialNumber,setSerialNumber] = useState ('')
    const [name,setName] = useState ('')
    const [email,setEmail] = useState ('')
    const [morada,setMorada] = useState ('')
    const [telemovel,setTelemovel] = useState ('')
    const [error,setError] = useState (null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const identity = {serialNumber, name, email, morada, telemovel}

        const response = await fetch ('/api/identities', {
            method: 'POST',
            body: JSON.stringify(identity),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok){
            setSerialNumber('')
            setName('')
            setEmail('')
            setMorada('')
            setTelemovel('')
            setError(null)
            console.log('New Identity added', json)
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Identity</h3>

            <label>Serial Number</label>
            <input 
                type='text' 
                placeholder='Enter Serial Number...' 
                value={serialNumber} 
                onChange={(e) => setSerialNumber(e.target.value)} 
            />
            <label>Name</label>
            <input 
                type='text' 
                placeholder='Enter Name...' 
                value= {name} 
                onChange={(e) => setName(e.target.value) }
            />
            <label>Email</label>
            <input 
                type='email' 
                placeholder='Enter Email...' 
                value= {email} 
                onChange={(e) => setEmail(e.target.value) }
            />
            <label>Morada</label>
            <input 
                type='text' 
                placeholder='Enter Morada...' 
                value= {morada} 
                onChange={(e) => setMorada(e.target.value) }
            />
            <label>Telemovel</label>
            <input 
                type='text' 
                placeholder='Enter Telemovel...' 
                value= {telemovel} 
                onChange={(e) => setTelemovel(e.target.value) }
            />
            <button> Add Identity </button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default IdentityForm*/