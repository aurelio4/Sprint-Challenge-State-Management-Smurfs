import React from 'react'
import Smurf from './Smurf'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const SmurfList = (props) => {
  return(
    <Container className="smurf-list">
      <Row>
      {console.log(props.smurfs)}
      {props.smurfs
        ? <Col sm="12" md={{ size: 6, offset: 3 }}>
            {props.smurfs.map(smurf => (
              <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
            ))}
          </Col>
        : <Col sm="12" md={{ size: 6, offset: 3 }}><h3>No smurfs in list</h3></Col>
        }
      </Row>
    </Container>
  )
}

export default SmurfList