import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostUsers } from "../../services/user";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CreateUser() {
  let navigate = useNavigate();

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [password, setPassword] = useState("");
  let [emailAddress, setEmailAddress] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    PostUsers({
      firstName: firstName,
      lastName: lastName,
      password: password,
      emailAddress: emailAddress,
      mobileNumber: mobileNumber,
    })
      .then((res) => {
        if (res) {
          alert("User added successfully");
          navigate("/");
        }
      })
      .catch((err) => console.log(err.response));
  }
  return (
    <>
      <h5 className='fs-3 text-center my-3'>Enter User Details</h5>
      <form onSubmit={handleSubmit} className='w-25 m-auto'>
        <div>
          <div className='mb-3'>
            <input
              type='text'
              placeholder='First Name'
              className='form-control'
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              placeholder='Last Name'
              className='form-control'
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <input
              type='password'
              placeholder='Password'
              className='form-control'
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              placeholder='Email address'
              className='form-control'
              required
              value={emailAddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              placeholder='Mobile Number'
              className='form-control'
              required
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
          </div>
          <button type='submit' className='btn btn-dark'>
            Create User
          </button>
        </div>
      </form>
    </>
  );
}
