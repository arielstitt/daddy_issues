import React, { Component } from 'react';
import HeaderNav from './HeaderNav'

class CharcoalListView extends Component {
    render() {
        return (
            <div>
                
                {this.props.charcoal.map(shirt => {
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

export default CharcoalListView;