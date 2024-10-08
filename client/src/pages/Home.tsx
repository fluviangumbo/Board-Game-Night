import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveUsers } from "../api/userAPI";
import type { UserData } from "../interfaces/UserData";
import ErrorPage from "./ErrorPage";
// import UserList from "../components/Users";
import auth from "../utils/auth";
import { Link } from "react-router-dom";
import Header from "../components/header";

const Home = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [error, setError] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);

  useEffect(() => {
    if (loginCheck) {
      fetchUsers();
    }
  }, [loginCheck]);

  useLayoutEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  const fetchUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
      console.log(users);
    } catch (err) {
      console.error("Failed to retrieve tickets:", err);
      setError(true);
    }
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="login-container">
        <div className="display-flex justify-space-between align-center py-2 px-5 login-notice">
          <h1>Login to view all your friends!</h1>
          <div className="login-button">
            <button className="btn btn-light" type="button">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
        {/* {!loginCheck ? ( */}
        <div className="login-notice">
          <h3>or sign up</h3>
          <div className="login-button custom-light-button">
            <Link to="/signup">
              <button className="btn" type="button">
                Sign Up
              </button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>

      {/* // ) : (
      //   <UserList users={users} />
      // )} */}
    </>
  );
};

export default Home;
