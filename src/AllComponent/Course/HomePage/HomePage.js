import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomePage = ({datas}) => {

    return (
        <div className='homepage-container'>
         {datas.map(data=><>key={data?.id}
            <Card className='homepage-container'>
            <Card.Body>
          <Card.Text>
           {data?.title}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={data?.picture}/>
        <Link to={`/detailspage/${data?.id}`}><button>Details</button></Link>


        </Card>
        </>)}
        </div>
    );
};

export default HomePage;