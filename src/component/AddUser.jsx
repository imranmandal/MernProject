import React, { useState } from "react";
import "../Css/adduser.css";
import axios from "axios";
import ModalCom from "./Modal";
import { Button } from "reactstrap";



function AddUser() {

    const [userAdd, setUserAdd] = useState({
        user: "",
        email: ""

    })

    const [isModalOpen, setIsModalOpen] = useState(false);


    function handleChange(event) {
        const { value, name } = event.target;
        setUserAdd(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        })

    }
    function handleSubmit(event) {

console.log(userAdd);
        const NewUser = {
            title: userAdd.user,
            question: userAdd.email
        }

       

        // window.location="/show-user"
        event.preventDefault();



    }
    function handleClickToAddUser() {
        setIsModalOpen(!isModalOpen)

    }

    return <div className="padding-10">


        <button className="btn btn-primary"
            onClick={handleClickToAddUser}
        > Create a User </button>
        <ModalCom toggle={handleClickToAddUser}
            isOpen={isModalOpen}
            Body={

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
                        className="btn btn-primary">Submit</button>

                </form>



            }
            Header="Add New User"
            Footer={
                <React.Fragment>
                    
                    <Button type="button" onClick={handleClickToAddUser} className="btn btn-warning">
                        Cancel
                    </Button>

                </React.Fragment>





            }
        />


    </div>
}
export default AddUser;