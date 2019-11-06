import React, { Component } from 'react';
import {Typography} from '@material-ui/core/'
import TradeTable from '../tradeTable/tradeTable'

export default class DashBoard extends Component {
constructor(props) {
        super(props);
        this.getTradingData = this.getTradingData.bind(this);
        this.state = { 
            apiResponse: ""
         };
    }
    getTradingData(){
     //Trade data API Call
     fetch("http://localhost:9000/tradeAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: JSON.parse(res)}));
        }
        componentWillMount(){
            this.getTradingData();
        }
    
    render() {
      return (<div>
       <Typography variant="h6" align="left" color='textPrimary'>Trade Data
        </Typography>
        <TradeTable props={[this.state.apiResponse]} />
   </div>
  )
 }
}

