import PropTypes, { func } from 'prop-types';
import { useState } from 'react';

function Course(props) {

  // Using Hooks
  const [purchased,setPurchased] = useState(false);
  const [applydiscount,setDiscount] = useState(false);


  function BuyCourse(discount){
    console.log(props.course,"Purchased with",discount,"% discount");
    setPurchased(true);

  }
  function Applydiscount(discount){
    setDiscount(true);
  }

  return (
    // Content Filtering using Logical Operator
    props.course && <div className="card">
      <img src={props.img}></img>
      <h3>{props.course}</h3>
      <button onClick={() => Applydiscount(20)}>Apply Discount</button>
      <label>{applydiscount ? "$"+props.n_price : props.o_price}</label>
      <br />
      <span>{props.rating}</span>

      <button onClick={() => BuyCourse(20)}>{purchased ? "Purchased" : "Buy Now"}</button>
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
