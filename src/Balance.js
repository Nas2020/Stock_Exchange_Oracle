import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

const Balance = ({drizzleState, index}) => {
    const address = drizzleState.accounts[index];
    return (<div> 
        <h1 style = 
    {{textAlign : "center"}}>BCDV1011-Lab: Smart Contract - Oracle </h1>
    <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              click here to See your Address(Eth)
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{address}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click here to see your Balance
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{drizzleState.accountBalances[address]}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </div>
  );
};

export default Balance;