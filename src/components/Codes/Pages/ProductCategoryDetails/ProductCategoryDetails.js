import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillCartCheckFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ProductCategoryDetails = () => {

  const {user, logUser} = useContext(AuthContext)


  const time = String(new Date()).slice(8, 21);


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








          const handleWishList = (id) => {
            alert(id)

            fetch(`http://localhost:5000/productById/${id}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                
        
                // const wishData = {
                //   author: data?.author,
                //   authorEmail: data?.email,
                //   productImage: data?.image,
                //   authorLocation: data?.location,
                //   originalPrice: data?.originalPrice,
                //   resalePrice: data?.resalePrice,
                //   postedTime: data?.time,
                //   productTitle: data?.title,
                //   yearOfPurchase: data?.yearOfPurchase,
                //   yearsOfUse: data?.yearsOfUse,
                //   category: data?.category,
                //   description: data?.description,
                //   email: user?.email,
                //   wishTime: time,
                //   wisher: logUser?.role,
                // };


        
                // if (data) {
                //   fetch('http://localhost:5000/wishLists', {
                //     method: 'POST',
                //     headers: {
                //       'content-type': 'application/json',
                //     },
                //     body: JSON.stringify(wishData),
                //   })
                //     .then((res) => res.json())
                //     .then((ad) => {
                //       // console.log(ad);
                //       toast.success('You are successfully added your new wishing product');
                //     });
                // }
              });
          };












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
                <button onClick={() => handleWishList(data?._id)}  className='flex  bg-violet-500 hover:bg-green-500 border-0 btn'><span className='w-auto my-auto mx-2'><BsFillSuitHeartFill/></span> <span>Add to wish</span></button>
              </div>
            </div>
            </div>
                )}
        </div>
    );
};

export default ProductCategoryDetails;