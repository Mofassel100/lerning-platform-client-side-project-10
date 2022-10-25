import React from 'react';
import { Link } from 'react-router-dom';

const LefSideData = ({datas}) => {
    console.log(datas);
    return (
        <div>
           {datas.map(data=><p><Link>{data?.title}</Link></p>)}
        </div>
    );
};

export default LefSideData;