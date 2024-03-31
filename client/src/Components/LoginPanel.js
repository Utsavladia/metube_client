import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import Register from "./Register";
import { useNavigate } from "react-router-dom";

const LoginPanel = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.currentUserReducer);
  console.log("current ueser we got in login", currentUser);
  const errormessage = useSelector((state) => state.loginFailure);
  console.log(errormessage);
  const [loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.result?._id) {
      setLoggedin(true);
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentUser]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Enter you email.");
    } else if (!pass) {
      alert("Enter you password");
    } else {
      dispatch(login({ email: email, password: pass }));
    }
  };

  const handleRegistering = () => {
    setRegistering(true);
  };

  return (
    <div className="w-screen h-screen relative  bg-black  pt-32 text-white flex justify-evenly items-start ">
      <div className="bg-black w-1/4 px-6 h-auto p-16 rounded-lg border  border-zinc-800 shadow-md shadow-zinc-800">
        {!registering && (
          <form onSubmit={handleLoginSubmit}>
            <p className="my-1 text-lg ">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-900 px-3 py-2 text-lg w-full"
              placeholder="Enter you email.."
            />
            <p className="my-1 mt-4 text-lg ">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-zinc-900 px-3 py-2 text-lg w-full"
              placeholder="Enter you password.."
            />
            <button
              className={`${
                loggedin ? "bg-green-500" : "bg-blue-500"
              } hover:bg-blue-700 rounded-md px-3 py-2 text-lg w-full mt-12`}
            >
              {loggedin ? "Logged in" : "Login"}
            </button>
            {errormessage ? (
              <h1 className="text-orange-500 mt-3 text-center text-md">
                {errormessage?.data}
                <span
                  onClick={handleRegistering}
                  className="text-white ml-2 underline cursor-pointer hover:text-blue-500"
                >
                  here
                </span>
              </h1>
            ) : (
              <h1 className="text-white mt-3 text-center text-md ">
                Don't an have acccount !{" "}
                <span className="text-blue-400">Register</span>
                <span
                  onClick={handleRegistering}
                  className="text-white ml-2 underline cursor-pointer hover:text-blue-500"
                >
                  here
                </span>
              </h1>
            )}
          </form>
        )}
        {registering && <Register registering={setRegistering} />}

        {/* <button className=" absolute top-0 right-0 w-12  hover:bg-red-700 bg-zinc-600 px-4  text-xl pb-1  text-white">
          x
        </button> */}
      </div>
    </div>
  );
};

export default LoginPanel;
