import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineFieldTime} from 'react-icons/ai';
import {FcCalendar} from 'react-icons/fc';
import {GiDirectorChair} from "react-icons/gi";
import {FaEdit} from 'react-icons/fa';
import {MdDeleteForever} from 'react-icons/md';
import imageNotFound from '../images/vintage.jpg';



export default class MovieTableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
            backgroundImage: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg'

        };
    }

    render() {
        return (
            // 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg'
            <>
                {/*<img src={imageNotFound} alt={'Some text'}/>*/}
                <div className="movie__container">
                    <img className="movie__img" src={this.props.movie.posterUrl} onError={(e) => {
                        e.currentTarget.src = 'https://drive.google.com/file/d/1eH38Pjwu1Imzyyz7YCmIKg6e5qUf2hQN/view?usp=sharing'
                    }} alt="Bricks"/>

                    {/*<img className="movie__img" src={this.props.movie.posterUrl} onError={(e)=>{e.target.onerror = null; e.target.src="imageNotFound"}}/>*/}

                    <div className="movie__overlay movie__overlay--primary">
                        {/*<header className="card__header">*/}
                        {/*    <nav className="card__nav">*/}
                        {/*        <ul className="list--nav">*/}
                        <div className="movie__navbar">
                            <li><Link className="green__button" to={"/EditMovie/" + this.props.movie._id}><FaEdit/> Edit</Link>
                            </li>
                            <li><Link className="red__button" to={"/DeleteMovie/" + this.props.movie._id}> <MdDeleteForever/> Delete</Link>
                            </li>
                        </div>


                        {/*</ul>*/}
                        {/*    </nav>*/}
                        {/*</header>*/}
                        <div className="movie__title">{this.props.movie.title}</div>
                        <div className="movie__description">
                            {this.props.movie.plot}
                        </div>
                        <div className="movie__actors">
                            <p className="actors"><span style={{color:"grey", fontStyle:"normal",fontWeight:"bold"}}>Cast:</span> {this.props.movie.actors}</p>
                        </div>
                        <div className="movie__genres">
                            <p><span style={{color:"grey", fontStyle:"normal",fontWeight:"bold"}}>Genre: </span>{this.props.movie.genres.join(' | ')}</p>
                        </div>
                        <div className="card__footer">

                                <li><span style={{color:"blue", fontStyle:"normal",fontWeight:"bold"}}> <GiDirectorChair/>  </span>{this.props.movie.director}</li>  &nbsp;  <span style={{color:"grey", fontStyle:"normal",fontWeight:"bold"}}> <FcCalendar/> </span>

                                <li>{this.props.movie.year}</li> <span style={{color:"yellowgreen", fontStyle:"normal",fontWeight:"bold"}}> &nbsp;   <AiOutlineFieldTime/>   </span>


                                <li>{this.props.movie.runtime} min</li>

                        </div>
                    </div>
                </div>

            </>

        )
    }
}



