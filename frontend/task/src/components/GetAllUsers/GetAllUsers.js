import React from "react";
import { GetUsers, DeleteUsers } from "../../services/user";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrash, FaPen } from "react-icons/fa";
export default function GetAllUsers() {
  // set users
  const [users, setUsers] = useState([]);
  const user = async () => {
    const userData = await GetUsers();
    setUsers(userData.data);
  };

  useEffect(() => {
    user();
  }, []);

  // delete user
  const handleDelete = (id) => {
    let result = window.confirm("Are you sure to Delete the user");
    if (result === true) {
      DeleteUsers(id)
        .then((res) => {
          if (res) {
            alert("User deleted successfully");
            user();
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("User is not deleted");
    }
  };
  return (
    <>
      <div className='d-flex justify-content-around my-5'>
        <h5 className='fs-3'>User Details</h5>
        <Link to='/createUser'>
          <button className='btn btn-dark fw-bold shadow-none'>
            Create User
          </button>
        </Link>
      </div>
      <table className='table table-striped table-hover container'>
        <thead>
          <tr>
            <th scope='col'>Sr No</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email Address</th>
            <th scope='col'>Mobile Number</th>
            <th scope='col'>Is Active</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            var url = `/editUser/${item._id}`;
            return (
              <>
                <tr>
                  <td>{++index}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.emailAddress}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.isActive ? "Active" : "Inactive"}</td>
                  <td>
                    <Link to={url}>
                      <button className='border border-none'>
                        <FaPen />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className='border border-none'
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
