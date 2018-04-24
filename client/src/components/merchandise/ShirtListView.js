import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CharcoalListView from "./CharcoalListView"
import MauveListView from './MauveListView'


class ShirtListView extends Component {

    state = {
        merchandise:  []
    }

    componentDidMount() {
        this.getAllMauve()
        this.getAllCharcoal() 
    }

// create a get all shirts function that calls on the getAllMauve and getAllCharcoal


    getAllMauve = async () => {
        try {
            const response = await axios.get("/api/merchandises");
            this.setState({
                merchandise: response.data.mauves,
            });
            console.log(response.data.mauves)
        } catch (err) {
            console.log(err);
            this.setState({ err: err.message });
        }
    }

    getAllCharcoal = async () => {
        try {
            const response = await axios.get("/api/merchandises");
            this.setState({
                merchandise: response.data.charcoals,
            });
            console.log(response.data.charcoals)
        } catch (err) {
            console.log(err);
            this.setState({ err: err.message });
        }
    }

    render() {
        return (
            <div>
                Hello from the shirts list view!!!
                {/* pass props into the mauve and charcoal components */}
                <MauveListView/>
                <CharcoalListView/>

             


            </div>
        );
    }
}

export default ShirtListView;