import React, { useState } from 'react';
import Header from '../Header/Header';
import fakeData from '../../fakeData.json';
import Infocards from '../Infocards/Infocards';
import './Home.css'
import { Container, FormControl, InputGroup } from 'react-bootstrap';
// import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {

  const [dataInfo, setDataInfo] = useState(fakeData);
  console.log(dataInfo);
  return (
    <div className="home" style={{ width: '100%'}}>
      <h3 className="text-uppercase text-center mb-5 font-weight home__title">I Grow By Helping People in Need</h3>

      <Container>
          <InputGroup  className="mb-5 w-50 mx-auto">
          <FormControl
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text className="bg-primary text-light" id="basic-addon2">Search</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Container>
  
      <Container className="d-flex m-auto flex-wrap">
        
          {
            dataInfo.map(data => <Infocards key={data.id} data={data}></Infocards>)
          }
         
      </Container>
    </div>
  );
};

export default Home;