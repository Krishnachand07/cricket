import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index";


class Searchbar extends Component {
    constructor(props)
    {
        super(props);
        this.state ={term:''};
        this.onInput=this.onInput.bind(this);
        this.onForm=this.onForm.bind(this);
    }
    onInput(event)
    {
        this.setState({term: event.target.value});
    }

    onForm(event)
    {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term:'' });
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onForm} className="input-group col-12-md">
            <input 
                value={this.state.term}
                onChange={this.onInput}
                className="form-control"
                placeholder="Get the forecast..."
            />
            <span className="input-group-btn">
                <button className="btn btn-secondary" type="submit">Search</button>
            </span>
        </form>
      </div>
    );
  }
}


function mapDispatch(dispatch)
{
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatch)(Searchbar);