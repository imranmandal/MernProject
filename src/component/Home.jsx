
import Axios from 'axios';
import React, { Component } from 'react';
import { Button, Card, CardBody, CardLink, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import "./home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allQuestion: []
        }

    }
    componentDidMount() {
        Axios.get("http://localhost:5000/all-question")
            .then(res => {
                this.setState({
                    allQuestion: res.data.filter(data => {
                        return data
                    })
                })
            })
            .catch(err => {
                console.log(err.message);
            })
        console.log(this.state.allQuestion);

    }
    render() {
        return (
            <div className="main">
                <Container>
                    <Row>
                        <Col lg="6" sm="6">
                        <h3>
                            All Questions
                        </h3>

                        </Col>
                        <Col lg="6" sm="6">
                            
                        </Col>
                    </Row>

                    
                    <Row>
                        <Col lg="8" sm="12">

                            {this.state.allQuestion.map((allquestion) => {
                                return <Card>
                                    <CardBody>
                                        <CardLink href={"/question/"+allquestion._id}>{allquestion.title}</CardLink>
                                        <CardText>{allquestion.question.substring(1, 100) + ".."}</CardText>
                                    </CardBody>
                                </Card>
                            })}


                        </Col>
                        <Col lg="4" sm="12">

                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
