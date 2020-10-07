import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './EventsInfo.css';
import fakeData from '../../fakeData.json';

const EventsInfo = (props) => {
  
  const { eventImg, email, eventTitle, date, _id } = props.event;

  const deleteEvent = (id) => {
    fetch(`https://whispering-caverns-47572.herokuapp.com/delete/${id}`, {
      method: 'DELETE'

    })
      .then(res => res.json())
      .then(result => {
        props.fetchData();
    })
  }

  return (
    <div className="eventsInfo">
      <Container>
        <Row>
          <Col className="sm md-6 ">
            <Card className="mt-5" style={{width:"600px"}}>
                <Card.Body className="d-flex">
                <Card.Img variant="top" className="mr-5" style={{maxWidth: '150px', height: '150px'}} src={eventImg} />
                  <div className="ml-4">
                    <Card.Title>{eventTitle}</Card.Title>
                  <Card.Title>{date}</Card.Title>
                  <button onClick={() => deleteEvent(`${_id}`)} className="btn btn-light ml-5 delete__btn">Cancel</button>
                </div>
                </Card.Body>   
            </Card> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventsInfo;