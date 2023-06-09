import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsArrowRightShort, BsFillCartCheckFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AllCategoriesData = () => {


  const {user, logUser} = useContext(AuthContext)



  const navigate = useNavigate()


  const time = String(new Date()).slice(8, 21);



    
  //! FIXME: ----- START ------ FIXME: 
  // By Clicking see all button display all categories data and by clicking close button hidden all categories data


  const [categoryData, setCategoryData] = useState([]);



  const [showAll, setShowAll] = useState(false);

  
  const getCategoryData = async () => {
    const response = await fetch('http://localhost:5000/all/category-data');
    const data = await response.json();
    setCategoryData(data);
  };

  // console.log('all', categoryData);


  const handleShowAllClick = () => {
    setShowAll(true);
    getCategoryData();
  };


  

  const handleCloseClick = () => {
    setShowAll(false);
    setCategoryData([]);
  };





  // FIXME: --------END------ FIXME:














  






  const handleWishList = (id) => {
    // alert(id)

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
        <div>
            <div className="my-10">
      

      {showAll ? (
        
          <div>
           <h1 className='my-5 flex justify-center font-serif text-2xl'>All Categories Data</h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {categoryData?.map((data) => (
                <div className="card h-[600px] hover:border hover:border-gray-400 rounded-none hover:bg-green-50 border border-gray-300 mx-5 group bg-base-100 shadow-xl">
                <img className='w-full h-80' src={data?.image} alt="img" />
                <div className="card-body">
                
                                
                <h2 className="card-title">{data?.title}</h2>
                <p className='font-semibold text-fuchsia-500 text-2xl text-end'>( ${data?.resalePrice} )</p>
                                
                <p className='text-start'> <span className='font-semibold'>Category:</span> {data?.category}</p>
                <p className='border p-2'>{data?.description}</p>
                                
                <div className="card-actions justify-end">
                <button onClick={() => handleOrder(data?._id)}  className='flex  bg-fuchsia-500 hover:bg-green-500 border-0 btn'> <span className='w-auto my-auto mx-2'><BsFillCartCheckFill/></span> <span>Buy Now</span></button>
                <button onClick={() => handleWishList(data?._id)}  className='flex  bg-violet-500 hover:bg-green-500 border-0 btn'><span className='w-auto my-auto mx-2'><BsFillSuitHeartFill/></span> <span>Add to wish</span></button>
               </div>
               </div>
               </div>
              ))}
              </div>
            
            <button className='hover:underline group text-blue-700 text-2xl flex mx-auto w-sm mt-10' title='Hide categories data' onClick={handleCloseClick}>Close <BsArrowRightShort className='group-hover:text-blue-700 text-white mt-2' /> </button>       
          </div>
        ) : (
          <button className='hover:underline group text-blue-700 text-2xl flex mx-auto w-sm mt-10' title='See all categories data' onClick={handleShowAllClick}>See All <BsArrowRightShort className='group-hover:text-blue-700 text-white mt-2' /> </button>
        )}
  
  
  
      </div>
        </div>
    );
};

export default AllCategoriesData;