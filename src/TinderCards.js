import React, { useState } from 'react';
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Praveen Rao V P",
            url: "https://avatars.githubusercontent.com/u/80191078?v=4"
        },
    ]);
    return (
    <div className="container-cards">    
        <div className="tinderCards">
            <div className="person-name"></div>
            {people.map((person) => (
                <h1>{person.name}</h1>
            ))} 
        </div>
    </div>
  );
}

export default TinderCards