import React from 'react';

const JokeComponent = ({ joke }) => {
    if(!joke) return null;
    return (
        <div>
            <p>CreatedAt: {joke.created_at}</p>
            <span>{joke.value}</span>
        </div>
    );
};

export default JokeComponent;