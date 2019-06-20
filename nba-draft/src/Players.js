import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
                    <Link to={'/players/'+ players.name}>
                    <p className="playersDetails">{players.name}</p>
                    </Link>
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