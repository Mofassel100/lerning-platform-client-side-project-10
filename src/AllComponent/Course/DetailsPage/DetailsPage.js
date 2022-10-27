import React from 'react';
import {  Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Details.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UseContext';


const DetailsPage = () => {
    const detailsData = useLoaderData()


    const {details,img,name,registered,id}=detailsData;
const {setData}= useContext(AuthContext)




    return (
        <div className='mx-auto' >
          <div className='div-container w-75 mx-auto'>
          <Card className='card-container rounded ' style={{ width: '' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body className='d-color'>
        <Card.Title className='titles'>{name}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Card.Text className='times'>
         {registered}
        </Card.Text>

        <Button variant="primary"><Link to={`/primium/${id}`} ><button className='bg-primary  text-white'>Premium access</button></Link></Button>
      </Card.Body>
    </Card>
          </div>
           
    
   </div>
    );
};

export default DetailsPage;