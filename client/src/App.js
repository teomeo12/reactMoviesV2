import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

 import "./App.css";
import DisplayAllMovies from "./components/DisplayAllMovies";
import AddMovie from "./components/AddMovie"
import EditMovie from "./components/EditMovie"
import DeleteMovie from "./components/DeleteMovie"
import Home from "./components/Home";
import LoadMovies from "./components/LoadMovies";


export default class App extends Component
{
    render()
    {
        return (
                <BrowserRouter>
                         {/*<header id="header">*/}
                         {/*  /!*<Link className="blue-button" to="/home">Home</Link>*!/*/}
                         {/*  /!*  <div id = "navbar" >*!/*/}
                         {/*        <Link className="blue-button" to="/loadData"> Load Data  </Link><span>&nbsp;  | &nbsp; </span>*/}
                         {/*        <Link className="blue-button" to="/DisplayAllMovies"> Display All  </Link><span>&nbsp;| &nbsp;</span>*/}
                         {/*        <Link className="blue-button" to="/AddMovie">Add new Movie</Link>*/}
                         {/*    /!*</div>*!/*/}

                         {/*</header>*/}
                  <Switch>
                    <Route exact path='/' component={DisplayAllMovies}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/loadData" component={LoadMovies}/>
                    <Route exact path="/DisplayAllMovies" component={DisplayAllMovies}/>
                    <Route exact path="/AddMovie" component={AddMovie} />
                    <Route exact path="/EditMovie/:id" component={EditMovie} />
                    <Route exact path="/DeleteMovie/:id" component={DeleteMovie} />
                    <Route path="*" component={() => <h3>Invalid URL. Webpage does not exist</h3>}/>
                  </Switch>
                    <div id="footerLink" href="https://www.dkit.ie/">All rights reserved DKIT 2021
                    </div>
                </BrowserRouter>
               )
    }
}