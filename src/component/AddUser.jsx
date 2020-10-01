import React, { useState } from "react";
import "../Css/adduser.css";
import axios from "axios";


function AddUser() {

    const [userAdd,setUserAdd]=useState({
        user:"",
        email:""

    })
    function handleChange(event)
    {
        const {value,name}=event.target;
        setUserAdd(preValue=>{
            return {
                ...preValue,
                [name]:value
            }
        })
        
    }
    function handleSubmit(event)
    {
        
        
        const NewUser={
            user:userAdd.user,
            email:userAdd.email
        }
        
        axios.post("http://localhost:5000/user",NewUser)
        .then(res=>console.log(res.data));
   
        event.preventDefault();
       
        

    }
    


    return <div>
        <form onSubmit={handleSubmit} className="form-group">

            <div className="input">
                <label htmlFor="userName">Username</label>
                <input type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Enter UserName"
                    name="user"
                    onChange={handleChange}
                    value={userAdd.user}
                  
                  
                />

            </div>
            <div className="form-group input">
                <label htmlFor="email-address">Email</label>
                <input type="email"
                    className="form-control"
                    id="email-address"
                    name="email"
                    onChange={handleChange}
                    value={userAdd.email}
                    placeholder="Enter Email"
                    
                />
            </div>
            <div>

            </div>

            <button type="submit" 
                className="btn btn-primary"
            
                >Submit</button>
            
           

        </form>

    </div>
}
export default AddUser;