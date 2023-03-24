import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/Black_ColorLogo-removebg.png'
import { AuthContext } from '../../Context/AuthProvider';




const NavBar = () => {
	
const {user, logUser, logOut} = useContext(AuthContext)
	// console.log(user);

	const navigate = useNavigate();



	const handleLogOut = () => {
		navigate('/login');
		logOut()
			.then(() => {
				toast.error('Log Out!');
				navigate('/login');
			})
			.catch((error) => console.error(error));
	}



	//! For Searching product

	const [products, setProducts] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

  console.log('products', products);
  

	useEffect(() => {
	  
		fetch( `http://localhost:5000/products/search?name=${searchTerm}`)
		.then((res) => res.json())
      .then((result) => {
        console.log(result);
		setProducts(result.data);
	  })

	}, [searchTerm]);
  
	const handleSearch = (event) => {
	  setSearchTerm(event.target.value);
	//   console.log(event.target.value);
	};

	//! END 



	return (
		<div>
            <div className="navbar bg-base-100">

			<Link to='/' className="flex-1 ml-5">
			<img className=' h-16' src={logo} alt="logo" />
		    </Link>


             {/* For Mobile */}
			<div className="navbar-start md:hidden">
			<div className="dropdown">
			<label tabIndex={0} className="btn btn-ghost btn-circle">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
			</label>
			<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li><Link to='/'>Home</Link></li>
				<li><Link>Portfolio</Link></li>
				<li><Link to='/about'>About</Link></li>
			</ul>
			</div>
		   </div>
		   {/* For Desktop */}
			<div className="navbar-start md:block hidden">
			<ul className="menu menu-horizontal px-1">
			<li><Link to='/'>Home</Link></li>
			
			{user&&
			<li><Link to='/dashboard'>Dashboard</Link></li>
			}
			<li><Link to='/faq'>FAQ</Link></li>
				<li><Link to='/about'>About</Link></li>
			
			</ul>
		   </div>

		


		<div className="flex-none gap-2">
			<form className=" flex">
			<input type="text" onChange={handleSearch} value={searchTerm} placeholder="Search" className="input input-bordered outline-none focus:outline-none rounded-none" />
			<button className='btn btn-primary rounded-none' type="submit">Search</button>
			</form>


			<div className="Profile-Box dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-circle hover:bg-blue-500 hover:border hover:border-white border-white bg-white avatar">
			<div className="w-10 rounded-full">
				{user? 
			<img src={user.photoURL} alt="avatar" />
			:
			<img src="https://t4.ftcdn.net/jpg/02/27/45/09/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg" />}
			</div>
			</label>
             
			<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
			<li>
			<a>
				{user? 
				<Link to='/dashboard/my-profile' className="justify-between">
				<span>{user?.displayName} </span>
				<span className="badge">{logUser?.role}</span>
				</Link>
				:
				<span>profile name</span>
				}
				
			</a>
			</li>
			<li><a>Settings</a></li>
				{user ?
				<li><a onClick={handleLogOut}>Logout</a></li>
				:
				<li><Link to='/login'>Login</Link></li>
                }
			</ul>

			</div>
			
		</div>

		</div>
        </div>
	);
};

export default NavBar;