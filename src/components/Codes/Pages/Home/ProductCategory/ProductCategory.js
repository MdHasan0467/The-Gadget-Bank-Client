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
          <div className="card h-[600px] hover:border hover:border-gray-100 rounded-none hover:bg-green-50 mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryDellLaptop?.image} alt="Desert" />
          <div className="card-body">
          <p className="card-title flex justify-between">{getCategoryDellLaptop?.title}</p>
              <p className='font-semibold text-fuchsia-500 text-2xl text-end'>( ${getCategoryDellLaptop?.resalePrice} )</p>
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
          <div className="card h-[600px] hover:border hover:border-gray-100 rounded-none hover:bg-green-50 mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryAppleLaptop?.image} alt="Chinese" />
          <div className="card-body">
          <p className="card-title flex justify-between">{getCategoryAppleLaptop?.title}</p>
              <p className='font-semibold text-fuchsia-500 text-2xl text-end'>( ${getCategoryAppleLaptop?.resalePrice} )</p>
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
          <div className="card h-[600px] hover:border hover:border-gray-100 rounded-none hover:bg-green-50 mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryHPLaptop?.image} alt="Chicken" />
          <div className="card-body">
              <p className="card-title flex justify-between">{getCategoryHPLaptop?.title}</p>
              <p className='font-semibold text-fuchsia-500 text-2xl text-end'>( ${getCategoryHPLaptop?.resalePrice} )</p>
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
          <div className="card h-[600px] hover:border hover:border-gray-100 rounded-none hover:bg-green-50 mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryAsusLaptop?.image} alt="Rice" />
          <div className="card-body">
          <p className="card-title flex justify-between">{getCategoryAsusLaptop?.title}</p>
              <p className='font-semibold text-fuchsia-500 text-2xl text-end'>( ${getCategoryAsusLaptop?.resalePrice} )</p>
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
          <div className="card h-[600px] hover:border hover:border-gray-100 rounded-none hover:bg-green-50 mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategorySamsungLaptop?.image} alt="Drink" />
          <div className="card-body">
              <p className="card-title flex justify-between">{getCategorySamsungLaptop?.title}</p>
              <p className='font-semibold text-fuchsia-500 text-2xl text-end'>( ${getCategorySamsungLaptop?.resalePrice} )</p>
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
          <div className="card h-[600px] hover:border-gray-100 border  rounded-none hover:bg-green-50 mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryLenovoLaptop?.image} alt="Drink" />
          <div className="card-body">
          <p className="card-title flex justify-between">{getCategoryLenovoLaptop?.title}</p>
              <p className='font-semibold text-fuchsia-500 text-2xl text-end'>( ${getCategoryLenovoLaptop?.resalePrice} )</p>
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


        



    

    </div>
      </div>
    );
};

export default ProductCategory;