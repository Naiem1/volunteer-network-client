import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VolunteerRegister from '../VolunteerRegister/VolunteerRegister';
import logo from '../../logos/Group1329.png'

const Admin = () => {

  const [eventsReg, setEventReg] = useState([]);

  const updatePage = () => {
    fetch("https://whispering-caverns-47572.herokuapp.com/allevents")
      .then(res => res.json())
      .then(data => setEventReg(data));
  }

  useEffect(() => {
    updatePage()
  }, [eventsReg])

  
  return (
      <div className="m-5">
      <Container className="d-flex">
      <div className="mr-5">
      <Link to="/"><img style={{width: '150px'}} src={logo} alt=""/></Link>
      <p style={{fontSize: '14px'}} className="mt-3">Volunteer register List</p>
      </div>
      <div className="table">
        <h4 className="pl-2">Volunteer List</h4>
          <Table className="">
            <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Registration Date</th>
              <th>Volunteer List</th>
              <th>Action</th>
            </tr>
            </thead>
            
          </Table>
          {
            eventsReg.map(eventsData => <VolunteerRegister updatePage={updatePage} eventsData={eventsData}></VolunteerRegister>)
          }
      
      </div>
    </Container>
     
      
    </div>
  );
};

export default Admin;