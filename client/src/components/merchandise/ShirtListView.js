import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CharcoalListView from "./CharcoalListView"
import MauveListView from './MauveListView'
import HeaderNav from './HeaderNav'
import { Header } from 'semantic-ui-react';


class ShirtListView extends Component {

    state = {
        charcoal: [],
        mauve: [],
        showCharcoal: false
    }

    componentDidMount() {
        this.getAllMauve()
        this.getAllCharcoal()
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

    toggleCharcoalView = () => {
        this.setState({
            showCharcoal: !this.state.showCharcoal
        })
    }

    render() {
        return (
            <div>
                <HeaderNav />
                {/* pass props into the mauve and charcoal components */}

                {/* if true, show mauve, if false, show charcoal */}
               
                {this.state.showCharcoal ?
                    (<CharcoalListView
                        toggleCharcoalView = {this.toggleCharcoalView}
                        getAllCharcoal={this.getAllCharcoal}
                        charcoal={this.state.charcoal}
                    />) :
                    (<MauveListView
                        toggleCharcoalView = {this.toggleCharcoalView}
                        getAllMauve={this.getAllMauve}
                        mauve={this.state.mauve}

                    />)}










            </div>
        );
    }
}

export default ShirtListView;