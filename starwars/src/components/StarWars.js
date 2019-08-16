import React, { useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

const StarWars = () => {
    const [card, setCard]=useState([]);

    useEffect(()=>{
        axios
      .get(`https://swapi.co/api/people`, {
        params: {}
      })
      .then(response => {
        console.log(response)
        
      })
      .catch(function (error) {
        
        console.log(error);
      }) 
  }, []);

    return (
        <div className="container">
from starwars
{/* <CharacterCard date={photo.date}
                    explanation = {photo.explanation}
                    image={photo.hdurl}
                    title={photo.title}/> */}
                    <CharacterCard />
        </div>

    )


}
export default StarWars;