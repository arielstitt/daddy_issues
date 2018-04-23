import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class CandleListView extends Component {

    state = {
        merchandise:  []
    }

    componentDidMount() {
        this.getAllCandles()
    }

    getAllCandles = async () => {
        try {
            const response = await axios.get("/api/merchandises");
            this.setState({
                merchandise: response.data
            });

        } catch (err) {
            console.log(err);
            this.setState({ err: err.message });
        }
    }

    render() {
        return (
            <div>
                {this.state.merchandise.map(merchandise => {
                    return (
                        <div key={merchandise.id}>
                            <br />
                            <h1>{merchandise.title}</h1>
                            <br />
                            {merchandise.price}
                            <br />
                            {merchandise.description}
                            <br />
                            <img height="300px" width="300px" src={merchandise.image} />
                         
                        </div>
                    )
                })}

            </div>

        )

    };
};

export default CandleListView;