import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck]);

  return (
    <div className='display-flex justify-space-between align-center py-2 px-5 mint-green login-button'>
      <div style={{ display: 'flex', gap: '15px' }}>
        {!loginCheck ? (
          <button className='btn' type='button'>
            <Link to='/login'>Login</Link>
          </button>
        ) : (
          <button
            className='btn'
            type='button'
            onClick={() => {
              auth.logout();
            }}
          >
            Logout
          </button>
        )}
        <button className='btn' type='button'>
          <Link to='/hot-games'>HotGames</Link>
        </button>

        <button className='btn' type='button'>
          <Link to='/groups'>Groups</Link>
        </button>
        <button className='btn' type='button'>
          <Link to='/calendar'>Create an Event</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
