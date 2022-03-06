import React, { useState } from 'react';
import './TinderCards.css'
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Praveen Rao V P",
            url: "https://avatars.githubusercontent.com/u/80191078?v=4"
        },
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/330px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
        },
        {
            name: "Angelina Jolie",
            url: "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL__QL50.jpg"
        }
    ]);

    const swiped = (direction,nameToDelete) => {
        console.log("removing "+nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }


    return (
        <div className="tinderCards">
            <div className="TinderCards__Container">
                {people.map((person) => (
                    <TinderCard 
                    className='swipe' 
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>                
                    </TinderCard>
                ))}
            </div>
        </div>
  );
}

export default TinderCards