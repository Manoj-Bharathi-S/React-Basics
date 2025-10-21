function Course(props){
    return (
        <div className="course">
            <img src={props.img} alt=""></img>
            <h3>{props.course}</h3>
            <p>{props.o_price}</p>
            <label>{props.n_price}</label>
        </div>
    );
}
export default Course;