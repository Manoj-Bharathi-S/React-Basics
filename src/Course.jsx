import altimg from './assets/alt.png';
import PropTypes from 'prop-types';

function Course(props){
    if (props.show == true){
            return (
        <div className="card">
            <img src={props.img}></img>
            <h3>{props.course}</h3>
            <p>{props.o_price}</p>
            <label>{props.n_price}</label><br/>
            <span>{props.rating}</span>
        </div>
    );
    }
    else{
        return (
            <div className="card">
                <img src={altimg}></img>
                Course not available
                </div>
        );
    }
}

Course.PropTypes = {
    img: PropTypes.string,
    course: PropTypes.string,
    o_price: PropTypes.string,
    n_price: PropTypes.string,
    rating: PropTypes.string,
    show: PropTypes.bool
}

export default Course;