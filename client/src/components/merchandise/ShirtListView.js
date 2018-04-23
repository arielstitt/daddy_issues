import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



class ShirtListView extends Component {

    state = {
        merchandise:  []
    }

    componentDidMount() {
        // this.getAllMauve()
        // this.getAllCharcoal() 
        this.getAllShirts()
    }
    getAllShirts = async () => {
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

    // getAllMauve = async () => {
    //     try {
    //         const response = await axios.get("/api/merchandises");
    //         this.setState({
    //             merchandise: response.data.mauves,
    //         });
    //         console.log(response.data.mauves)
    //     } catch (err) {
    //         console.log(err);
    //         this.setState({ err: err.message });
    //     }
    // }

    // getAllCharcoal = async () => {
    //     try {
    //         const response = await axios.get("/api/merchandises");
    //         this.setState({
    //             merchandise: response.data.charcoals,
    //         });
    //         console.log(response.data.charcoals)
    //     } catch (err) {
    //         console.log(err);
    //         this.setState({ err: err.message });
    //     }
    // }

    render() {
        return (
            <div>
                Hello from the shirts list view!!!
                
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
        );
    }
}

export default ShirtListView;