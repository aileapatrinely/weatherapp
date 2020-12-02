import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import {connect, ReactReduxContext} from 'react-redux';

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    This is a thing in App.js. I'm gonn make a weather app.
                </div>
            </Router>
        )
    }
}