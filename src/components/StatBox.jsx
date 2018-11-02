import React, { Component } from 'react';

export default class StatBox extends Component {
    render() {
        return (
            <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-secondary">+</button>
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text" id="btnGroupAddon">{this.props.Stat}</div>
              </div>
              <input type="text" className="form-control"/>
            </div>
          </div>
          
        );
    }
}