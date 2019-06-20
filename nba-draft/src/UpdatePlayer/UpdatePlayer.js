import React, { Component } from 'react';
import './UpdatePlayer.css';
import axios from 'axios';

class UpdatePlayer extends Component {
    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        axios.put('http://localhost:8080/api/players', this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="print-area">
                <form>
                    <div>
                        <h1 className="update-player-header">Update Player Info</h1>

                        <label>Name: </label>
                        <input type="text" name="name" onChange={this.handleChange} />

                        <label>Age: </label>
                        <input type="text" name="age" onChange={this.handleChange} />

                        <label>College: </label>
                        <input type="text" name="college" onChange={this.handleChange} />

                        <input type="submit" onClick={this.handleSubmit} />
                    </div>
                </form>
                
            </div>
        );
    }
}

export default UpdatePlayer;