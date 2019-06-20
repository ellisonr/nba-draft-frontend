import React, { Component } from 'react';
import axios from 'axios';

class CreatePlayer extends Component {
    
    render() {
        return (
            <div className="print-area">
                <form>
                    <div>
                        <h1>Add a Player</h1>
                        <label>Name</label>
                        <label>Age</label>
                        <label>College</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePlayer;