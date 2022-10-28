import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Details.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UseContext';
import ReactToPrint, { useReactToPrint } from 'react-to-print'
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { FaPrint } from 'react-icons/fa';


const DetailsPage = () => {
  const detailsData = useLoaderData()
  const { details, img, name, registered, id } = detailsData;
  const { setData } = useContext(AuthContext)
// print information
const PrintRef = useRef()
const handlePagePrints = useReactToPrint({
  content: () =>PrintRef.current,
  documentTitle :'Development',
  onAfterPrint:()=>toast.successf('Print Sucess')
})


  return (
    <div>
      <div className='print'>
       

        <div className='home-css'>
          <div ref={PrintRef} className='mx-auto add' >
            <div  className='div-container w-75 mx-auto'>
              <Card className='card-container rounded ' style={{ width: '' }}>
                <Card.Img style={{height:'400px',
              width:'auto'}} variant="top" className='fluid w-100 h-75' src={img} />
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
        </div>
{/* 
<ReactToPrint trigger={()=><button>Print</button>} content={()=>PrintRef.current}/> */}
<div className='m-2 text-center'>
<FaPrint onClick={handlePagePrints } className='text-red ms-3 '></FaPrint>
<button className='p-2 mb-3 ms-3 text-primary bg-aqua' onClick={handlePagePrints }>Print</button>
</div>


      </div>
    </div>

  );
};

export default DetailsPage;