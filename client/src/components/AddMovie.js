import React, {Component} from "react"
import {Redirect, Link} from "react-router-dom"
import Form from "react-bootstrap/Form"

import axios from "axios"

import LinkInClass from "../components/LinkInClass"

import {SERVER_HOST} from "../config/global_constants"


export default class AddMovie extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            title:"",
            year:"",
            runtime:"",
            genres:[],
            director:"",
            posterUrl:"",
            actors:"",
            plot:"",
            redirectToDisplayAllMovies:false
        }
    }

    componentDidMount()
    {
        this.inputToFocus.focus()
    }

    handleChange = (e) =>
    {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>
    {
        e.preventDefault()

        this.setState({ wasSubmittedAtLeastOnce: true });

        const formInputsState = this.validate();

        if (Object.keys(formInputsState).every(index => formInputsState[index]))
        {
            const movieObject = {
                title: this.state.title,
                year: this.state.year,
                runtime: this.state.runtime,
                genres: this.state.genres,
                director: this.state.director,
                posterUrl: this.state.posterUrl,
                actors: this.state.actors,
                plot: this.state.plot,
                wasSubmittedAtLeastOnce: false
            }

            axios.post(`${SERVER_HOST}/movies`, movieObject)
                .then(res =>
            {
                if(res.data)
                {
                    if (res.data.errorMessage)
                    {
                        console.log(res.data.errorMessage)
                    }
                    else
                    {
                        console.log("Record added")
                        this.setState({redirectToDisplayAllMovies:true})  }
                }
                else
                {
                    console.log("Record not added")
                }
            })
        }
    }
    validateTitle()
    {
        const pattern = /^[0-9a-zA-Z\s]+$/
        return pattern.test(String(this.state.title))
    }
    validateYear()
    {
        const year = parseInt(this.state.year)
             //   const today = new Date()
                return (year >= 1950 )
    }
    validateRuntime()
    {

        const pattern = /^[0-9]/
        return pattern.test(String(this.state.runtime))
    }
    validateGenres()
    {
        const pattern = /^[A-Za-z,;|\s]+$/
                return pattern.test(String(this.state.genres))
    }
    validate()
    {
        return {
            title: this.validateTitle(),
            year: this.validateYear(),
            runtime: this.validateRuntime(),
            genres: this.validateGenres()
        };
    }
    handleGenres = (e) => {
        if(this.state.genres.some(genre => genre === e.target.value)) {
            this.setState({genres: this.state.genres.filter(function(genre){
                    return genre !== e.target.value
                })});
        }
        else {
            this.setState({genres: this.state.genres.concat(e.target.value)})
        }

        console.log(this.state.genres)
    }

    render()
    {
        const genreList = "Comedy,Fantasy,Crime,Drama,Music,Adventure,History,Thriller,Animation,Family,Mystery,Biography,Action,Film-Noir,Romance,Sci-Fi,War,Western,Horror,Musical,Sport".split(",")

        let errorMessage = "";
//        if(this.state.wasSubmittedAtLeastOnce)
//        {
//            errorMessage = <div className="error">Car Details are incorrect<br/></div>;
//        }

                           let titleErrorMessage = ""
                           let yearErrorMessage = ""
                           let runtimeErrorMessage = ""
                           let genresErrorMessage = ""

//                            if(this.state.wasSubmittedAtLeastOnce)
//                            {
//                                errorMessage = <div className="error">Car Details are incorrect<br/></div>;
//                            }

                            if(!this.validateTitle())
                                    {
                                        titleErrorMessage = <div className="error">Title must contain only letters<br/></div>
                                    }
                            if(!this.validateYear())
                                 {
                                       yearErrorMessage = <div className="error">Year must be greater than 1950<br/></div>
                                 }
                            if(!this.validateRuntime())
                                    {
                                        runtimeErrorMessage = <div className="error">Runtime must be numbers only<br/></div>
                                    }
                            if(!this.validateGenres())
                                 {
                                       genresErrorMessage = <div className="error">Genres must be letters only <br/></div>
                                 }

        return (
            <div className="wrapper">


            <div className="addForm-container">

                {this.state.redirectToDisplayAllMovies ? <Redirect to="/DisplayAllMovies"/> : null}
                <h2 className="title_editForm">Edit Movie</h2>
                <Form>


                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref = {(input) => { this.inputToFocus = input }} type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                         {titleErrorMessage}
                    </Form.Group>

                    <Form.Group controlId="year">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="text" name="year" value={this.state.year} onChange={this.handleChange} />
                    {yearErrorMessage}

                    </Form.Group>

                    <Form.Group controlId="runtime">
                        <Form.Label>Runtime</Form.Label>
                        <Form.Control type="text" name="runtime" value={this.state.runtime} onChange={this.handleChange} />
                    {runtimeErrorMessage}

                    </Form.Group>

                    <Form.Group controlId="genres">
                        <Form.Label>Genres</Form.Label>
                        <Form.Control type="text" name="genres" value={this.state.genres} onChange={this.handleChange} />

                   {genresErrorMessage}
                    </Form.Group>

                    {/*<div class="genres">*/}

                        {/*<Form.Group controlId="genres">*/}
                        {/*    <Form.Label>Genres</Form.Label>*/}
                        {/*    {genreList.map(genre =>*/}
                        {/*        <Form.check name="genres" value={genre} key={genre} label={genre} left="true" onChange={this.handleGenres} />*/}
                        {/*    )}*/}
                        {/*</Form.Group>*/}
                    {/*</div>*/}

                    <Form.Group controlId="director">
                          <Form.Label>Director</Form.Label>
                       <Form.Control type="text" name="director" value={this.state.director} onChange={this.handleChange} />
                       </Form.Group>

                    <Form.Group controlId="posterUrl">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" name="posterUrl" value={this.state.posterUrl} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="actors">
                        <Form.Label>Actors</Form.Label>
                        <Form.Control type="text" name="actors" value={this.state.actors} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="plot">
                        <Form.Label>Plot Info</Form.Label>
                        <Form.Control type="text" name="plot" value={this.state.plot} onChange={this.handleChange} />
                    </Form.Group>

                        {errorMessage}

                    <LinkInClass value="Add" className="green-button" onClick={this.handleSubmit}/>

                    <Link className="redCancel-button" to={"/DisplayAllMovies"}>Cancel</Link>


                </Form>
            </div>
            </div>
        )
    }
}

