import React, { Component } from 'react';
import axios from 'axios'
import {link} from 'react-router-dom'


class MauveListView extends Component {
    render() {
        return (
            <div>
               MAUVE COMPONENT!
               {this.props.getAllMauve}
               <button
                onClick={this.props.alertButton}
               >TEST</button>
            </div>
        );
    }
}

export default MauveListView;