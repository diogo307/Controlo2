import { useEffect, useState } from "react"

// components
import ControlDetails from "../components/ControlDetails"
import '../styles/ControlTable.css'; // Adjust the path according to your file structure

const Control = () => {
  const [controls, setControls] = useState(null)

  useEffect (() => {
    const fetchControls = async () => {
      const response = await fetch('/api/controls')
      const json = await response.json()

      if (response.ok) {
        setControls(json)
      }

    }
    fetchControls()
  }, [])

  return (
    <div className="control">
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          {controls && controls.map((control) => (
            <tr key={control._id}>
              <ControlDetails control={control} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
  
export default Control