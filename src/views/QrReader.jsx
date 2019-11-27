import React, { Component } from 'react'; 
import QrReader from 'react-qr-reader';


export default class LectorQr extends Component {
    state = {
      result: 'No result'
    }
   
    handleScan = data => {
      if (data) {
        this.setState({
          result: data
        })
      }
    }
    handleError = err => {
      console.error(err)
    }
    render() {
      return (
        <div className="qr">
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
          <a href={this.state.result} target='_blank' rel="noopener noreferrer">{this.state.result}</a>
          
        </div>
      )
    }
  }
