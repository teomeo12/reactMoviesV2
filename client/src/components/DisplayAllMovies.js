import React, {Component} from "react";
import MoviesTable from './MoviesTable';
import axios from "axios"
import {SERVER_HOST} from '../config/global_constants.js'
import {Link} from "react-router-dom";


export default class DisplayAllMovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get(`${SERVER_HOST}/movies`)


            .then(res => {
                if (res.data) {
                    console.log(res.data)
                    if (res.data.errorMessage) {
                        console.log(res.data.errorMessage)
                    } else {
                        console.log("Records read")
                        this.setState({movies: res.data})
                    }
                } else {
                    console.log("Records not found")
                }
            })
    }

    render() {
        return (
            <div className="form-container">
                <header id="header">

                    {/*<Link className="blue-button" to="/home">Home</Link>*/}
                    {/*  <div id = "navbar" >*/}
                    <Link className="blue-button" to="/loadData"> Load Data </Link><span>&nbsp;  | &nbsp; </span>
                    <Link className="blue-button" to="/DisplayAllMovies"> Display All </Link><span>&nbsp;| &nbsp;</span>
                    <Link className="blue-button" to="/AddMovie">Add new Movie</Link>
                    {/*</div>*/}

                </header>

                <MoviesTable movies={this.state.movies}/>

                {/*<div className="add-new-car">*/}
                {/*    <Link className="blue-button" to={"/AddMovie"}>Add New Movie</Link>*/}
                {/*</div>*/}



            </div>
        )
    }
}