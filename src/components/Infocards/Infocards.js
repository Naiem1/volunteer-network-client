import React from 'react';
import { Link } from 'react-router-dom';
import './Infocards.css';

const Infocards = (props) => {
  const { title, id, img } = props.data;
  console.log(img);
  
  return (  
      
    
    <div className="infocards">
      <Link to={"/registration/" + id}>
        <div className="img__box">
          <img src={img} alt=""/>
        </div>
        <div className="title__box">
          <h6>{title}</h6>
          </div>
      </Link>
    </div>
  );
};

export default Infocards;