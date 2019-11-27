import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'


export default class Navbar extends Component {
    render () {
        return (
        <nav>
            <div class="nav-wrapper">
                <Link to="#" class="brand-logo">Logo</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="#">Sass</Link></li>
                    <li><Link to="#">Components</Link></li>
                    <li><Link to="#">JavaScript</Link></li>
                </ul>
            </div>
        </nav>
        )
    }
}