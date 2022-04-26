import React, { Component } from 'react';

class PredictionService extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading: false,
        formData: {
          sepalLength: "TEXT INFORMATION"
        },
        result: {
            0:0,
            1:0,
            2:0,
            3:0,
            
            4:0,
            5:0,
            6:0,
            7:0,
            
            8:0,
            9:0,
            10:0,
            11:0,
            
            12:0,
            13:0,
            14:0,
            15:0,
        }
      };
    }
  
    handleChange = (event) => {
      const value = event.target.value;
      const name = event.target.name;
      var formData = this.state.formData;
      formData[name] = value;
      this.setState({
        formData
      });
    }
  
    handlePredictClick = (event) => {
      console.log("Hello CLikc")
      const formData = this.state.formData;
      this.setState({ isLoading: true });
      fetch('http://127.0.0.1:5000/prediction/', 
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(response => {
          this.setState({
            result: response.result,
            isLoading: false
          });
        });
    }
  
    handleCancelClick = (event) => {
      this.setState({ result: {} });
    }
}

export default PredictionService;