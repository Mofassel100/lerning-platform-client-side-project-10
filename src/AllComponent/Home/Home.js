import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
    return (
        <div className='home-css'>
              <div>
                <p className=''>
                    <img src='https://media.istockphoto.com/vectors/web-development-vector-id960530082?k=20&m=960530082&s=612x612&w=0&h=hkYLgbdWyLuU0YjWBOU2EH4BsA5D0bJbj1w3k776iLY='/>
                    
                </p>
                <h1><Link to='/course'>click Visit Courses</Link></h1>
                
              </div>
        </div>
      
    );
};

export default Home;