import React from 'react'

export default function NavBar(props) {
  return (
    <div className='text-center'>
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <a><img src={require("file:///Users/anick_168/esd/iiitbsj.jpeg")} height="50px"/></a>
        <a className="navbar-brand" href="/">
          Logout
        </a>

      </div>
    </nav>
    </div>
  )
}
