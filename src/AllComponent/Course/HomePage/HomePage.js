import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomePage = ({datas}) => {

    return (
        <div className=' my-3'>
         {datas.map(data=><>
            <Card className='homepage'>
            <Card.Body className='bodys'>
          <Card.Text className='text-center text-primary'>
           {data?.title}
          </Card.Text>


        
        <Card.Img variant="bottom" src={data?.picture}/>
        <Card.Text >
          <p className='text-center my-4 '> <Link  className='my-3  ' to={`/detailspage/${data?.id}`}><button className='bg-primary  px-3 py-1 rounded'>Details</button></Link></p>

       
        </Card.Text>
        </Card.Body >

        </Card>
        </>)}
        </div>
    );
};

export default HomePage;