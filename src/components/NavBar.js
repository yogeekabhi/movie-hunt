import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-dark mb-5">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand text-white text-lg brand-text" href="#">
                                Movie Hunt
                            </a>
                        </div>
                        <ul className="navbar-nav ml-auto text-light d-inline-block">
                            <li className="nav-item d-inline-block mr-4">
                                <img alt="src="https://images.app.goo.gl/z3WuwgHL9iKKDjMw9"/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        )
    }
}
