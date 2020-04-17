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

const SmurfForm = (props) => {
  return(
    <Container className="smurf-form">
      <h1> Submit a Smurf </h1>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Input placeholder='Name' value={props.name} onChange={props.nameChange} />
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Input placeholder='Age' value={props.age} onChange={props.ageChange} />
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <InputGroup>
            <Input placeholder='Height' value={props.height} onChange={props.heightChange} />
            <InputGroupAddon addonType="append">
              <InputGroupText>cm</InputGroupText>
            </InputGroupAddon>
            <Button onClick={() => props.postSmurfInfo()}>Submit</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default SmurfForm