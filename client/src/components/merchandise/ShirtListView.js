import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CharcoalListView from "./CharcoalListView"
import MauveListView from './MauveListView'


class ShirtListView extends Component {

    state = {
        charcoal:  [],
        mauve: []
    }

    componentDidMount() {
        this.getAllMauve()
        this.getAllCharcoal() 
    }

// create a get all shirts function that calls on the getAllMauve and getAllCharcoal
    alertButton = () => {
        alert('you have successfully passed props!')
    }

    getAllMauve = async () => {
        try {
            const response = await axios.get("/api/merchandises");
            this.setState({
                mauve: response.data.mauves,
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
                charcoal: response.data.charcoals,
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
                <MauveListView 
                    getAllMauve = {this.getAllMauve}
                />
                <CharcoalListView
                    getAllCharcoal = {this.getAllMauve} 
                />

             


            </div>
        );
    }
}

export default ShirtListView;