import React from "react";
import axios from "axios";

import { Component } from "react";

export class Api extends Component {
  constructor() {
    super();
    this.state = {
      googleTennis: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(result => {
        this.setState({
          googleTennis: result.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.googleTennis.map((player, index) => (
          <div key={index}>
            <h1 className='name'>Name: {player.name}</h1>
            <h2 data-testid='h2'>Country: {player.country}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default Api;
