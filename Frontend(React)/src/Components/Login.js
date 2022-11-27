import React, { useState } from "react";
const LoginForm = ({ startLogin, loggedin }) => {
  // States for tracking form input which are the email address and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if(loggedin) return null;
  const handleLogin = (event) => {
    event.preventDefault();

    const credentials = {
      email,
      password,
    };
    //console.log();
    startLogin(credentials);
    setEmail("");
    setPassword("");
    console.log("bye");
  };
  
  // Typically keep id attributes on your HTML elements so that they can be styled using CSS
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">ESD Project</h2>
          <div className="text-center mb-5 text-dark">Faculty Login</div>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleLogin}
            >
              <div className="text-center">
                <img
                  src={require("file:///Users/anick_168/esd/iiitb.jpeg")}
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={event => setPassword(event.target.value)}
                id='password'
                required
              />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5 mb-5 w-100">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  // Styled Form
  // return (
  //   <div className='form-container'>
  //     <div className='form-box regular-shadow'>

  //       <div className='header-form'>
  //         <h4 className='text-primary text-center'>
  //           <i className='fa fa-user-circle' style={{fontSize:'110px', color: 'lightblue'}}></i>
  //         </h4>
  //         <div className='image'></div>
  //       </div>

  //       <div className='body-form'>
  //         <form onSubmit={handleLogin} id='login-form'>

  //           <div className='input-group mb-3'>
  //             <div className='input-group-prepend'>
  //               <span className='input-group-text'><i className='fa fa-user'></i></span>
  //             </div>
  //             <input
  //               type='text'
  //               className='form-control'
  //               placeholder='Email Address'
  //               value={email}
  //               onChange={event => setEmail(event.target.value)}
  //               id='email'
  //               required
  //             />
  //           </div>

  //           <div className='input-group mb-3'>
  //             <div className='input-group-prepend'>
  //               <span className='input-group-text'><i className='fa fa-lock'></i></span>
  //             </div>
  //             <input
  //               type='password'
  //               className='form-control'
  //               placeholder='Password'
  //               value={password}
  //               onChange={event => setPassword(event.target.value)}
  //               id='password'
  //               required
  //             />
  //           </div>

  //           <button type='submit' className='btn btn-primary btn-block' id='login-submit'>LOGIN</button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // )
};

export default LoginForm;
