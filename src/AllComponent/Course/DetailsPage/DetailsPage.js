import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DetailsPage = () => {
    const datas = useLoaderData()
    console.log(datas);
    return (
        <div>
            {datas.map(data=><></>)}
        </div>
    );
};

export default DetailsPage;