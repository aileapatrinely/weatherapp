import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

class Forms extends Component {
    state = {
        city:'',
        state:'',
    }

    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
      };

    render(){
        return(
            <div>
                <form>
                    <input type="text" name="City" value={this.state.city} required onChange={this.handleInputChangeFor('City')}/>
                    <input type="text" name="State" value={this.state.state} required onChange={this.handleInputChangeFor('State')}/>
                    <input type="submit" name="Submit"/>
                </form>
            </div>
        )
    }
}

export default connect()(Forms);