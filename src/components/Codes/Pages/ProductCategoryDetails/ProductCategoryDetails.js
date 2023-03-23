import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsFillCartCheckFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';

const ProductCategoryDetails = () => {

    const gettingData = useLoaderData()
    // console.log('data', gettingData);

    const [getData, setGetData] = useState()


console.log('data', getData);
        // Make a request for data with a given ID


        useEffect(() => {
            axios
              .get(`http://localhost:5000/products/${gettingData[0]?.category}`)
              .then((data) => {
                if (data.data !== undefined) {
                  console.log(data.data);
                  setGetData(data.data);
                }
              });
          }, [gettingData[0]?.category]);



    return (
               
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {
                getData?.map((data) => 
                <div className="card h-[600px] border border-gray-300 mx-5 group bg-base-100 shadow-xl">
                <img className='w-full h-80' src={data?.image} alt="img" />
                <div className="card-body">

                
                <h2 className="card-title">{data?.title}</h2>
                <p className='font-semibold text-fuchsia-500 text-2xl text-end'>( ${data?.resalePrice} )</p>
                
                <p className='text-start'> <span className='font-semibold'>Category:</span> {data?.category}</p>
                <p className='border p-2'>{data?.description}</p>
                
                <div className="card-actions justify-end">
                <button  className='flex  bg-fuchsia-500 hover:bg-green-500 border-0 btn'> <span className='w-auto my-auto mx-2'><BsFillCartCheckFill/></span> <span>Buy Now</span></button>
                <button  className='flex  bg-violet-500 hover:bg-green-500 border-0 btn'><span className='w-auto my-auto mx-2'><BsFillSuitHeartFill/></span> <span>Add to wish</span></button>
              </div>
            </div>
            </div>
                )}
        </div>
    );
};

export default ProductCategoryDetails;