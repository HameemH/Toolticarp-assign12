import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  }
  const handleInputUser = () => {
    if (user) {
      const currentUser = { userName: user?.displayName, userEmail: user?.email }
      const email = user?.email;
      fetch(`https://peaceful-stream-38691.herokuapp.com/users/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.location.reload()
        })
    }
  }
  return (
    <div className="navbar border border-lime-300 bg-slate-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'> Home</Link></li>
            <li><Link to='/blogs'> Blogs</Link></li>
            <li><Link to='/portfolio'> Portfolio</Link></li>
            {
              user ? <li><Link to='/dashboard'>Dashboard</Link></li> : null
            }
            {
              user ? <button onClick={handleLogOut} className="btn btn-primary text-white">LOG OUT</button> : <Link to='/login' className="btn btn-primary text-white">LOG IN</Link>
            }

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-primary">TOOLTICARP</a>
      </div>
      <div className="lg:navbar-end  hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/'> Home</Link></li>
          <li><Link to='/blogs'> Blogs</Link></li>
          <li><Link to='/portfolio'> Portfolio</Link></li>

          {
            user ? <li><Link to='/dashboard' onClick={handleInputUser}>Dashboard</Link></li> : null
          }
          {
            user ? <button onClick={handleLogOut} className="btn btn-primary text-white">LOG OUT</button> : <Link to='/login' className="btn btn-primary text-white">LOG IN</Link>
          }
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
};

export default Header;