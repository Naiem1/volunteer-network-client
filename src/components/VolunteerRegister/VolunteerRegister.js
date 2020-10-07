import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const VolunteerRegister = (props) => {
  const { name, email, date, eventTitle, _id } = props.eventsData;

  const deleteEvent = (id) => {
    fetch(`https://whispering-caverns-47572.herokuapp.com/deleteall/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        props.updatePage();
    })
  }
  return (
    <div>
    
      <Table>
      <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{eventTitle}</td>
      <td><button className="btn btn-info"  onClick={() => deleteEvent(`${_id}`)}>Delete</button></td>
      </tr>
      </Table>
     
      
  
    </div>
  );
};

export default VolunteerRegister;