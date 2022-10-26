import React from 'react';
import {  Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Details.css'


const DetailsPage = () => {
    const detailsData = useLoaderData()
    console.log(detailsData);
    const {details,img,name,registered}=detailsData;

    return (
        <div className='mx-auto' >
          <div className='div-container w-75'>
          <Card className='card-container ' style={{ width: '' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='titles'>{name}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Card.Text className='times'>
         {registered}
        </Card.Text>

        <Button variant="primary"><Link><button className='bg-primary text-white'>Premium access</button></Link></Button>
      </Card.Body>
    </Card>
          </div>
           
    
   </div>
    );
};

export default DetailsPage;