import React, { Component } from 'react';
import axios from 'axios'

class CandleListView extends Component {

    state = {
        merchandises: []
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
                dflgkhnsk
            </div>
        );
    }
}

export default CandleListView;