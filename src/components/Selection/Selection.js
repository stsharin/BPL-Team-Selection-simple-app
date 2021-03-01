import React from 'react';

const Selection = (props) => {
    const selection = props.selection;
    const totalSalary = selection.reduce((sum, player) => sum + player.salary, 0);

    let totalSelectedName = "";
    let selectedPlayerSalary = "";
    for (let i = 0; i < selection.length; i++) {
        const selected = selection[i];
        totalSelectedName = totalSelectedName + " " + selected.name;
        selectedPlayerSalary = selectedPlayerSalary + " " + selected.salary;
    }

    return (
        <div>
            <h3>Selected: {selection.length}</h3>
            <h4>Total Budget: {totalSalary}</h4>
            <h3>Selected Player Name: {totalSelectedName}</h3>
            <h3>Selected Player Salary: {selectedPlayerSalary}</h3>
        </div>
    );
};

export default Selection;