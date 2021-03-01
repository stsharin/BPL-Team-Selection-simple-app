import React from 'react';

const Selection = (props) => {
    const selection = props.selection;
    const totalSalary = selection.reduce((sum, player) => sum + player.salary, 0);

    return (
        <div>
            <h3>Selected: {selection.length}</h3>
            <h4>Total Budget: {totalSalary}</h4>
        </div>
    );
};

export default Selection;