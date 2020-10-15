
import { Container, Row, FormGroup, Input, Label, Button, Col, Form } from 'reactstrap'
import React, { Component } from 'react'
import Axios from 'axios';
import "./askquestion.css"
export default class question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Question: []
        }

    }
    componentDidMount() {

        Axios.get("http://localhost:5000/question/" + this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                this.setState({
                    Question: res.data

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
                            <p>If you know the answer of this question then give it below sectiona and submit your answer !!</p>
                                <Form >
                                    
                                    <FormGroup>
                                        <Label className="label" Htmlfor="desc">Your Answer</Label>
                                        <Input type="textarea"

                                            rows="8" name="question"

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
