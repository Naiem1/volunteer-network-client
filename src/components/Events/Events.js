import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import EventsInfo from '../EventsInfo/EventsInfo';


const Events = () => {
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [events, setEvents] = useState([]);

  
  function fetchData () {
    fetch("https://whispering-caverns-47572.herokuapp.com/events?email=" +loggedInUser.email, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => setEvents(data));
  }

  useEffect(() => {
    fetchData();
  }, [events])
  


  return (
    <div className="d-flex flex-wrap justify-content-center m-5">
      
      {
          events.map(event => <EventsInfo fetchData={fetchData()} event={event}></EventsInfo>)

      }
      
    </div>
  );
};

export default Events;