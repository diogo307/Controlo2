import React, { useEffect, useState } from 'react';
import '../styles/ControlTable.css'; // Adjust the path according to your file structure

const ControlDetails = ({ control }) => {
  const [identity, setIdentity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIdentity = async (serialNumber) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/identities/' + serialNumber);
      const json = await response.json();
      if (response.ok) {
        setIdentity(json);
      } else {
        console.error('Failed to fetch identity:', json);
      }
    } catch (error) {
      console.error('Error fetching identity:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIdentity(control.serialNumber);
  }, [control.serialNumber]); // Dependency array ensures this runs only when serialNumber changes

  return (
    <>
      <td>{control.serialNumber}</td>
      <td>
        {isLoading ? 'Loading...' : identity ? identity.name : 'No data'}
      </td>
      <td>{control.dateTime}</td>
    </>
  );

};
export default ControlDetails;
