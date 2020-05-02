import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components';


const Meetup = (props) => {

  let centerText = {
    textAlign: "center"
  }

  let HoverImage = styled.img`
  height: 200px; 
  transition: transform .2s;
  display: inline;
   :hover{
    transform: scale(1.25)
  }
  `

  return (
    <Card style={{width:"23%", padding: "10px"}}>
      <HoverImage src={props.img} alt="restaurant"/>
      <Card.Content>
        <Card.Header style={centerText}>{props.name}</Card.Header>
        <Card.Meta style={centerText}>
          <span className='datetime'>{props.datetime}</span>
        </Card.Meta>
        <Card.Description style={centerText}>
          {props.description + props.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra style={centerText}>
        <a>
          <Icon name='info circle'/> See Details
        </a>
      </Card.Content>
    </Card>
  );
}


Meetup.defaultProps = {
  datetime: "January 1, 2020 at 5:00 PM",
  description: "You are meeting Stanley, Eric and Abid at ",
  name: "Restaurant Name.",
}

export default Meetup;