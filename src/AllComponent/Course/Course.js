import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LefSideData from './LefSide/LefSideData';
import HomePage from './HomePage/HomePage';
import { useLoaderData } from 'react-router-dom';
const Course = () => {
  const datas = useLoaderData()
  console.log(datas);
    return (
        <div>

<Container>
      <Row>
        <Col sm={12} lg={3} md={2} ><LefSideData datas={datas}></LefSideData></Col>
        <Col  sm={12} lg={9} md={10}><HomePage datas={datas}></HomePage></Col>
      </Row>   
    </Container>
        </div>
    );
};

export default Course;