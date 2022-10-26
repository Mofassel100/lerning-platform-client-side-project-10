import React from 'react';
import { Link } from 'react-router-dom';

const LefSideData = ({datas}) => {
    
    return (
        <div className='lef-side'>
           {datas.map(data=><p><Link to={`/detailspage/${data?.id}`}>{data?.title}</Link></p>)}
        </div>
    );
};

export default LefSideData;