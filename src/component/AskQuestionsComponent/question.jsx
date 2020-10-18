
import { Container, Row, FormGroup, Input, Label, Button, Col, Form } from 'reactstrap'
import React, { Component } from 'react'
import Axios from 'axios';
import "./askquestion.css"
export default class question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Question: [],
            fullname: "",
            answer: "",
            Answers:[]

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState(preValue=>{
            return{
                ...preValue,
                [name]:value
            }
        })

}
handleSubmit(event)
{
    alert( this.props.match.params.id)
   var answers={
       fullname:this.state.fullname,
       answer:this.state.answer
   }
  Axios.put("http://localhost:5000/answer/"+this.props.match.params.id,answers)
  .then(res=>{
       alert(JSON.stringify(res.data));
  })
    event.preventDefault();
    window.location="/question/"+this.props.match.params.id

}
componentDidMount() {

    Axios.get("http://localhost:5000/question/" + this.props.match.params.id)
        .then(res => {
            console.log(res.data.answers);
            this.setState({
                Question: res.data,
                Answers:res.data.answers
                
               
            })
        })
        
}
render() {
    return (
        <div className="main">

            <Container>
                <h3>{this.state.Question.title}</h3>
                <Row>
                    <Col lg="6" sm="12">
                        <p>{this.state.Question.question}</p>
                        <div>
                           {this.state.Answers.map(ans=>{
                               return <div> <small>{ans.fullname}</small>
                                    <p>{ans.answer}</p>
                               </div>
                           })}
                        </div>
                        <div>
                            <p>If you know the answer of this question then give it below sectiona and submit your answer !!</p>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label className="label" Htmlfor="name">Your Name</Label>
                                    <Input type="text"
                                        onChange={this.handleChange}
                                        name="fullname"
                                        value={this.state.fullname}

                                    />
                                </FormGroup>

                                <FormGroup>

                                    <Label className="label" Htmlfor="desc">Your Answer</Label>
                                    <Input type="textarea"

                                        rows="8" name="answer"
                                        onChange={this.handleChange}
                                        value={this.state.answer}

                                        id="desc" />
                                </FormGroup>
                                <Button type="submit" className="btn">Post Your Answer</Button>

                            </Form>

                        </div>



                    </Col>
                    <Col lg="6" sm="12">

                        hii
                        </Col>

                </Row>
            </Container>

        </div>
    )
}
}
