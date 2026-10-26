import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [usersData, setUsersData] = useState([]);
  useEffect(()=>{
     getUsersData();
  },[])
  async function getUsersData(){
    const url="https://dummyjson.com/users";
    let response = await fetch(url)
    response =await response.json()
    setUsersData(response.users)
  }
    console.log(usersData);
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <div>
          <h1 class="text-center my-4">Api data</h1>
          {
            usersData && usersData.map((user)=>(
                <ul className="flex justify-around my-2 bg-[#004aad30]">
                <li>{user.firstName}</li>
                <li>{user.lastName}</li>
                <li>{user.email}</li>
              </ul>
            ))
          }
        </div>
    </BrowserRouter>
  )
}
