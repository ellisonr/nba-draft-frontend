import React, { Component } from 'react';
import './DeletePlayer.css';
import axios from 'axios';

class DeletePlayer extends Component {
    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDelete = e => {
        e.preventDefault();
        axios.delete('http://localhost:8080/api/players/', this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className="print-area">
                <form>
                    <div>
                        <h1 className="delete-player-header">Delete a Player</h1>
                        <input type="text" name="name" onChange={this.handleChange} />

                        <input type="submit" onClick={this.handleDelete} />
                    </div>
                </form>
            </div>
        );
    }
}

export default DeletePlayer;