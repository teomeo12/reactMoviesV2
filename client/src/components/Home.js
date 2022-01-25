import React, {Component} from "react"

//import CarTable from "./CarTable"


export default class Home extends Component 
{
    constructor(props) 
    {
        super(props)
        
        this.state = {
            cars:[]
        }
    }
    
    render() 
    {   
        return (           
            <div className="form-container">
                <div className="table-container">
                    <div>
                    <h1>content</h1> 

                    </div>
                </div>
            </div> 
        )
    }
}

