import React from 'react'
import './App.css'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'

const SmurfForm = () => {
  return(
    <Container className="smurf-form">
      <h1> Submit a Smurf </h1>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Input placeholder='Name' />
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Input placeholder='Age' />
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <InputGroup>
            <Input placeholder='Height' />
            <InputGroupAddon addonType="append">
              <InputGroupText>cm</InputGroupText>
            </InputGroupAddon>
            <Button>Submit</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default SmurfForm