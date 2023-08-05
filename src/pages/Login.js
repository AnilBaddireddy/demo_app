import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './login.css'
export default function Login() {
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [pwd,setPwd]=useState('');
    const submit = (event) =>{
        event.preventDefault();
        if(name === 'satya' && pwd ==='1234'){
            console.log("inside");
            navigate('/Home');
        }
    }
  return (
    <>
    <div className='text-center' style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
        <h1>Jaanu I LOVE YOU</h1>
    </div>
    {/* <div className="sidenav">
         <div className="login-main-text">
            <h2><br/> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form onSubmit={submit}>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="User Name" />
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" value={pwd} onChange={(e)=>{setPwd(e.target.value)}} placeholder="Password" />
                  </div>
                  <button type="submit"  className="btn btn-black">Login</button>
               </form>
            </div>
         </div>
      </div> */}
      </>
  )
}
