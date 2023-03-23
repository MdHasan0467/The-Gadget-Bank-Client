import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsArrowRightShort, BsFillCartCheckFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
// import SelectCategory from '../../CategoryDetails/SelectCategory/SelectCategory';

const ProductCategory = () => {




    



  

  // const [getCategory, setGetCategory] = useState()







  const [getCategoryHPLaptop, setGetCategoryHPLaptop] = useState()



  const [getCategoryDellLaptop, setGetCategoryDellLaptop] = useState()




  const [getCategoryLenovoLaptop, setGetCategoryLenovoLaptop] = useState()





  const [getCategorySamsungLaptop, setGetCategorySamsungLaptop] = useState()





  const [getCategoryAsusLaptop, setGetCategoryAsusLaptop] = useState()





  const [getCategoryAppleLaptop, setGetCategoryAppleLaptop] = useState()













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
















        // Make a request for Apple Laptop Category
  
       
          useEffect(() => {
            axios
            .get('http://localhost:5000/category/Apple-Laptop')
            .then((data) => {
              // console.log('Apple',data);
              if (data.data !== undefined) {
                setGetCategoryAppleLaptop(data.data[0]);
              }
              // console.log(data);
            });
                  },[])
           
      
        


  
  
  
  
  
  

  
  
        // Make a request for Asus Laptop Category
  
       
        useEffect(() => {
          axios
          .get('http://localhost:5000/category/Asus-Laptop')
          .then((data) => {
            // console.log('Asus',data);
            if (data.data !== undefined) {
              // console.log(typeof data.data);
              // console.log(data.data);
              setGetCategoryAsusLaptop(data.data[0]);
            }
          });
                },[])
           
      
        


  
  
  
  
  
  

  
  
        // Make a request for Samsung Laptop Category
  
  
          useEffect(() => {
            axios
            .get('http://localhost:5000/category/Samsung-Laptop')
            .then((data) => {
              // console.log('Samsung Laptop',data);
              if (data.data !== undefined) {
                // console.log(typeof data.data);
                // console.log(data.data);
                setGetCategorySamsungLaptop(data.data[0]);
              }
            });
                  },[])
                
  
  
  
  
  
  
           
      
        


  
  
  
  
  
  

  
  
        // Make a request for HP Laptop category
  
       
          useEffect(() => {
            axios
            .get('http://localhost:5000/category/HP-Laptop')
            .then((data) => {
              // console.log('HP Laptop',data);
              if (data.data !== undefined) {
                // console.log(typeof data.data);
                // console.log(data.data);
                setGetCategoryHPLaptop(data.data[0]);
              }
            });
                },[])
           
      
        



      
        

 
        // Make a request for Dell Laptop category
  
       
          useEffect(() => {
            axios
            .get('http://localhost:5000/category/Dell-Laptop')
            .then((data) => {
              // console.log('Dell Laptop',data);
              if (data.data !== undefined) {
                // console.log(typeof data.data);
                // console.log(data.data);
                setGetCategoryDellLaptop(data.data[0]);
              }
            });
                },[])
           
      
        



      
        




 
        // Make a request for Dell Laptop category
  
       
          useEffect(() => {
            axios
            .get('http://localhost:5000/category/Lenovo-Laptop')
            .then((data) => {
              // console.log('Lenovo Laptop',data);
              if (data.data !== undefined) {
                // console.log(typeof data.data);
                // console.log(data.data);
                setGetCategoryLenovoLaptop(data.data[0]);
              }
            });
                },[])
           
      
        



      
        






    return (
        <div>

        <div className="flex justify-between my-5">
        <h2 className='text-2xl text-gray-800 text-start mx-6 my-2'>Products category</h2>
        {/* <SelectCategory /> */}
        </div>
        <div className='blurEffect text-start pb-10'>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            
            

            



           

    


         {/* Desert Category */}     
         {getCategoryDellLaptop?.image && 
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryDellLaptop?.image} alt="Desert" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategoryDellLaptop?.title}</p> <p className = 'text-purple-600'>${getCategoryDellLaptop?.resalePrice}</p></h2>
              <p>Category: {getCategoryDellLaptop?.category}</p>
              <p className='border p-2'>{getCategoryDellLaptop?.description}</p>
              
            <div className="card-actions justify-end">
              <Link to={getCategoryDellLaptop?.category}>
              <button title={`See All ${getCategoryDellLaptop?.category} Laptops`} className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        }
      
    
    

            
         {/* Chinese Category */}     
         {getCategoryAppleLaptop?.image && 
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryAppleLaptop?.image} alt="Chinese" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategoryAppleLaptop?.title}</p> <p className = 'text-purple-600'>${getCategoryAppleLaptop?.resalePrice}</p></h2>
              <p>Category: {getCategoryAppleLaptop?.category}</p>
              <p className='border p-2'>{getCategoryAppleLaptop?.description}</p>
              
            <div className="card-actions justify-end">
              <Link to={getCategoryAppleLaptop?.category}>
              <button title={`See All ${getCategoryAppleLaptop?.category} Laptops`} className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        }
      
    
    

            
         {/* Chicken Category */}
         {getCategoryHPLaptop?.image &&      
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryHPLaptop?.image} alt="Chicken" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategoryHPLaptop?.title}</p> <p className = 'text-purple-600'>${getCategoryHPLaptop?.resalePrice}</p></h2>
              <p>Category: {getCategoryHPLaptop?.category}</p>
              <p className='border p-2'>{getCategoryHPLaptop?.description}</p>
              
            <div className="card-actions justify-end">
              <Link to={getCategoryHPLaptop?.category}>
              <button title={`See All ${getCategoryHPLaptop?.category} Laptops`} className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        }
      
    
    

            
         {/* Rice Category */}      
         {getCategoryAsusLaptop?.image &&
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryAsusLaptop?.image} alt="Rice" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategoryAsusLaptop?.title}</p> <p className = 'text-purple-600'>${getCategoryAsusLaptop?.resalePrice}</p></h2>
              <p>Category: {getCategoryAsusLaptop?.category}</p>
              <p className='border p-2'>{getCategoryAsusLaptop?.description}</p>
             
            <div className="card-actions justify-end">
              <Link to={getCategoryAsusLaptop?.category}>
              <button title={`See All ${getCategoryAsusLaptop?.category} Laptops`} className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        }
      
    
    

            
         {/* Drinks Category */}      
         {getCategorySamsungLaptop?.image &&
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategorySamsungLaptop?.image} alt="Drink" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategorySamsungLaptop?.title}</p> <p className = 'text-purple-600'>${getCategorySamsungLaptop?.resalePrice}</p></h2>
              <p>Category: {getCategorySamsungLaptop?.category}</p>
              <p className='border p-2'>{getCategorySamsungLaptop?.description}</p>
              
            <div className="card-actions justify-end">
              <Link to={getCategorySamsungLaptop?.category}>
              <button title={`See All ${getCategorySamsungLaptop?.category} Laptops`} className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        }
      
    
    

            




      

         {/* Drinks Category */}      
         {getCategoryLenovoLaptop?.image &&
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryLenovoLaptop?.image} alt="Drink" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategoryLenovoLaptop?.title}</p> <p className = 'text-purple-600'>${getCategoryLenovoLaptop?.resalePrice}</p></h2>
              <p>Category: {getCategoryLenovoLaptop?.category}</p>
              <p className='border p-2'>{getCategoryLenovoLaptop?.description}</p>
              
            <div className="card-actions justify-end">
              <Link to={getCategoryLenovoLaptop?.category}>
              <button title={`See All ${getCategoryLenovoLaptop?.category} Laptops`} className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        }
      
    
    



            
        </div>


        {/* <button className='btn btn-primary hidden md:block mx-auto w-sm mt-10'>See All</button> */}



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
      </div>
    );
};

export default ProductCategory;