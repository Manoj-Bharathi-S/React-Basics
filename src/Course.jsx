import PropTypes from 'prop-types';

function Course(props) {
  return (
    // Content Filtering using Logical Operator
    props.course && <div className="card">
      <img src={props.img}></img>
      <h3>{props.course}</h3>
      <p>{props.o_price}</p>
      <label>{props.n_price}</label>
      <br />
      <span>{props.rating}</span>
    </div>
  );
}

Course.PropTypes = {
  img: PropTypes.string,
  course: PropTypes.string,
  o_price: PropTypes.string,
  n_price: PropTypes.int,
  rating: PropTypes.string,
  show: PropTypes.bool,
};

export default Course;
