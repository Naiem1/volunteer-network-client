import React, { useContext, useState } from 'react';
import './Registration.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import logo from '../../logos/Group1329.png'
import { UserContext } from '../../App';
import fakeData from '../../fakeData.json';

const Registration = () => {
  const { id } = useParams()

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [input, setInput] = useState({
    date: '',
    description: ''
  });


  const eventData = fakeData.find(data => data.id == id);
  const eventTitle = eventData.title;
  const eventImg = eventData.img;
  
  console.log(eventImg);
  sessionStorage.setItem('title', eventTitle);
  const history = useHistory();

  const handleClick = (e) => {
    if (input.date) {
      history.push('/events');
    const event = {eventTitle,...loggedInUser, ...input, eventImg}
    fetch("https://whispering-caverns-47572.herokuapp.com/addEvent", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    })
   }

    e.preventDefault();
  }

  const handleBlur = (e) => {
    if (e.target.name == 'date') {
      const date = e.target.value;
      const newInput = { ...input };
      newInput.date = date;
      setInput(newInput);
    }
    if (e.target.name == 'description') {
      const description = e.target.value;
      const newInput = { ...input };
      newInput.description = description;
      setInput(newInput);
    }
  }
  


  return (
    <div className="registration" style={{ width: '100%', height: '100vh' }}>
      <div className="logo my-5">
        <Link to="/"><img className="logo__img" src={logo} alt=""/></Link>
      </div>
      <Container className="d-flex justify-content-center " style={{width: '100%', height: '100%'}}>
        <Form action="/addEvent" method="post" className="form__field p-3">
          <h5 className="mt-3 mb-5">Register as a Volunteer</h5>
          <Form.Group className="mt-4" controlId="formGroupEmail">
            <Form.Control type="text" value={loggedInUser.name} placeholder="Full Name" required />
          </Form.Group>
          <Form.Group className="mt-4" controlId="formGroupPassword">
            <Form.Control type="text" value={loggedInUser.email} placeholder="Username or Email" required />
          </Form.Group>
          <Form.Group className="mt-4" controlId="formGroupEmail">
            <Form.Control type="date" name="date" onBlur={handleBlur} placeholder="Date" required />
          </Form.Group>
          <Form.Group className="mt-4" controlId="formGroupPassword">
            <Form.Control type="text" name="description" onBlur={handleBlur} placeholder="Description" required />
          </Form.Group>
          <Form.Group  className="mt-4" controlId="formGroupPassword">
            <Form.Control type="text" value={eventData.title} placeholder="Organize books at the library" required />
          </Form.Group>
          <Button onClick={handleClick} type="submit" className="sub__btn btn-block mt-4">Registration</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Registration;