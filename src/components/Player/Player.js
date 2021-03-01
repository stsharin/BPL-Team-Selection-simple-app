import React from 'react';

const Player = (props) => {
    const {name, team, salary, image} = props.player;

    const imageStyle = {height: '200px'}
    const style = {backgroundColor: 'lightGray', margin: '20px', padding:'10px'}
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div style={style}>
            <img style={imageStyle} src={image} alt=""/>
            <h2>Name: {name}</h2>
            <h3>Team Name: {team}</h3>
            <h3>Salary: {salary}</h3>
            <button onClick={() => handleAddPlayer(props.player)}>Add Players</button>
        </div>
    );
};

export default Player;