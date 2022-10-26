import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
    return (
        <div>
              <div>
                <p className=''>
                    <img src='https://media.istockphoto.com/vectors/web-development-concept-vector-id961274986?s=612x612'/>
                    
                </p>
                <h1><Link to='/course'>Visit Courses</Link></h1>
              </div>
        </div>
      
    );
};

export default Home;