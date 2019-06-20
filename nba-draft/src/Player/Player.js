// import React, { Component } from 'react';

// class Player extends Component {
    
//     componentDidMount(){

//     }

//     render() {
//         let singlePlayer = this.props.players.filter(player =>
//             player.name === this.props.match.params.name)[0];
//         return (
//             <div className="single-player">
//                 <h1>{singlePlayer.name}</h1>
//                 <h3>Age: {singlePlayer.age}</h3>
//                 <h3>College: {singlePlayer.college}</h3>
//             </div>
//         );
//     }
// }

// export default Player;

import React, { Component } from 'react';
import axios from 'axios';

class Player extends Component {
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
        let singlePlayer = this.state.players.filter(player =>
            player.name === this.state.match.params.name)[0];
        return (
            <div className="single-player">
                <h1>{singlePlayer.name}</h1>
                <h3>Age: {singlePlayer.age}</h3>
                <h3>College: {singlePlayer.college}</h3>
            </div>
        );
    }
}

export default Player;