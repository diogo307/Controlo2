import { useEffect, useState } from "react"

// components
import ControlDetails from "../components/ControlDetails"

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
      <div className="controls">
      {controls && controls.map(control => (
          <ControlDetails control={control} key={control._id} />
        ))}
      </div>
    </div>
  )
}
  
export default Control