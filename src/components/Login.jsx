import { useState } from 'react';

import axios from 'axios';

export const Login = () => {
   const [loginData, setloginData] = useState({
      username: "",
      password: "",
   });

   const handleChange = (e) => {
      setloginData({ ...loginData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.get("http://localhost:8080/users").then((data) => {
         data.data.map((e) => {
            if (
               e.username === loginData.username &&
               e.pass === loginData.password
            ) {
               console.log(e);
            }
         });
      });
   };

   return (
      <div>
         <input
            onChange={handleChange}
            className="username"
            type="text"
            name="username"
            placeholder="Enter Username"
         />
         <input
            onChange={handleChange}
            className="password"
            type="password"
            name="password"
            placeholder="Enter password"
         />
         {/* On this button click make network req to find user with same username and password */}
         {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
         <button className="submit" onClick={handleSubmit}>
            Login
         </button>
      </div>
   );
};