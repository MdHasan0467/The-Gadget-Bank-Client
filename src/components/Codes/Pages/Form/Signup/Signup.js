import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
// import Loader from '../../Loader/Loader';
import { BsEyeSlashFill, BsEyeFill, BsTwitter, BsGithub } from 'react-icons/bs';
import { FcGoogle,  } from 'react-icons/fc';
import { AuthContext } from '../../../Context/AuthProvider';

const Signup = () => {
    
  //todo: Context APIs Data
  const { user, createSignUp, userprofile, loading, googleSignUp } = useContext(AuthContext);




  //todo: Password show and hide
    const [changePassword, setChangePassword] = useState(true);
    const changeIcon = changePassword === true ? false : true;

  
  

    // const { createUser, loading, logOut} = useContext(AuthContext)

    const navigate = useNavigate()
    
  
  
    const { register,   handleSubmit, formState: { errors }, } = useForm();
  
  
  
      //! from .env.local file====>
      const imgHostKey = process.env.REACT_APP_Imgbb_key;
      // console.log(imgHostKey);
    
    
    
    
  
  
  
  
  
  
  
  const handleRegister = data => {
      
  
  
      
      
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const phoneNumber = data.phoneNumber;
    const role = data.role;
    const image = data.img;
    // console.log(phoneNumber, image)
  
      
  
  
  
  
  
  
    createSignUp(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
  


  
  
      
      
      
      
      
      // console.log(image)
      
        //! ==========< Image Hosting >==========
  
        const formData = new FormData()
      
        formData.append('image', image[0])
  
        // console.log(formData)		
      
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
          method: 'POST',
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            console.log(imgData);

            const photoURL = imgData.data.url

            updateUserDetails(name, photoURL);
            saveUsers(name, email,  photoURL);

            if (imgData.success) {
                console.log(imgData.data.url)
  
  
  
  
            
  
              const addedUser = {
                name,
                email,
                password,
				role,
                phoneNumber,
                image: imgData.data.url
              }
  
  
  
  
  
  
  
  
          
  
  
  
              //! Save User info to the database....
              fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify(addedUser),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
  
  
                  navigate('/login')
                  toast.success('Registration successful')
                });
             
  
  
  
            }
          });
  
  
      })
      .catch((error) => {
        console.error(error);
        // setPasswordError((error.message).slice(22,36));
        if (error) {
          toast.error((error.message).slice(22, 42));
        }
      });
      
  };


      const updateUserDetails = (name, photoURL) => {
        userprofile(name, photoURL)
          .then(() => {
            toast.success('Profile Updated');
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
      const saveUsers = (name, email,  photoURL) => {
        const user = { name, email,  photoURL };
        fetch('http://localhost:5000/users', {
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
            // setCreatedUserEmail(email);
          });
      };








      //! Google Log In....
      const googleSignIn = () => {
      
    
        googleSignUp()
          .then((result) => {
            const user = result.user;
            // console.log(result);


            if (result) {
              const addedUser = {
                name: user?.displayName,
                email:user?.email,
                password: 'nai',
                phoneNumber: 'nai',
                image: user?.photoURL,
              }
      
      
              //! Save User info to the database....
                fetch('https://smart-thrill-social-media-server.vercel.app/users', {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json',
                  },
                  body: JSON.stringify(addedUser),
                })
                  .then((res) => res.json())
                  .then((result) => {
                    // console.log(result);
      
                    navigate('/');
                    toast.success('Successfully Login by google!');
      
                  });
            }
           
          })
          .catch((error) => toast.error('Something is wrong!'));
      };
      //!......................................

  


  

	// if (loading) {
	// 	return <Loader></Loader>;
	// }
	console.log(user);
	return (
		<div>
        <div className="w-full mx-auto shadow-2xl md:shadow-none bg-base-100 max-w-md md:max-w-full p-8 space-y-3 rounded-xl">
        <div className="card flex-shrink-0 ">
        <div className="card-body">
          <h3 className='font-serif text-2xl'><span className='text-red-500'>S</span><span className='text-yellow-500'>i</span><span className='text-green-500'>g</span><span className='text-blue-500'>n</span> Up with email address</h3>
          
          
		  <form onSubmit={handleSubmit(handleRegister)} className='w-1/2 mx-auto'>
          

		  <div className="group-card md:flex">
		  <div className='form-control'>
		  <label className='label'>
			<span className='label-text'>Full Name :</span>
		  </label>
		  <input
			type='text'
			{...register('name', {
			  
			})}
			className='input input-bordered focus:outline-none md:w-96'
			placeholder='Enter your full name'
		  />
		  {errors.name && (
			<p className='text-red-500'>
			  {errors.name.message}
			</p>
		  )}
		 </div>
	  
		  
  
  
		<div className='form-control mx-2'>
		  <label className='label'>
			<span className='label-text'>Email :</span>
		  </label>
		  <input
			type='email'
			{...register('email', {
			  
			})}
			className='input input-bordered focus:outline-none  md:w-96'
			placeholder='Enter your valid email address'
		  />
		  {errors.email && (
			<p className='text-red-500'>
			  {errors.email.message}
			</p>
		  )}
		</div>
		  </div>
	
	
		
		
		
  
		  <div className="group-card md:flex">
		  <div className='form-control'>
		  <label className='label'>
			<span className='label-text'>Phone Number</span>
		  </label>
		  <input
			type='number'
			{...register('phoneNumber', {
			  
			})}
			className='input input-bordered focus:outline-none md:w-96'
			placeholder='Enter your valid number'
		  />
		  {errors.phoneNumber && (
			<p className='text-red-500'>
			  {errors.phoneNumber.message}
			</p>
		  )}
		</div>

	  
	  
		  
		  
		  
		   <div>
		   <div className='form-control mx-2'>
		<label className='label'>
		  <span className='label-text'>Password :</span>
		</label>
		  <div className="flex">
		  <input
			   type={changePassword ? "password" : "text"}
		  {...register('password', {
			
		  })}
		  className='input input-bordered focus:outline-none md:w-96'
		  placeholder='Enter a secure password'
		/>
		{errors.password && (
		  <p className='text-red-500'>{errors.password.message}</p>
		)}
	   
		  </div>
			  </div>
			  
			  <span className="flex items-center mx-2"
			  onClick={() => {
				 setChangePassword(changeIcon);
			  }}
			 >
			  {
				changeIcon ? 
				
				<div className="flex my-2 cursor-pointer">
				<BsEyeSlashFill className='mt-1 mx-2' /> 
				<p>hide password</p>
				</div>
				:
				<div className="flex my-2 cursor-pointer">
				<BsEyeFill className='mt-1 mx-2' /> 
				<p>show password</p>
				</div>
			  }
			 </span>
			 
		   </div>
		  </div>
		
		 
	  
	  
  
  
  
	<div className="flex">
	<div className='form-control'>
	  <label className='label'>
		<span className='label-text'>Photo :</span>
	  </label>
	  <input
		type='file'
		{...register('img', {
		  required: 'Photo is Required',
		})}
		className='input input-bordered md:w-96'
		
	  />
	  {errors.img && (
		<p className='text-red-500'>{errors.img.message}</p>
	  )}
	</div>


		  
	  
		  
		  
		  
	<div className='form-control'>
		  <label className='label'>
			<span className='label-text'>Who are you ?</span>
		  </label>
		  <select
			className='input input-bordered md:w-96'
			type='name'
			{...register('role', {
			  
			})}
			>
			<option>Seller</option>
			<option>Buyer</option>
			</select>
		  {errors.phoneNumber && (
			<p className='text-red-500'>
			  {errors.phoneNumber.message}
			</p>
		  )}
		</div>
		</div>
	
	<input
	  className='btn mx-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white md:w-96 md:mt-9'
	  value='Register'
	  type='submit'
	/>

	
		  </form>

              
    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
    <Link to='/login' className="underline dark:text-gray-100 text-blue-500 mx-2">Login</Link>
</p>
        
       </div>
    </div>
        <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">Signup with social accounts</p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
            <button  onClick={googleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
            <FcGoogle className='text-2xl'></FcGoogle>
            </button>
            <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <BsTwitter className='text-2xl text-blue-500'></BsTwitter>
            </button>
            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <BsGithub className='text-2xl'></BsGithub>
            </button>
        </div>

    </div>
        </div>
	);
};

export default Signup;
