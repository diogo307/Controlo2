// date fns
//import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ControlDetails = ({ control }) => {

    return (
      <div className="control-details">
        <p><strong>Serial Number </strong>{control.serialNumber}</p>
        <p><strong>Date and Time: </strong>{control.dateTime}</p>
        {/*<p>{formatDistanceToNow(new Date(control.createdAt))}</p>*/}
            <p>{control.createdAt}</p>
      </div>
    )
  }
  
  export default ControlDetails