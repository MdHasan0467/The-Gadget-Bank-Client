import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillCartCheckFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ProductCategoryDetails = () => {

  const {user, logUser} = useContext(AuthContext)



  const navigate = useNavigate()


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

            fetch(`http://localhost:5000/product/${id}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                
        
                const wishData = {
                  authorEmail: data?.authorEmail,
                  authorName: data?.authorName,
                  productImage: data?.image,
                  authorLocation: data?.location,
                  originalPrice: data?.originalPrice,
                  resalePrice: data?.resalePrice,
                  postedTime: data?.time,
                  productTitle: data?.title,
                  yearOfPurchase: data?.yearOfPurchase,
                  yearsOfUse: data?.yearsOfUse,
                  category: data?.category,
                  description: data?.description,
                  WisherEmail: user?.email,
                  wishTime: time,
                  wisher: logUser?.role,
                };


        
                if (data) {
                  fetch('http://localhost:5000/wishLists', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify(wishData),
                  })
                    .then((res) => res.json())
                    .then((ad) => {
                      navigate('/dashboard/my-wish-list')
                      toast.success('You are successfully added your new wishing product');
                    });
                }
              });
          };










  
  //! handleOrder

  const handleOrder = (id) => {
    


    //* Make a request for data with a given ID
   
      axios
        .get(`http://localhost:5000/product/${id}`)
        .then((data) => {
          console.log(data)

          if (data.data !== undefined) {
            console.log(data.data);
            // setWishData(data.data);



            const addedOrder = {
              ordererName : user?.displayName,
              ordererEmail: user?.email,
              authorEmail:data?.data?.authorEmail,
              authorName:data?.data?.authorName,
              productImage : data.data.image,
              title : data.data.title,
              resalePrice : data.data.resalePrice,
              category : data.data.category,
              description: data.data.description,
              postedTime : data.data.time,
              yearOfPurchase : data.data.yearOfPurchase,
              yearsOfUse : data.data.yearsOfUse,
              location : data.data.location,
              originalPrice : data.data.originalPrice,
            }




      //* Data post 

      fetch('http://localhost:5000/order-product', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(addedOrder),
      })
        .then((res) => res.json())
        .then((result) => {
          navigate('/dashboard/my-orders')
          toast.success(`Successfully added your new order ${data.data.title}`);
        });
          }
          
        });
   

    
    
        }
  











    return (
               
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mb-5 md:mb-0">
            {
                getData?.map((data) => 
                <div className="card md:h-[600px] border border-gray-300 mx-5 group bg-base-100 shadow-xl">
                <img className='w-full h-80' src={data?.image} alt="img" />
                <div className="card-body">

                
                <h2 className="card-title">{data?.title}</h2>
                <p className='font-semibold text-fuchsia-500 text-2xl text-end'>( ${data?.resalePrice} )</p>
                
                <p className='text-start'> <span className='font-semibold'>Category:</span> {data?.category}</p>
                <p className='border p-2'>{data?.description}</p>
                


                <div className="card-actions justify-end">

                <button onClick={() => handleOrder(data?._id)}  className='flex  bg-fuchsia-500 hover:bg-green-500 border-0 btn w-full md:w-auto '>
                   <span className='w-auto my-auto mx-2'><BsFillCartCheckFill/></span> <span>Buy Now</span>
                </button>

                <button onClick={() => handleWishList(data?._id)}  className='flex  bg-violet-500 hover:bg-green-500 border-0 btn w-full md:w-auto'>
                  <span className='w-auto my-auto mx-2'><BsFillSuitHeartFill/></span> <span>Add to wish</span>
                </button>
              </div>


            </div>
            </div>
                )}
        </div>
    );
};

export default ProductCategoryDetails;