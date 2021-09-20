import './App.css';
import React, { useState } from "react";

function App(){
  const [users,setUsers] = useState();
  const getUsers = async() => {
    const response = await fetch("https://reqres.in/api/users?page=2"); 
   
    const data = await response.json();
    setUsers(data.data);

  };
  return (
    <div>
      <header className="navb">
        <h1><a href="https://dilkhush99.github.io/LGMVIP-WebDev-Task-1/">eSafeTech</a></h1>
        <div className="btn" onClick={getUsers}>
          Get Users

        </div>

      </header>
      <div className="row">
        {users?.map((current,index)=>{
          return(
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-img-top" alt=""/>
              <div className="card-body">
                <h4 className="card-title">{current.first_name} {current.last_name}</h4>
                <h5 className="card-text">{current.email}</h5>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default App;