import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const PrimiumAccess = () => {
   
    const data = useLoaderData()
    console.log(data);
    const {auth,price,time,name}= data;
    return (
        <div className='home-css  my-5 py-3'>
 <Card className=' bg-burlywood ' style={{ width: '27rem' }}>
      <Card.Body>
        <Card.Title className='titles'>{name}</Card.Title>
        <Card.Subtitle className="mb-2 ">Total Price : {price}</Card.Subtitle>
        <Card.Text>
      Courese Time : {time}
        </Card.Text>
        <Card.Text>
      Course Auth : {auth}
        </Card.Text>

      
      </Card.Body>
      </Card>
        </div>
       
    );
};

export default PrimiumAccess;