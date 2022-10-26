import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const DetailsPage = () => {
    const detailsData = useLoaderData()
    console.log(detailsData);
    const {details,img,name,registered}=detailsData;

    return (
        <div className='mx-auto' >
          <div className=''>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </div>
           
    
   </div>
    );
};

export default DetailsPage;