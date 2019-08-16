import React, { useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import styled from 'styled-components';

const MainContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;


const StarWars = () => {
    const [card, setCard]=useState([]);
    

    useEffect(()=>{
        axios
      .get(`https://swapi.co/api/people/`, {
        params: {}
      })
      .then(response => {
        console.log(response.data.results)
        const cards = response.data.results;
        setCard(cards);
       
      })
      .catch(function (error) {
        
        console.log(error);
      }) 
  }, []);

    return (
        <MainContainer>

{card.map((n)=> {
    
  return <CharacterCard  key={n.name}
                  name ={n.name}
                  
                  birth={n.birth_year}
                  gender={n.gender}
                  height={n.height}
                  mass ={n.mass}
                  hairColor ={n.hair_color}/> 
  
  
  })}
        </MainContainer>

    )


}
export default StarWars;