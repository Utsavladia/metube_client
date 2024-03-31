import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNew, validateOtp } from "../actions/auth";

const Register = ({ registering }) => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [rePass, setRePassword] = useState("");
  const [samePass, setSamePass] = useState(false);
  const [sentotp, seTsentOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const failotp = useSelector((state) => state.validationFailure);
  const passotp = useSelector((state) => state.validationSuccess);

  useEffect(() => {
    if (pass === rePass) {
      setSamePass(true);
    } else {
      setSamePass(false);
    }
  }, [rePass, pass]);

  useEffect(() => {
    if (passotp) {
      console.log(passotp);
      alert("Account created successfully Login now");
      const timeoutId = setTimeout(() => {
        registering(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [passotp]);

  const handleRegisterButton = (e) => {
    e.preventDefault();
    if (!otp) {
      alert("Enter OTP you got on email ");
    } else {
      dispatch(
        validateOtp({
          email: email,
          password: pass,
          otp: otp,
        })
      );
    }
  };

  const handleSendOtpButton = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Enter Email");
    } else if (!pass) {
      alert("Enter password");
    } else if (pass !== rePass) {
      alert("Password did not match");
    } else {
      seTsentOtp(true);
    }
    dispatch(
      registerNew({
        email: email,
        password: pass,
      })
    );
  };

  return (
    <form>
      {sentotp ? (
        <div className="flex flex-col items-center">
          <p className="my-1 text-lg text-center ">Enter OTP</p>
          <input
            value={otp}
            maxLength="4"
            onChange={(e) => setOtp(e.target.value)}
            className="bg-zinc-900 mt-2 px-3 py-2 text-lg w-1/2"
            placeholder="Enter OTP"
          />
          <button
            onClick={handleRegisterButton}
            className="bg-blue-700 hover:bg-blue-500 rounded-md px-3 py-2 text-lg w-full mt-12"
          >
            Register
          </button>
        </div>
      ) : (
        <div>
          <p className="my-1 text-md ">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="bg-zinc-900 px-3 py-2 text-lg w-full"
            placeholder="Enter you email.."
          />
          <p className="my-1 mt-4 text-md ">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="bg-zinc-900 px-3 py-2 text-lg w-full"
            placeholder="Enter you password.."
          />
          <p className="my-1 mt-4 text-md ">
            Re-enter Password{" "}
            {samePass && (
              <span className="text-green-500 float-right text-sm ">same</span>
            )}
            {!samePass && (
              <span className="text-red-500 float-right text-sm">Not same</span>
            )}
          </p>
          <input
            onChange={(e) => setRePassword(e.target.value)}
            className="bg-zinc-900 px-3 py-2 text-lg w-full"
            placeholder="Enter you password.."
          />
          <button
            onClick={handleSendOtpButton}
            className="bg-blue-500 hover:bg-blue-700 rounded-md px-3 py-2 text-lg w-full mt-12"
          >
            Send OTP
          </button>
        </div>
      )}

      {sentotp && (
        <h1 className="text-md text-green-400 mt-2 text-center">
          OTP has been sent to you email
        </h1>
      )}
      {!passotp && (
        <h1 className="text-md text-orange-400 mt-2 text-center">{failotp}</h1>
      )}
      {passotp && (
        <h1 className="text-md text-green-400 mt-2 text-center">
          {passotp?.data}
        </h1>
      )}
    </form>
  );
};

export default Register;
