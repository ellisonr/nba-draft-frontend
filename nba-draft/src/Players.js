import React, { Component } from 'react';
import axios from 'axios';
import './Players.css'

class Players extends Component {
    constructor(props){
        super(props)
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/players')
        .then(res => {
            this.setState({players: res.data})
        })
    }

    render() {
        let allPlayers = this.state.players.map((players, index) => {
            return (
                <div className="players" key={index}>
                    <p className="playersDetails">Name: {players.name}</p>
                    <p className="playersDetails2">Age: {players.age}</p>
                    <p className="playersDetails2">College: {players.college}</p>
                </div>
            )
        })
        return (
            <div className="print-area">
                {allPlayers}
            </div>
        );
    }
}

export default Players;