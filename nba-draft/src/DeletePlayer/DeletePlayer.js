import React, { Component } from 'react';
import './DeletePlayer.css';
import axios from 'axios';

class DeletePlayer extends Component {
    handleChange = e => {

    }

    handleDelete = e => {
        e.preventDefault();
        axios.delete('http://localhost:8080/api/players', this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className="print-area">
                <form>
                    <div>
                        <h1 className="delete-player-header">Delete a Player</h1>
                    </div>
                </form>
            </div>
        );
    }
}

export default DeletePlayer;