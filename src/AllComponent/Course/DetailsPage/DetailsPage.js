import React from 'react';
import {  useLoaderData } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const DetailsPage = () => {
    const datas = useLoaderData()
    console.log(datas);

    // const {picture,title,about,age}= datas
    return (
        <div>
            <h1>{datas.title}</h1>
            {/* {datas.map(data=><>
            <Link>{data?.title}</Link></>)} */}
             {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
       {about}
        </Card.Text>
        <p>{age}</p>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
        </div>
    );
};

export default DetailsPage;