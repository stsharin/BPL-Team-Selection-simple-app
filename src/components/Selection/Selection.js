import React from 'react';

const Selection = (props) => {
    const selection = props.selection;
    const totalSalary = selection.reduce((sum, player) => sum + player.salary, 0);

    return (
        <div>
            <h1>Selected: {selection.length}</h1>
            <p>Total Budget: {totalSalary}</p>
        </div>
    );
};

export default Selection;