import React, { Component } from 'react';
import { Col, Container, Row, FormGroup, Form, Label, Input, Button } from 'reactstrap';
import axios from "axios";
import "./askquestion.css";

class AskQuestion extends Component {
    constructor(props)
    {
       super(props);
       this.handleChange=this.handleChange.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);
       this.state={
           title:"",
           question:"",
           isLogin:true
       }
    }
    handleChange(event)
    {
        const {value,name}=event.target;
        this.setState(prevValue=>{
            
            return{
                ...prevValue,
                [name]:value
            }
            
        })


    }
    handleSubmit(event)
    {
        const newQuestion={
            title:this.state.title,
            question:this.state.question,
            
        }
        axios.post("http://localhost:5000/add-question", newQuestion)
        .then(res => console.log(res.data));
        alert("Your Question Added Successfully");

        this.setState({
            title:"",
            question:""
        })
        console.log(newQuestion);
       
        event.preventDefault();
    }
    render() {
        return (
           <div className="main">
              {this.state.isLogin ? <Container>
                <h3 className="titleLabel">Ask Question</h3>
                    <Row>
                        <Col lg="8" sm="12">
                           <div className="mainForm">
                           <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label className="label" Htmlfor="title">Title</Label>
                                    <Input type="text"
                                     value={this.state.title}
                                     onChange={this.handleChange}
                                      name="title" id="title" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="label" Htmlfor="desc">Description</Label>
                                    <Input type="textarea" 
                                     value={this.state.question}
                                     rows="8" name="question" 
                                     onChange={this.handleChange}
                                     id="desc" />
                                </FormGroup>
                                <Button type="submit"className="btn">Submit Your Question</Button>

                            </Form>

                           </div>
                            

                        </Col>
                        <Col lg="4" sm="12">
                            hii
                        </Col>
                    </Row>
                </Container>:"your not login please login"}
            </div>
        )
    }
}
export default AskQuestion;
