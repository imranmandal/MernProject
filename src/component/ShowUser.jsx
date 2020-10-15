import React, { Component, useState } from "react";
import axios from "axios";
import AddUser from "./AddUser";
import Tables from "./Tables";
import { Button, Table } from "reactstrap";
import Modal from "./Modal";
import { Link } from "react-router-dom";
class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isOpen:false,
            user:"",
            email:"",
            Id:this.props.match.params.id
        }
 
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
       this.handleToggle=this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleToggle(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    componentDidMount() {
        axios.get("http://localhost:5000/")
            .then(res => {


                this.setState({
                    users: res.data.filter(data => {
                        return data
                    })
                })

            })



    }


    handleDelete() {
        axios.delete("http://localhost:5000/user/" +this.state.Id )
           .then(res => { alert("deleted"); });
         window.location="/show-user"
   

    }

    handleChange()
    {
     
    }
    handleSubmit(){

    }




    render() {
        return <div>


            <Table>
                <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>

                </thead>
                <tbody>

                {
                    this.state.users.map(data => {
                        return <tr>
                        <td>{data._id}</td>
                        <td>{data.user}</td>
                        <td>{data.email}</td>
                        <td><Button onClick={this.handleToggle} >Update</Button></td>
                        <td><Button><Link to={"/show-user/"+data._id} onClick={this.handleDelete} >Delete</Link></Button></td>
                        
                        </tr>
                       
                    })
                }

              </tbody>

            </Table>
           <Modal isOpen={this.state.isOpen} toggle={this.handleToggle}
           Body={<form onSubmit={this.handleSubmit} className="form-group">

<div className="input">
    <label htmlFor="userName">Username</label>
    <input type="text"
        className="form-control"
        id="userName"
        placeholder="Enter UserName"
        name="user"
        onChange={this.handleChange}
        


    />

</div>
<div className="form-group input">
    <label htmlFor="email-address">Email</label>
    <input type="email"
        className="form-control"
        id="email-address"
        name="email"
        onChange={this.handleChange}
      
        placeholder="Enter Email"

    />
</div>
<div>

</div>


<button type="submit"
    className="btn btn-primary">Submit</button>

</form>}
           />
        </div>


    }

}






export default ShowUser;