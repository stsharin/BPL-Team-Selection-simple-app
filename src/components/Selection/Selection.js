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
        <div className="container">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div class="col m-2">
                    <div class="p-3 border bg-light">
                        <h3>Selected: {selection.length}</h3>
                    </div>
                </div>
                <div class="col m-2">
                    <div class="p-3 border bg-light">
                        <h4>Total Budget: {totalSalary}</h4>
                    </div>
                </div>
                <div class="col m-2">
                    <div class="p-3 border bg-light">
                    <h3 style={{color: "green"}}>Selected Player Name: </h3>
                    
                    <h5>{totalSelectedName}</h5>
                    </div>
                </div>
                <div class="col m-2">
                    <div class="p-3 border bg-light">
                        <h3 style={{color: "green"}}>Selected Player Salary: </h3>
                        <h4>{selectedPlayerSalary}</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Selection;