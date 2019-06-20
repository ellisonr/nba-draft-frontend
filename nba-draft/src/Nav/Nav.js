import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="nav-bar">
                <h1 className="header">2019 NBA Prospects</h1>
                <nav>
                    <Link to='/show' className="nav-link">All Players</Link>
                    <Link to='/create' className="nav-link">Add Player</Link>
                    <Link to='/update' className="nav-link">Update Player Info</Link>
                    <Link to='/delete' className="nav-link">Delete Player</Link>
                </nav>
            </div>
        );
    }
}

export default Nav;