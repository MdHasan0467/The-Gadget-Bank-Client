import React, { useState } from 'react';
import { BsFillCartCheckFill, BsFillSuitHeartFill } from 'react-icons/bs';

const AllCategoriesData = () => {
    
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
    return (
        <div>
            <div className="mt-10">
      

      {showAll ? (
        
          <div>
           <h1 className='my-5 flex justify-center font-serif text-2xl'>All Categories Data</h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {categoryData?.map((data) => (
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
              ))}
              </div>
            
            <button className='btn btn-primary hidden md:block mx-auto w-sm mt-10' title='Hide categories data' onClick={handleCloseClick}>Close</button>  
          </div>
        ) : (
          <button className='btn btn-primary hidden md:block mx-auto w-sm mt-10' title='See all categories data' onClick={handleShowAllClick}>See All</button>
        )}
  
  
  
      </div>
        </div>
    );
};

export default AllCategoriesData;