import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
    const {name, team, salary, image} = props.player;

    // const imageStyle = {height: '200px'}
    // const style = {backgroundColor: 'lightGray', margin: '20px', padding:'10px'}
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div>
            <div className="card m-5 p-2" style={{width: '18rem'}}>
                <img src={image} alt=""/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <p>Team Name: {team}</p>
                    <h5>Salary: {salary}</h5>
                    <button className="btn btn-success mt-2" onClick={() => handleAddPlayer(props.player)}>Add Players</button>
                </div>
            </div>
        </div>
    );
};

export default Player;