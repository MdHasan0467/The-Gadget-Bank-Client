import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import logo from '../../../Assets/Black_ColorLogo-removebg.png'
import { AuthContext } from '../../Context/AuthProvider';

const Dashboard = () => {
	const {user, logUser} = useContext(AuthContext)
    return (
        <div className=''>
            <div className="">
			<NavBar />
			</div>
            <div className='drawer drawer-mobile'>
				<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
				<div className='drawer-content'>
					<Outlet></Outlet>
					<label
						htmlFor='my-drawer-2'
						className='btn btn-primary drawer-button hidden'
					>
						Open drawer
					</label>
				</div>



				<div className='drawer-side border'>
					<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
					<ul className='menu p-4 w-80 bg-base-100 text-base-content'>
						{/* Logo For Mobile Device */}
						<Link to='/home' className='flex lg:hidden mb-10'>
							<img
								src={logo}
								className='mr-3 h-6 sm:h-9 rounded-lg'
								alt='GB Logo'
							/>
							<span className='self-center text-xl font-semibold  '>
								The Gadget Bank
							</span>
						</Link>


						<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border  hover:bg-green-600  border-gray-300 border-l-green-600'>
							<Link to='/dashboard/my-profile'>My Profile</Link>
						</li>
						
							{logUser?.role === 'Seller' &&
							
							<>
								<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border  hover:bg-blue-600  border-gray-300 border-l-blue-600'>
									<Link to='/dashboard/addProduct'>Add Product</Link>
								</li>
								<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border  hover:bg-orange-600 border-gray-300 border-l-orange-600'>
									<Link to='/dashboard/my-products'>My Products</Link>
								</li>
								<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border  hover:bg-purple-600 border-gray-300 border-l-purple-600'>
									<Link to='/dashboard/mybuyers'>My Buyers</Link>
								</li>
							</>
							}
						

						
						{logUser?.role === 'Buyer' &&
							<>
							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border  hover:bg-blue-600 border-gray-300 border-l-blue-600 '>
								<Link to='/dashboard/my-orders'>My Orders</Link>
							</li>
							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border  hover:bg-orange-600 border-gray-300 border-l-orange-600'>
								<Link to='/dashboard/my-wish-list'>My WhishList</Link>
							</li>
						</>
						}
						

						
						{logUser?.role === 'admin' &&
							<>
							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border  hover:bg-blue-600 border-gray-300 border-l-blue-600'>
								<Link to='/dashboard/All-Buyers'>All Buyers</Link>
							</li>
							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border  hover:bg-purple-600 border-gray-300 border-l-purple-600'>
								<Link to='/dashboard/allSeller'>All Sellers</Link>
							</li>
							<li className=' hover:text-white  my-2 border-l-4 hover:border-l-8 border  hover:bg-pink-600 border-gray-300 border-l-pink-600'>
								<Link to='/dashboard/createUser'>Create an User</Link>
							</li>
						</>
						}
						
					</ul>
				</div>
                
			</div>
        </div>
    );
};

export default Dashboard;