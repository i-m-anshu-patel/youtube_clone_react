import React, { Component } from "react";

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="d-flex mt-3 justify-content-between gap-3">
                    <input type="text" name="searchBox" className="form-control rounded-2" onChange={this.handleChange} placeholder="Search..."/>
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
        )
    }
}