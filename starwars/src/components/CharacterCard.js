import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
     width:30%;
     background:white;
     color:black;
     padding:20px 20px;
     border-radius:10px;
     border: 5px solid black;
     text-align:center;
     margin:30px 0;
`;
const CardName = styled.h3`
    border-bottom: 5px solid blue;
    padding:0 0 10px 0;
`;

const CharacterCard = (props) => {
    // if (!props.image)
    //     return <h3>Loading...</h3>;

    return (
        <CardContainer>
            
            <CardName>{props.name}</CardName>
            < div>
            <p>Birth Year: {props.birth}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass:{props.mass}</p>
            <p>Hair Color:{props.hairColor}</p>
            </div>
        </CardContainer>

    )


}
export default CharacterCard;