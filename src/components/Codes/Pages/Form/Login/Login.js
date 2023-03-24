import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
// import useToken from '../../../hook/useToken';

const Login = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();



	const { logIn, googleSignUp, loading } = useContext(AuthContext);



	const [loginError, setLoginError] = useState('');


	const location = useLocation();


	const navigate = useNavigate();



	const [loginUserEmail, setLoginUserEmail] = useState('');
	// const [token] = useToken(loginUserEmail);



    



  //todo: Password show and hide
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;








	const from = location.state?.from?.pathname || '/';
	const toaster = location.state?.toast || false;


	if (toaster) {
		toast.error(`Ohh, sorry!
		You are not an admin!`);
	}






	const handleLogin = (data) => {
		
		setLoginError('');



		
		//! login By User Email
		logIn(data.email, data.password)
			.then((result) => {
				const user = result.user;
				

				navigate(from, { replace: true });
				
				toast.success('Successfully Login.');
				setLoginUserEmail(data.email);
			})
			.catch((error) => {
				console.log(error.message);
				toast.error('Sorry! Try again with valid user');
			});
	};












	//! Google Log In....
	const handleGooleLogIn = () => {
		googleSignUp()
			.then((result) => {
				const user = result.user;
				toast.success(user?.email);

				fetch('http://localhost:5000/googlebuyer', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(user),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						navigate('/');
						toast.success('Successfully Login!');
					});
					navigate(from, { replace: true });

			})
			.catch((error) => console.error(error));
	};
	//!......................................



	return (
		<div className='h-[800px] flex justify-center items-center'>
			<Toaster></Toaster>
			<div className='w-96 p-7 border-2 border-gray-200 rounded-xl'>
				<h2 className='text-xl text-center'>Login</h2>
				<form onSubmit={handleSubmit(handleLogin)}>
					<div className='form-control w-full max-w-xs'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='text'
							{...register('email', {
								required: 'Email Address is required',
							})}
							className='input input-bordered focus:outline-none w-full max-w-xs'
						/>
						{errors.email && (
							<p className='text-red-600'>{errors.email?.message}</p>
						)}
					</div>

					<div className='form-control mb-3 w-full max-w-xs'>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
					<div className="flex border border-gray-300 bg-[#e8f0fe] rounded-lg">
                    <input
						
                            type={changePassword ? "password" : "text"}
                            {...register('password', {
                              
                            })}
							className='input focus:outline-none  w-full max-w-xs'
						/>
                        <span className="flex items-center mx-2"
                        onClick={() => {
                            setChangePassword(changeIcon);
                        }}
                        >
                        {
                            changeIcon ? 
                            
                            <div className="flex my-2 cursor-pointer">
                            <BsEyeSlashFill className='mt-1 mx-2' /> 
                            </div>
                            :
                            <div className="flex my-2 cursor-pointer">
                            <BsEyeFill className='mt-1 mx-2' /> 
                            </div>
                        }
                        </span>
                    </div>
						{errors.password && (
							<p className='text-red-600'>{errors.password?.message}</p>
						)}
					</div>

					<input
						className='btn bg-green-500 hover:bg-green-600 border-0 text-white w-full'
						value='Login'
						type='submit'
					/>

					<div>
						{loginError && <p className='text-red-600'>{loginError}</p>}
					</div>
				</form>
				<p>
					Create new Account
					<Link className='text-secondary m-3' to='/signup'>
						Sign Up
					</Link>
				</p>
				<div className='divider'>OR</div>
				<button
					onClick={handleGooleLogIn}
					className='btn btn-outline hover:bg-red-400 w-full hover:border-0'
				>
					CONTINUE WITH GOOGLE
				</button>
			</div>
		</div>
	);
};

export default Login;
