import React, { Component } from 'react';
import axios from 'axios'
import { link } from 'react-router-dom'


class MauveListView extends Component {

    render() {
        return (
            <div>
            {this.props.mauve.map(shirt => {
                    return (
                        <div key={shirt.id}>
                            <img height="300px"
                                width="300px"
                                src={shirt.image}
                            />
                            <br />
                            <h1> {shirt.title}</h1>
                            <br />
                            {shirt.price}
                            <br />
                            {shirt.description}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default MauveListView;