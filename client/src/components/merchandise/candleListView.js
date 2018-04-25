import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import UniqueNav from '../UniqueNav'
import { Grid, Image, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import HeaderNav from './HeaderNav'

const MerchWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-around;
`

const MerchSpace = styled.div`
padding:3%;
margin: 1%;
`

class CandleListView extends Component {

    state = {
        merchandise: [],
        candle: {}
    }

    componentDidMount() {
        this.getAllCandles()
        this.getSingleCandle()
    }

    getSingleCandle = async () => {
        try {
            const candleId = this.state.candle.id
            const response = await axios.get(`/api/merchandises/${candleId}`);
            this.setState({
                candle: response.data.candles
            });
            console.log(response.data.candles)
        } catch (err) {
            console.log(err);
            this.setState({ err: err.message });
        }
        
    }
    getAllCandles = async () => {
        try {
            const response = await axios.get("/api/merchandises");
            this.setState({
                merchandise: response.data.candles
            });
            console.log(response.data.candles)
        } catch (err) {
            console.log(err);
            this.setState({ err: err.message });
        }
    }

    render() {
        return (
            <div>
                <HeaderNav />
                <MerchWrap>

                    {this.state.merchandise.map(merchandise => {
                        return (
                            <div key={merchandise.id}>
                                <MerchSpace>
                                    <Grid.Column >
                                        <Segment>
                                            <h1> {merchandise.title}</h1>
                                            <Image
                                                height="300px"
                                                width="300px"
                                                src={merchandise.image}
                                            />
                                            <h3> $ {merchandise.price}</h3>
                                        </Segment>

                                    </Grid.Column>

                                </MerchSpace>
                            </div>
                        )
                    })}

                </MerchWrap>
            </div>
        )

    };
};

export default CandleListView;