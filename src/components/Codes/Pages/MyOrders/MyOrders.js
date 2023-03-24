import React, { useContext, useEffect, useState } from 'react';
import { BsFillCursorFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
 
	const { user } = useContext(AuthContext);




	const [orderList, setOrderList] = useState()








	//! fetch for getting products data from mongodb.....

	        // Make a request for orderList category
  
       
			useEffect(() => {
				fetch(`http://localhost:5000/my-orders/${user?.email}`)
					.then((res) => res.json())
					.then((result) => {
						console.log(result);
						if(result !== undefined) {
                            setOrderList(result);
                        }
					});
			}, [user?.email]);
	
	








    return (

        <div className='min-h-screen'>
       
			{
			orderList &&
			<div className="flex justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
			{
				orderList?.map((data) => 
				<div className="card h-[600px] max-w-md mx-5 group bg-base-100 shadow-xl">
				<img className='w-full h-80' src={data?.productImage} alt="img" />
				<div className="card-body">

				<div className="flex">
				<h2 className="card-title font-bold">{data?.title}</h2>
				<p className='font-semibold text-green-500 text-2xl'>( ${data?.resalePrice} )</p>
				</div>
				<p className='text-start'> <span className='font-semibold'>Category:</span> {data?.category}</p>
				<p className='border p-2'>{data?.description}</p>
				
				<div className="card-actions justify-end">
				<Link to={`payment/${data._id}`}>
				<button className='flex  bg-green-500 hover:bg-fuchsia-500 border-0 btn'> <span className='w-auto my-auto mx-2'><BsFillCursorFill/></span> <span>Pay</span></button>
				</Link>
			  </div>
			</div>
			</div>
				)}
	    	</div> 
			</div> 
			}
			{orderList === undefined && <p className='text-gray-700'>There are no order right now</p>}
        </div>
    );
};

export default MyOrders;